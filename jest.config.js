/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/app'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
    '^.+\\.js$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  collectCoverageFrom: ['<rootDir>/app/**/*.ts'],
  modulePathIgnorePatterns: [
    '<rootDir>/app/database/',
    '<rootDir>/app/express/',
  ],
};
