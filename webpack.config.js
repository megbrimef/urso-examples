const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const root = process.cwd();

module.exports = (env, argv) => {
  const development = argv.mode.toLowerCase() === 'development';

  const config = {
    entry: {
      index: path.resolve(root, 'src', 'index.js')
    },
    output: {
      path: path.resolve(root, 'build'),
      filename: path.join('src', 'js', 'index.js'),
      publicPath: '/'
    },
    watch: true,
    externals: {
    },
    resolve: {
      alias: {
      }
    },
    devServer: {
      host: process.platform === "win32" ? "localhost" : "0.0.0.0",
      contentBase: path.join(root, 'build'),
      open: true,
      openPage: './index.html',
      lazy: false,
      inline: true,
      setup(app) {
        //todo
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.join('index.html'),
        template: path.resolve(root, 'src', (development ? 'index-dev.html' : 'index.html')),
        title: 'title2',
        templateParameters: {
          //todo
        },
        inject: 'head',
        hash: true
      }),
      new CopyPlugin([
        {
          from: path.resolve(root, 'src', 'assets'),
          to: 'assets'
        }
      ])
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  };

  return config;
};
