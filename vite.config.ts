// Import Modules
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// Vite Config (https://vite.dev/config)
export default defineConfig({
    root: 'src/renderer',
    base: './',
    server: {
        port: 5173,
    },
    build: {
        outDir: '../../dist/renderer',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/renderer'),
        },
    },
    plugins: [
        react(),
        tailwindcss(),
    ],
});
