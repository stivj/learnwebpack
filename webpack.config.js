const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin')
const path = require('path');
const glob = require('glob');

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
      module: {
          rules:[
              {
                  test: /\.css$/,
                  use: ['style-loader', 'css-loader']
              },
              {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
          ]
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.html'
        }),
        new MiniCssExtractPlugin(),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
          }),
    ],
};