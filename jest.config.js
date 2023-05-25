module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx}"],
  "transform": {
        "^.+\\.(js|jsx)$": "babel-jest"
      },
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy",
  },
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/setupTests.js",
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx}",
    "!<rootDir>/src/index.js",
  ],
  coverageReporters: ["text", "lcov"],
};
