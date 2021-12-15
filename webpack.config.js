const path = require('path');

let APIPlugin = require('./plugin/api')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  // entry: './main.js',
  entry: './src/pages/test/test.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [
        {loader: "vue-loader"},
        {
          loader: path.resolve('./loader/wx.js'),
        }
      ]
    },
      {
        test: /\.vue/,
        use: ['vue-loader']
      }

    ]
  },
  plugins: [new VueLoaderPlugin()]
};
