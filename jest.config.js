module.exports = {
    preset: jest.config.js'*.config@vue/cli-plugin-unit-test',
    collectCoverage: true,
    collectCoverageFrom: ['/src/**/*.{js,jsx,vue}'],
    coverageDirectory: 'tests/coverage/',
    coverageReporters: ['html', 'text-summary'],
};
