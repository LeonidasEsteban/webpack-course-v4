const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    port: 9000,
    hot: true,
  },
  module: {
    rules: [
      // Aquí van los loaders
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      }
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './public/index.html',
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
