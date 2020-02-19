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
banner  output : {
    banner: `/*!
      * Project Name v${pkg.version} (${pkg.homepage})
      * Copyright 2020-${year} ${pkg.author}
      */`,
    dir : 'dist/js/',
    format: 'umd',
    globals,
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
    indexCopy: 'build/js/inde.js'
  },
  output : {
    banner: `/*!
      * Project Name v${pkg.version} (${pkg.homepage})
      * Copyright 2020-${year} ${pkg.author}
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
