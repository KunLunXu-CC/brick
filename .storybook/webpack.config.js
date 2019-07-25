const path = require('path');
const webpack = require('webpack');

// 路径别名
const alias = {
  "@components": path.resolve(__dirname, '../components'),
  "@pages": path.resolve(__dirname, '../stories/pages'),
};

module.exports = {
  mode: 'production',
  module: {
    rules: [
      { // js 模块打包
        test: /\.(mjs|js|jsx)$/,
        exclude: [ path.resolve(__dirname, 'node_modules') ],
        use: ['babel-loader', 'eslint-loader']
      }, { // 样式文件打包
        test: /\.(css|scss)$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            }
          }, {
            loader: 'postcss-loader',
            options: { javascriptEnabled: true, sourceMap: false },
          }, {
            loader: 'sass-loader'
          }
        ],
      }, { // 文字图片打包
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10 * 1000,
          }
        }]
      }, { // 文本文件加载(后期可能需要引入 markdown 文件)
        test: /\.(txt|md)$/,
        use: 'raw-loader',
      },
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en-gb/),
  ],

  // 解析模块
  resolve: {
    alias,
    // 自动解析确定的扩展
    extensions: ['.mjs', '.js', '.jsx'],
  },
}
