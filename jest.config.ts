// jest.config.ts
import type { Config } from "@jest/types";
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

// Custom Jest configuration
const customJestConfig: Config.InitialOptions = {
  testEnvironment: "jsdom", // Use jsdom for DOM testing
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], // Setup files after the environment is loaded
  moduleNameMapper: {
    // Handle module aliases (if you use them in your Next.js app)
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    // Use ts-jest to transform TypeScript files
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

// Export the configuration
export default createJestConfig(customJestConfig);