import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  server: {
    host: true,
    base: '/',
    open: true,
    port: 8080,
  },
});
