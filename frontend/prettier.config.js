module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
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
