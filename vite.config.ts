import path from 'path';
import {defineConfig} from 'vitest/config';

export default defineConfig({
    test: {
        /*for example, use global to avoid globals imports (describe, test expect): */
        //global: true,
    },
    resolve: {
        alias: [
            {
                find: "@modules",
                replacement: path.resolve(__dirname, "src/modules"),
            },
            {
                find: "@shared",
                replacement: path.resolve(__dirname, "src/shared"),
            },
        ]
    }

})