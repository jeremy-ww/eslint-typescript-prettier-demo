module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2019,
    ecmaFeatures: {
      "jsx": true
    },
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  plugins: ["@typescript-eslint", "prettier", "react"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
}
