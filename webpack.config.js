// https://www.jianshu.com/p/4d254c191726

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[hash:8].js', // js ouput到dist資料夾的位置
    chunkFilename: 'js/[name].shared.js', // js ouput到dist資料夾的位置
  },
  module: {
    rules: [
      // 在index.js中引入 .html，使hot reload生效
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          attributes: true
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
         'css-loader'],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif|webp)$/,
        loader: 'url-loader',
        options: {
          // 用以限制須轉為 base64 的文件大小 (單位：byte)
          limit: 8192,
          // 超過大小及調用 file-loader
          fallback: require.resolve('file-loader'),
        },
      },
      {
        test: /\.(eot|woff2?|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: './assets/fonts/'
        }
      },
      // 將js轉為es5語法
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
      
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './styles/[name].css', // css ouput到dist資料夾的位置
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template/','index.html'),
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  devServer: {
    contentBase: './dist', //本地服务器所加载的页面所在的目录
    port: 7010, // port
    hot: true, // 熱重載，僅更新不一樣的部分
    // inline: false, // 會重新載入
    // compress: false, // 是否執行壓縮, 預設default
    open: false, // 是否自動開啟網頁
  },
};
