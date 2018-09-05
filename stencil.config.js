const sass = require('@stencil/sass');

exports.config = {
  nodeResolve: {
    browser: true
  },
  plugins: [sass()]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
