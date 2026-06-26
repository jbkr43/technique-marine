import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 15000,
  retries: 1,
  reporter: process.env.CI ? [['html'], ['github']] : [['html']],
  use: {
    baseURL: 'http://localhost:4321',
    browserName: 'chromium',
  },
  webServer: {
    command: 'npm run preview',
    port: 4321,
    reuseExistingServer: !process.env.CI,
  },
});
