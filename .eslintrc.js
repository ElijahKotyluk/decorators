module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {},
};
