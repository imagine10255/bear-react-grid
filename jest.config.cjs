module.exports = {
    coverageDirectory: 'coverage',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.spec.[jt]s?(x)'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    // setupFilesAfterEnv: ['./jest.setup.js']
};
