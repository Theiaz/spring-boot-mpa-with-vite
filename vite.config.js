import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    // appType: "custom",
    // resolve: {
    //     alias: {
    //         "@": resolve(__dirname, "/src"),
    //     },
    // },
    build:  {
        manifest: true,
        rollupOptions: {
            input: {
                main: "./src/main/js/pages/index.js",
            },
        //     output: {
        //         entryFileNames: `[name].js`,
        //         chunkFileNames: `[name].js`,
        //         assetFileNames: `[name].[ext]`
        //     }
        },
        // outDir: `./src/main/resources/static/`,
    },
});
