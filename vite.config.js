import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
        'hello': path.resolve(__dirname, './assets/hello.jsx'),
        'style': path.resolve(__dirname, './assets/style.css'),
      },
      output: {
        // Output JS bundles to js/ directory with -bundle suffix
        entryFileNames: `js/[name]-bundle.js`,
        assetFileNames: `css/[name].css`,
      },
    },
  },
});
