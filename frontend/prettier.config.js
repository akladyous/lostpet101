module.exports = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    printWidth: 110,
    overrides: [
        {
            files: ['*.js', '*.jsx', '*.html'],
            options: {
                semi: true,
                tabWidth: 4,
            },
        },
    ],
    plugins: [require('prettier-plugin-tailwindcss')],
};
