const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const path = require('path');
const base = path.resolve(__dirname, '..');
const styles = require('./styles/webpack.styles');

module.exports = merge(styles, {
  context: path.resolve(base, 'src'),
  mode: 'production',
  entry: ['babel-polyfill', path.resolve(base, 'src/App.jsx')],
  output: {
    path: path.resolve(base, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10 * 1024
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(base, 'index.template.ejs'),
      filename: 'index.html',
      title: 'Seneca Test',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      chunkFilename: '[name].css'
    })
  ]
})
