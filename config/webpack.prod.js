const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  }
})
