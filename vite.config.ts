import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Add this line
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  },

  build: {
    target: 'esnext',
    outDir: 'build',        // Vercel output directory
    sourcemap: false,       // Set to true if you need source maps for debugging
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },

  server: {
    // Vercel does not use the port setting, but it's useful locally
    port: 3000,            
    open: true
  },

  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'clsx',
      'lucide-react',
      'tailwind-merge'
    ]
  }
});
