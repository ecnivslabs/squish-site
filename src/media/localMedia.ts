const DATABASE = "storefront.media.v1";
const STORE = "media";

function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("Video storage is unavailable in this browser."));
      return;
    }
    const request = indexedDB.open(DATABASE, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(new Error("Video storage could not be opened."));
    request.onblocked = () =>
      reject(new Error("Close other Mallow Club tabs and try uploading again."));
  });
}

export async function saveProductVideo(file: File) {
  if (!["video/mp4", "video/webm"].includes(file.type))
    throw new Error("Choose an MP4 or WebM video.");
  if (file.size > 25000000)
    throw new Error("Choose a squish clip smaller than 25 MB.");
  if (file.size === 0) throw new Error("This video file is empty.");
  await new Promise<void>((resolve, reject) => {
    const video = document.createElement("video");
    const url = URL.createObjectURL(file);
    const timer = setTimeout(
      () =>
        finish(
          new Error(
            "The video could not be read. Try another MP4 or WebM clip.",
          ),
        ),
      8000,
    );
    function finish(error?: Error) {
      clearTimeout(timer);
      video.onloadedmetadata = null;
      video.onerror = null;
      video.removeAttribute("src");
      video.load();
      URL.revokeObjectURL(url);
      if (error) reject(error);
      else resolve();
    }
    video.onloadedmetadata = () => {
      video.onloadedmetadata = null;
      video.onerror = null;
      finish(
        Number.isFinite(video.duration) &&
          video.duration > 0 &&
          video.duration <= 60
          ? undefined
          : new Error(
              "Use a short, playable squish clip of 60 seconds or less.",
            ),
      );
    };
    video.onerror = () => {
      video.onloadedmetadata = null;
      video.onerror = null;
      finish(
        new Error(
          "This video could not be decoded. Choose a playable MP4 or WebM clip.",
        ),
      );
    };
    video.preload = "metadata";
    video.src = url;
  });
  const database = await openDatabase();
  const id = crypto.randomUUID();
  return new Promise<string>((resolve, reject) => {
    const transaction = database.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).put(file, id);
    transaction.oncomplete = () => {
      database.close();
      resolve(id);
    };
    transaction.onerror = () => {
      database.close();
      reject(
        new Error(
          "This browser could not save the video. Check available storage and try again.",
        ),
      );
    };
    transaction.onabort = () => {
      database.close();
      reject(new Error("The video upload was interrupted. Please try again."));
    };
  });
}

export async function loadProductVideo(id: string): Promise<Blob> {
  const database = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE, "readonly");
    const request = transaction.objectStore(STORE).get(id);
    request.onsuccess = () => {
      if (request.result instanceof Blob) resolve(request.result);
      else reject(new Error("This squish clip is not stored in this browser."));
    };
    request.onerror = () =>
      reject(new Error("The squish clip could not be loaded."));
    transaction.oncomplete = () => database.close();
    transaction.onabort = () => {
      database.close();
      reject(new Error("Video loading was interrupted."));
    };
  });
}

export async function deleteProductVideo(id: string) {
  const database = await openDatabase();
  return new Promise<void>((resolve, reject) => {
    const transaction = database.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).delete(id);
    transaction.oncomplete = () => {
      database.close();
      resolve();
    };
    transaction.onerror = () => {
      database.close();
      reject(new Error("The previous preview clip could not be removed."));
    };
    transaction.onabort = () => {
      database.close();
      reject(new Error("Video removal was interrupted."));
    };
  });
}
