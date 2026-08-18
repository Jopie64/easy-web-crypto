import { defineConfig } from 'tsup';

export default defineConfig([
  // 1. Dual ESM / CJS module build with TypeScript declaration files
  {
    entry: {
      index: 'src/web-crypto.ts',
      'cjs/web-crypto': 'src/web-crypto.ts',
      'esm/web-crypto': 'src/web-crypto.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    sourcemap: true,
    splitting: false,
    shims: true,
  },
  // 2. Standalone browser bundle (iife/global WebCrypto) for direct <script> tag usage
  {
    entry: {
      'easy-web-crypto': 'src/web-crypto.ts',
    },
    format: ['iife'],
    globalName: 'WebCrypto',
    platform: 'browser',
    sourcemap: true,
    minify: true,
  }
]);
