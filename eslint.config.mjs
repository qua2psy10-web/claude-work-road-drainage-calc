import js from "@eslint/js";
import html from "eslint-plugin-html";

export default [
  {
    files: ["**/*.html"],
    plugins: { html },
    languageOptions: {
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        console: "readonly",
        Math: "readonly",
        parseInt: "readonly",
        parseFloat: "readonly",
        isFinite: "readonly",
        Infinity: "readonly",
        Date: "readonly",
        event: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Functions called from HTML onclick attrs appear unused to ESLint
      "no-unused-vars": "warn",
      "no-undef": "error",
      // Japanese full-width spaces in UI strings are intentional
      "no-irregular-whitespace": ["error", { skipTemplates: true, skipStrings: true }],
    },
  },
];
