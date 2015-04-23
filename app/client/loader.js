System.config({
  baseURL: '/',
  transpiler: 'babel',
  babelOptions: {
    optional: [
      'runtime',
      'es7.classProperties',
    ],
    stage: 0,
    blacklist: [],
  },
  paths: {
    '*': '*.js',
    'github:*': '/vendor/github/*.js',
    'npm:*': '/vendor/npm/*.js',
  },
});

System.import('client/bootstrap');
