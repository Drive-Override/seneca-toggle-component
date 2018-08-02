const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    contentBase: 'src',
    port: '3001',
    historyApiFallback: true
  }
})
