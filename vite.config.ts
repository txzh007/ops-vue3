import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// mock服务
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      // ↓解析根目录下的mock文件夹
      mockPath: 'mock',
      localEnabled: true, // 开发打包开关
      // prodEnabled: prodEnabled, // 生产打包开关
      supportTs: true, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      watchFiles: true, // 监视文件更改
      // configPath: 'mock/config.ts',
    }),
  ],
  server: {
    port: 8666,
    proxy: {
      // Using the proxy instance
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com',
      //   changeOrigin: true,
      //   configure: (proxy, options) => {
      //     // proxy will be an instance of 'http-proxy'
      //   },
      // },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  define: {
    'process.env': { BASE_URL: '/' },
  },
});
