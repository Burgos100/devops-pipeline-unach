module.exports = [
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "commonjs",
            globals: {
                test: "readonly",
                expect: "readonly",
                module: "readonly",
                require: "readonly"
            }
        },
        rules: {}
    }
];