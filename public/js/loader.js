System.transpiler = 'babel';

System.config({
  paths: {
    babel: '/vendor/npm/babel-core@5.1.11/browser.js',
  },
});

System.import('js/main');
