const path = require('path');
const base = path.resolve(__dirname, '../..');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'resolve-url-loader'
          }
        ],
      },
      {
        test: /\.scss/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }, 'resolve-url-loader', 'sass-loader?sourceMap',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: [
              path.resolve(base, 'src/styles/vendor/reset.scss')
            ]
          }
        }],
      },
    ]
  }
}
