import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: '../static/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        site: path.resolve(__dirname, 'src/javascript/site.js'),
        styles: path.resolve(__dirname, 'src/styles/styles.css'),
      },
      output: {
        entryFileNames: 'js/[name]-bundle.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]'
          }
          return 'assets/[name][extname]'
        },
      },
    }
  }
})
