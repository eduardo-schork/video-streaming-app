import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@components', replacement: '/src/components' },
      { find: '@features', replacement: '/src/features' },
      { find: '@infra', replacement: '/src/infra' },
      { find: '@models', replacement: '/src/models' },
      { find: '@hooks', replacement: '/src/hooks' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@constants', replacement: '/src/constants' },
      { find: '@utils', replacement: '/src/utils' },
    ],
  },
});
