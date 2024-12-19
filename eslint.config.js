// ESLint configuration for the BossBlock Frontend project

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import react from "eslint-plugin-react";
import * as tsEslint from "@typescript-eslint/eslint-plugin";

export default [
  {
    ignores: ["dist"],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      sourceType: "module",
    },
    plugins: {
      "@typescript-eslint": tsEslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react: react,
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
    ],
    rules: {
      ...tsEslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Additional custom rules can be added here
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
