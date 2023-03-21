import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "/src"),
        },
    },
    build:  {
        manifest: true,
        rollupOptions: {
            input: {
                main: "./src/main/js/pages/index.js",
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
        origin: 'http://localhost:8081', // generated asset URLs will be resolved using the back-end server URL instead of a relative path
    }
});
