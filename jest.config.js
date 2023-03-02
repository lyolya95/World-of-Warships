module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironment: 'jsdom',

    testMatch: [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)",
    ],

    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],

    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
};


