let path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './public/index.html'
});

module.exports = {
  "entry": "./src/index.js",
  "output": {
    "path": path.join(__dirname, '/dist'),
    "filename": "index_bundle.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.js$/,
        "include": path.join(__dirname, 'src'),
        "use": {
          "loader": "babel-loader"
        }
      }
    ]
  },
  "plugins": [
    htmlWebpackPlugin
  ]
}