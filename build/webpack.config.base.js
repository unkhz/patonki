import path from 'path';
import paths from './paths';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const ROOT_PATH = paths.root;
export const SRC_PATH = paths.src;
export const CONFIG = {
  entry: path.join(SRC_PATH, '_main/index'),
  context: SRC_PATH,

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],

    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?minimize!sass'),
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.scss'],
    alias: paths
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(SRC_PATH, 'index.html')
    })
  ]
};
