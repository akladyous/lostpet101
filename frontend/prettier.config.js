module.exports = {
  trailingCommma: 'all',
  arrowParens: 'always',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.html'],
      options: {
        semi: true,
        tabWidth: 2,
      },
    },
  ],
  plugins: [
    // require("prettier-plugin-tailwindcss")
  ],
};
