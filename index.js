import pluginImport from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";

export default [
  {
    plugins: {
      "@stylistic": stylistic,
      import: pluginImport
    },
    rules: {
      "@stylistic/arrow-parens": ["warn", "as-needed"],
      "prefer-const": "warn",
      "no-async-promise-executor": "off",
      "@stylistic/semi": "warn",
      "@stylistic/quotes": [
        "warn",
        "double",
        {
          allowTemplateLiterals: "always",
          avoidEscape: true
        }
      ],
      "@stylistic/indent": [
        "warn",
        2,
        {
          SwitchCase: 1
        }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@stylistic/quote-props": ["warn", "as-needed"],
      "@stylistic/comma-dangle": ["warn", "never"],
      curly: ["warn", "all"],
      "@stylistic/array-element-newline": ["warn", "consistent"],
      "import/order": ["warn", { groups: ["external", "internal"], alphabetize: { order: "asc" } }],
      "@stylistic/object-curly-spacing": ["warn", "always"],
      "@stylistic/brace-style": "error",
      "svelte/html-quotes": ["error", { prefer: "double" }],
      "svelte/indent": [
        "error",
        {
          indent: 2
        }
      ]
    }
  }
];
