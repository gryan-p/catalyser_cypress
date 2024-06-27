const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://uat.v2.catalyser.com',
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalSourceRewriting : false

  },

  env: {
    url_api : 'https://api-uat.v2.catalyser.com',
    timeout: '30000',
    // MAILOSAUR_API_KEY: "your-key-here",
  }
});
