import { defineConfig } from 'cypress';
import cypressMochawesomeReporter from 'cypress-mochawesome-reporter/plugin';

export default defineConfig({
  screenshotsFolder: 'cypress/screenshots',
  e2e: {
    setupNodeEvents(on, config) {
      cypressMochawesomeReporter(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
});
