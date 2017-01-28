var webpack = require('webpack');
var gutil = require('gulp-util');
var merge = require('webpack-merge');

//本番環境出力時、gulp build --type productionでjsを圧縮する
var isProduction = gutil.env.type === 'production';

var config = {
  entry: {
    'app': [
      './src/js/app/app.js'
    ],
    vendor: [
      'jquery'
    ]
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  devServer: {
    contentBase: 'dist',
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader'},
      { test: /\.hbs$/, loader: 'handlebars-template-loader'}
    ]
  },
  externals: {
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      _: 'underscore',
      Backbone: 'backbone'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    })
  ]
};

//isProductionがtrueだったら、これらのプラグインが発火する
if (isProduction) {
  config = merge(config, {
    plugins: [
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
module.exports = config;
