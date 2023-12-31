module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: true,
  printWidth: 80,
  semi: true,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
  tailwindFunctions: ["clsx"],
  organizeImportsSkipDestructiveCodeActions: true,
};
