/**
 * @name UMD 模块 打包
 * @description 参考 cuke-ui
 * @description 输出目录 [dist]
 * CMD Node.js 环境
 * AMD 浏览器环境
 * UMD 两种环境都可以执行
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const { version, name, description } = require('../package.json');

const LOGO = `
              __                    _
  _______  __/ /_____        __  __(_)
 / ___/ / / / //_/ _ \\______/ / / / /
/ /__/ /_/ / ,< /  __/_____/ /_/ / /
\\___/\\__,_/_/|_|\\___/     \\__,_/_/

`;

module.exports = {
  mode: 'production',
  entry: {
    [name]: ['./components/index.js'],
  },

  // umd 模式打包
  output: {
    library: name,
    libraryTarget: 'umd',
    umdNamedDefine: true, // 是否将模块名称作为 AMD 输出的命名空间
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].min.js',
  },
  // react 和 react-dom 不打包
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.jsx', '.json', '.less', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: '/node_modules/',
        include: [path.resolve('components')],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      {
        test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 遇到图片  生成一个images文件夹  名字.后缀的图片
              name: 'images/[name][hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    noEmitOnErrors: true,
  },
  plugins: [
    new ProgressBarPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    // 在打包的文件之前 加上版权说明
    new webpack.BannerPlugin(`
      ${name} v${version}
      ${description}
      ${LOGO}
    `),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      '__DEBUG__': false,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),

    // TODO: 复制过来的好像非必要配置
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),

    new MonacoWebpackPlugin(),
  ],
};
