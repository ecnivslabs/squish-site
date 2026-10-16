export class SpatialIndex {
  private readonly heads = new Int32Array(4096);
  private next = new Int32Array(4096);
  private items = new Int32Array(4096);
  private count = 0;
  private stamp = 0;
  private readonly visited: Uint32Array;
  private readonly results: number[] = [];

  constructor(
    private readonly spacing: number,
    itemCount: number,
  ) {
    this.visited = new Uint32Array(itemCount);
    this.clear();
  }

  clear() {
    this.heads.fill(-1);
    this.count = 0;
  }

  private hash(x: number, y: number, z: number) {
    return (
      (Math.imul(x, 73856093) ^
        Math.imul(y, 19349663) ^
        Math.imul(z, 83492791)) &
      4095
    );
  }

  insert(item: number, min: readonly number[], max: readonly number[]) {
    for (
      let x = Math.floor(min[0] / this.spacing);
      x <= Math.floor(max[0] / this.spacing);
      x++
    ) {
      for (
        let y = Math.floor(min[1] / this.spacing);
        y <= Math.floor(max[1] / this.spacing);
        y++
      ) {
        for (
          let z = Math.floor(min[2] / this.spacing);
          z <= Math.floor(max[2] / this.spacing);
          z++
        ) {
          if (this.count === this.items.length) {
            const next = new Int32Array(this.count * 2),
              items = new Int32Array(this.count * 2);
            next.set(this.next);
            items.set(this.items);
            this.next = next;
            this.items = items;
          }
          const key = this.hash(x, y, z),
            offset = this.count++;
          this.items[offset] = item;
          this.next[offset] = this.heads[key];
          this.heads[key] = offset;
        }
      }
    }
  }

  query(min: readonly number[], max: readonly number[] = min) {
    this.results.length = 0;
    this.stamp = (this.stamp + 1) >>> 0;
    if (!this.stamp) {
      this.visited.fill(0);
      this.stamp = 1;
    }
    for (
      let x = Math.floor(min[0] / this.spacing);
      x <= Math.floor(max[0] / this.spacing);
      x++
    ) {
      for (
        let y = Math.floor(min[1] / this.spacing);
        y <= Math.floor(max[1] / this.spacing);
        y++
      ) {
        for (
          let z = Math.floor(min[2] / this.spacing);
          z <= Math.floor(max[2] / this.spacing);
          z++
        ) {
          for (
            let offset = this.heads[this.hash(x, y, z)];
            offset !== -1;
            offset = this.next[offset]
          ) {
            const item = this.items[offset];
            if (this.visited[item] === this.stamp) continue;
            this.visited[item] = this.stamp;
            this.results.push(item);
          }
        }
      }
    }
    return this.results;
  }
}
