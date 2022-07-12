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
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "off",
  },
};
