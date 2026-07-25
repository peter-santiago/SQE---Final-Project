import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    // Add this to ignore coverage and node_modules
    ignores: ["coverage/**", "node_modules/**", "dist/**"],
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, 
      } 
    } 
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { 
      sourceType: "commonjs" 
    } 
  },
]);