// eslint.config.cjs
const reactPlugin = require("eslint-plugin-react");
const reactHooksPlugin = require("eslint-plugin-react-hooks");

module.exports = [
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Files to lint
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react: reactPlugin,
      reactHooks: reactHooksPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",  // Disable React import check for React 17+
      "react/prop-types": "off",         // Disable prop-types validation
    },
    settings: {
      react: {
        version: "detect",  // Auto-detect the React version
      },
    },
  },
];
