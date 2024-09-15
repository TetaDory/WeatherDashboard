const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: { directory: path.resolve(__dirname, 'dist'), },
    open: true,
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
};
