import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import devConfig from './dev.config';
import fs from 'fs';
import path from 'path';

const devEnv = require('../config/dev-environment');

const WEBPACK_HOST = process.env.HOST || 'localhost';
const WEBPACK_PORT = parseInt(process.env.PORT) || devEnv.webpackPort;

const config = devConfig(WEBPACK_HOST, WEBPACK_PORT);

const proxyPath = 'http://localhost:' + devEnv.backendPort + '/';
console.log('proxyPath', proxyPath);

const serverOptions = {
  contentBase: `http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
  quiet: true,
  noInfo: true,
  hot: true,
  publicPath: config.output.publicPath,
  proxy: {
    '*': proxyPath,
  },
};

const compiler = webpack(config);
const webpackDevServer = new WebpackDevServer(compiler, serverOptions);

webpackDevServer.listen(WEBPACK_PORT, WEBPACK_HOST, () => {
  console.log('Webpack development server listening on %s:%s', WEBPACK_HOST, WEBPACK_PORT);
});

compiler.plugin('done', function() {
  var updateTime = (new Date()).getTime().toString();
  fs.writeFile(path.join(__dirname, '..', 'restart.txt'), updateTime, function(err) {
    if (err) {
      console.error(err);
    }
  });
});

