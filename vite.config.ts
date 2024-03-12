import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/admin/',
    plugins: [
        react(),
        tsconfigPaths(),
        ViteImageOptimizer(),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "/src/assets/styles/variables"; @import "/src/assets/styles/mixins";',
            },
        },
    },
});