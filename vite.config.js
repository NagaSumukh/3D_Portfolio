// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3D_Portfolio/', // Adjust to your GitHub Pages repository path
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
});
