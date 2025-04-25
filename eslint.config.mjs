import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next", "next/core-web-vitals", "next/typescript"],
    plugins: ["eslint-plugin-barrel-files"],
    rules: {
      semi: ["error"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "barrel-files/avoid-re-export-all": "error",
      "comma-dangle": ["error", "always-multiline"],
    },
  }),
];

export default eslintConfig;
