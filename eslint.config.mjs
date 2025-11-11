// eslint.config.mjs

import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  
  {
    files: ["app.js", "index.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },

  {
    files: ["app.test.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  }
];