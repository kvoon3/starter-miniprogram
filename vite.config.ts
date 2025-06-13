import { defineConfig } from 'weapp-vite/config'

export default defineConfig({
  weapp: {
    srcRoot: 'src',

    npm: {
      cache: false,

    },

    enhance: {
      autoImportComponents: {
        globs: [
          '**/components/**/*',
          '**/layouts/**/*',
        ],
      },
    },

    // https://ice-vite.netlify.app/guide/generate.html
    generate: {
      extensions: {
        js: 'ts',
      },
      dirs: {
        component: 'src/components',
        page: 'src/pages',
      },
      filenames: {
        component: 'index',
        page: 'index',
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api', 'import'],
      },
    },
  },
  plugins: [
    // 在这里注册 vite 插件
  ],
})
