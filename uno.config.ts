import { defineConfig } from 'unocss'
import { presetIcons } from 'unocss'
import { presetWeapp } from 'unocss-preset-weapp'

const include = [/\.wxml$/]

export default defineConfig({
  cli: {
    entry: {
      patterns: ['./src/pages/**/*.wxml'],
      outFile: './src/unocss.wxss',
    },
  },
  content: {
    pipeline: {
      include,
    },
  },
  presets: [
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetWeapp(),
  ],

  separators: '__',
})
