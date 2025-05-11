import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      clientPort: 443,
      timeout: 120000,
      overlay: false
    }
  }
});