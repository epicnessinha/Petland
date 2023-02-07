const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e3e: {
    baseUrl: "http://localhost:3001",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
