import babel from 'rollup-plugin-babel'

const pkg  = require('../../package')
const year = new Date().getFullYear()

const globals = {
  jquery: 'jQuery'
}

export default [{
  input: {
    index: 'build/js/index.js'
  },
  output : {
    banner: `/*!
      * Project Name v${pkg.version}
      * Copyright 2020-${year} ${pkg.author}
      */`,
    dir : 'dist/js/',
    format: 'esm',
    globals,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    })
  ]
}]
