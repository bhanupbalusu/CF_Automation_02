import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: "chrome",
    baseUrl: "https://www.wtwco.com/en-us",
    specPattern: "cypress/integration/**/*.spec.js",
    supportFile: "cypress/support/index.js",
    fixturesFolder: "cypress/fixtures",
    screenshotsFolder: "cypress/reports/mochareports/assets",
    videosFolder: "cypress/videos",
    downloadsFolder: "cypress/downloads",
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 2,
    },
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mochawesome",
      mochawesomeReporterOptions: {
        reportDir: "cypress/reports/mocha",
        quite: true,
        overwrite: false,
        html: false,
        json: true,
      },
    },
    chromeWebSecurity: false,
  },
});
