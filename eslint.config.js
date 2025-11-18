import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
<<<<<<< HEAD
export default [
=======
export default tseslint.config([
  { ignores: ["**/*/dist", "**/*/node_modules", "build"] },
>>>>>>> bef0aef (feat: eslint 설정 추가)
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
];
