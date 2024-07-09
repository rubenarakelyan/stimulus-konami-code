// @ts-check

import eslint from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import n from "eslint-plugin-n";
import security from "eslint-plugin-security";
import globals from "globals";

export default [
  {
    files: ["**/*.js", "eslint.config.mjs"],
    plugins: {
      n: n,
      security: security,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      ...n.configs["flat/recommended-module"].rules,
      ...security.configs.recommended.rules,
      ...configPrettier.rules,
      indent: ["error", 2],
      quotes: ["error", "double"],
      "linebreak-style": ["error", "unix"],
      semi: ["error", "always"],
      eqeqeq: ["error", "always"],
      "no-constant-condition": ["error", { checkLoops: false }],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
];
