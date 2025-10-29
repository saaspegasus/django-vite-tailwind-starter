import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './assets/javascript'),
    },
  },
  base: '/static/', // Should match Django's STATIC_URL
  build: {
    outDir: path.resolve(__dirname, './static'), // Output directory for production build
    emptyOutDir: false, // Preserve the outDir to not clobber Django's other files.
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, './assets/index.js'),
      },
      output: {
        // Output JS bundles to js/ directory with -bundle suffix
        entryFileNames: `js/[name]-bundle.js`,
      },
    },
  },
});
