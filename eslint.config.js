const js = require("@eslint/js");
const tseslint = require("typescript-eslint");
const nextPlugin = require("eslint-config-next");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  nextPlugin.configs.recommended,
  prettierConfig.configs["flat/recommended"],
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "error",
      "@next/next/no-img-element": "off",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
    },
  },
];