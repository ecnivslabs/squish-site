import { defineConfig } from "@playwright/test";

const ci = Boolean(process.env.CI);
const baseURL = `http://127.0.0.1:${ci ? 4173 : 5173}`;

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: false,
  workers: 1,
  timeout: 45000,
  use: {
    baseURL,
    headless: true,
    viewport: { width: 1440, height: 1000 },
    channel: ci ? "chromium" : undefined,
    launchOptions: {
      executablePath: process.env.CHROMIUM_EXECUTABLE_PATH,
      // Hosted runners have no GPU. Use software WebGL for our trusted test app.
      args: ci ? ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] : [],
    },
    trace: "retain-on-failure",
  },
  webServer: {
    command: ci ? "npm run preview -- --port 4173 --strictPort" : "npm run dev",
    url: baseURL,
    reuseExistingServer: !ci,
  },
});
