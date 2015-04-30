import path from 'path';
import webpack from 'webpack';
import writeStats from './utils/write-stats';
import notifyStats from './utils/notify-stats';

const assetsPath = path.resolve(__dirname, './public/');

export default function(WEBPACK_HOST, WEBPACK_PORT) {
  return {
    devtool: 'eval',
    debug: true,
    entry: {
      main: [
        `webpack-dev-server/client?http://${WEBPACK_HOST}:${WEBPACK_PORT}`,
        'webpack/hot/only-dev-server',
        './app/client/bootstrap.js',
      ],
    },
    output: {
      path: assetsPath,
      filename: '[name]-[chunkhash].js',
      chunkFilename: '[name]-[chunkhash].js',
      publicPath: `http://${WEBPACK_HOST}:${WEBPACK_PORT}/assets/`,
    },
    module: {
      loaders: [
        { test: /\.(jpe?g|png|gif|svg)$/, loader: 'file' },
        { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
        { test: /\.scss$/, loader: 'style!css!sass' },
        { test: /\.css$/, loader: 'style!css!raw' },
      ],
    },
    progress: true,
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),

      new webpack.ProgressPlugin((percentage, message) => {
        const MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();
        const CLEAR_LINE = new Buffer('1b5b304b', 'hex').toString();
        process.stdout.write(`${CLEAR_LINE}${Math.round(percentage * 100)}%: ${message}${MOVE_LEFT}`);
      }),

      new webpack.DefinePlugin({
        'process.env': {
          BROWSER: JSON.stringify(true),
          NODE_ENV: JSON.stringify('development'),
        },
      }),

      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),

      function() { this.plugin('done', notifyStats); },
      function() { this.plugin('done', writeStats); },
    ],
  };
}

