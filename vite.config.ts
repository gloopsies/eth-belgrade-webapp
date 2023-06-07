import path from 'path'
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, '/src') }]
  },
  base: '', 
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true, 
          process: true,
        }), 
        NodeModulesPolyfillPlugin() 
      ]
    }
  }, 
  build: {
    rollupOptions: {
      plugins: [
        rollupNodePolyFill()
      ]
    }
  }
})