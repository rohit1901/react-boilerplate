import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import pluginReactConfigJSX from "eslint-plugin-react/configs/jsx-runtime.js";


export default [{
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        }, globals: globals.browser
    }
}, pluginJs.configs.recommended, ...tseslint.configs.recommended, pluginReactConfig, pluginReactConfigJSX


];