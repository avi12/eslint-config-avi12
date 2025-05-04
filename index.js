import pluginImport from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin-js";

export default [
  {
    plugins: {
      "@stylistic/js": stylistic,
      import: pluginImport
    },
    rules: {
      "arrow-parens": ["warn", "as-needed"],
      "prefer-const": "warn",
      "no-async-promise-executor": "off",
      semi: "warn",
      quotes: [
        "warn",
        "double",
        {
          allowTemplateLiterals: true,
          avoidEscape: true
        }
      ],
      indent: [
        "warn",
        2,
        {
          SwitchCase: 1
        }
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "object-curly-spacing": ["warn", "always"],
      "quote-props": ["warn", "as-needed"],
      "comma-dangle": ["warn", "never"],
      curly: ["warn", "all"],
      "array-element-newline": ["warn", "consistent"],
      "import/order": ["warn", { groups: ["external", "internal"], alphabetize: { order: "asc" } }],
      "@stylistic/js/object-curly-spacing": ["warn", "always"],
      "svelte/html-quotes": ["error", { prefer: "double" }]
    }
  }
];
