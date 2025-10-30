import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './assets/javascript'),
    },
  },
  base: '/static/', // This should match Django's STATIC_URL
  build: {
    outDir: path.resolve(__dirname, './static'), // This should be something in your STATICFILES_DIRS
    emptyOutDir: false, // Preserve the outDir to not clobber Django's other files.
    manifest: "manifest.json",
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
