module.exports = {
  ci: {
    collect: {
      settings: {
        preset: "desktop",
      },
      url: [
        "https://crowdcards.erisws.com/",
        "https://crowdcards.erisws.com/login",
        "https://crowdcards.erisws.com/profile?uuid=0d28040b-372f-48fe-a108-761e6aae8c84",
      ],
      startServerCommand: 'echo "Deployed!"',
      startServerReadyPattern: "Deployed!",
      startServerTimeout: 180 * 1000,
      numberOfRuns: 3,
    },
    assert: {
      preset: "lighthouse:recommended",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
