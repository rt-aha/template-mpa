const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
  mode: 'development',
  devtool: 'cheap-eval-source-map',
  plugins: [new CleanWebpackPlugin()],
};

module.exports = merge(common, prodConfig);
