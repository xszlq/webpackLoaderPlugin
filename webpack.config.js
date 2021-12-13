let APIPlugin = require('./plugin/api')

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [new APIPlugin()]
};