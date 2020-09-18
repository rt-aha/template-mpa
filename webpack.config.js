require('dotenv').config()

const envType = process.env.ENV_TYPE;


// https://www.jianshu.com/p/4d254c191726
const glob = require('glob');

const getEntry = () => {
  const entry = {};
  glob.sync('./src/js/*.js').forEach((name) => {
    const start = name.indexOf('/src/js/') + 8; //前面路徑共8個位元的字串，設定的資料夾路徑不同，也要記得更改位元數喔!
    const end = name.length - 3; //減去附檔名 .js 共三個位元的字串
    const eArr = [];
    const n = name.slice(start, end); //取得每個js的名稱
    eArr.push(name); //push至陣列中
    entry[n] = eArr; //就會產生多筆入口的陣列囉！
  });
  return entry;
};

const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'cheap-eval-source-map',
  entry: getEntry(),
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
          attributes: true,
        },
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false, // 不壓縮 HTML
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true, // 美化 HTML 的編排 (不壓縮HTML的一種)
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
          outputPath: './assets/fonts/',
        },
      },
      // 將js轉為es5語法
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: './styles/[name].css', // css ouput到dist資料夾的位置
    }),
    new webpack.HotModuleReplacementPlugin(),
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
    open: false, // 是否自動開啟網頁
  },
};

Object.keys(config.entry).forEach((name) => {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: `./src/template/${name}.${envType}`,
      filename: `${name}.html`,
      chunks: ['common', 'runtime', 'vendor', 'action', `${name}`],
      minify: {
        removeComments: false,
        collapseWhitespace: false, // 壓縮 HTML
        removeAttributeQuotes: false,
      },
    }),
  );
});

module.exports = config;
