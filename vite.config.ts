import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src/', import.meta.url)),
        },
    },
});