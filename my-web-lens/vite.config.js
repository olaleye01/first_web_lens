// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // A Web Lens is served from a location we don't control, so every asset URL
  // in the build must be relative. Without this, Vite emits absolute /assets/...
  // paths and the Lens shows a blank screen.
  base: './',
  build: {
    target: 'es2020',
  },
});
