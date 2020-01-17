const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/App.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              modules: true,//开启
              // localIndexName: "[name]__[local]___[hash:base64:5]"
            }
          }, {
            loader: 'css-loader', options: {
              modules: true,//开启
              // localIndexName: "[name]__[local]___[hash:base64:5]"
            }
          }, {
            loader: 'less-loader', options: {
              modules: true,//开启
              // localIndexName: "[name]__[local]___[hash:base64:5]"
            }
          }]
      },
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "main.min.css" // 提取后的css的文件名
    })
  ],
};
