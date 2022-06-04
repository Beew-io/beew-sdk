const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    [`${require("./package.json").name}`]: './dist/index.js',
    // 'my-lib.min': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'bundles'),
    filename: `[name]-${require("./package.json").version}.js`,
    // libraryTarget: 'commonjs',
    library: 'npmPackageBoilerplateTest',
    // umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   sourceMap: true,
    //   include: /\.min\.js$/,
    // })
  ],
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [{
          loader: 'expose-loader',
          options: 'Library'
        }, {
          loader: 'ts-loader'
        }],
        exclude: /node_modules/
      }
    ]
  },
}