import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  dts: true,
  jsx: true,
  clean: true,
  esbuildOptions(options) {
    options.jsx = 'automatic';
  },
});