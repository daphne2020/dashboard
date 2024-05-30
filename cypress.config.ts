const { defineConfig } = require ("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure:true,
  viewportWidth:1200,
  pageLoadTimeout:10000,
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on: any, config: any) {
      // implement node event listeners here
    },
  },
});
