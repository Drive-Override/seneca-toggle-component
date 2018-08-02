const merge = require('webpack-merge');
const common = require('./webpack.common');
const URL = 'https://blog.philipprost.com/ghost/api/v0.1/posts/'
const CLIENT_ID = 'ghost-frontend';
const CLIENT_SECRET = '2a50a25aa571';
const http = `${URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    contentBase: 'src',
    port: '3001',
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: http,
        secure: false,
        changeOrigin: true,
        pathRewrite: {'^/api': ''}
      }
    }
  }
})
