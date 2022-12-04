module.exports = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  proseWrap: "always",
  printWidth: 80,
  overrides: [
    {
      files: "*.css",
      options: {
        tabWidth: 4,
      },
    },
  ],
}
