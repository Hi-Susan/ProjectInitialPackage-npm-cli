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
      * AdminLTE v${pkg.version} (${pkg.homepage})
      * Copyright 2014-${year} ${pkg.author}
      * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
      */`,
    dir : 'dist/js/',
    format: 'umd',
    globals,
    name: 'adminlte'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    })
  ]
},
{
  input: {
    indexCopy: 'build/js/index copy.js'
  },
  output : {
    banner: `/*!
      * AdminLTE v${pkg.version} (${pkg.homepage})
      * Copyright 2014-${year} ${pkg.author}
      * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
      */`,
    dir : 'dist/js/',
    format: 'umd',
    globals,
    name: 'adminlte'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true
    })
  ]
}]
