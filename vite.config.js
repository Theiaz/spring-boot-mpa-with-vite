import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build:  {
        rollupOptions: {
            input: {
                main: resolve(__dirname + "/src/main/js/pages/index.js"),
            },
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`
            }
        },
        outDir: `./src/main/resources/static/`,
    },
    server: {
        port: 8081,
        strictPort: true,
        proxy: {
            "/": "http://localhost:8080",
        },
    },
});
