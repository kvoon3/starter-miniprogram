import { defineConfig, presetIcons } from 'unocss'
import { presetWeapp } from 'unocss-preset-weapp'

const include = [/\.wxml$/]

export default defineConfig({
  shortcuts: [
    ['text-base', 'color-neutral-600'],
    ['fc', 'flex justify-center items-center'],
    ['border-base', 'border border-1 border-neutral-400 border-solid'],
  ],
  cli: {
    entry: {
      patterns: ['./src/**/*.wxml'],
      outFile: './generated/unocss.wxss',
    },
  },

  separators: '__',

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
})
