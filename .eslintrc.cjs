module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  globals: {
    // Add your auto-imported functions here
    useRef: "readonly",
    useState: "readonly",
    useEffect: "readonly",
    useContext: "readonly",
    useReducer: "readonly",
    useCallback: "readonly",
    useMemo: "readonly",
    useLayoutEffect: "readonly",
    useImperativeHandle: "readonly",
  },
  plugins: ["react-refresh", require("prettier-plugin-tailwindcss")],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
