const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  screenshotsFolder: 'cypress/reports/screenshots',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true
  },
  video: true,
  videosFolder: "cypress/reports/videos",
  videoCompression: 32,
  defaultCommandTimeout: 6000,

  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/*.js',

  },

});
