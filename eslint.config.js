import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'app',
  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  react: true,
  vue: false,

  jsonc: true,
  yaml: true,

  ignores: [
    // ...globs
  ],
  formatters: {
    css: true,
    html: true,
    markdown: 'prettier',
  },
},
)
