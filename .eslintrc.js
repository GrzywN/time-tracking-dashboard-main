module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier", "tailwindcss"],
  rules: {
    "prettier/prettier": "error",
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    // Remove after
    "react/self-closing-comp": "off",
  },
};
