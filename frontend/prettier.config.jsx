module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 125,
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.html"],
      options: {
        semi: true,
        tabWidth: 2,
      },
    },
  ],
  plugins: [require("prettier-plugin-tailwindcss")],
};
