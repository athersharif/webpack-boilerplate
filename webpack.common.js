const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
