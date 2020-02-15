const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const webpackFinal = async (config, { configType }) => {

  config.resolve.alias = {
    ... config.resolve.alias,
    "@components": path.resolve(__dirname, '../components'),
    "@pages": path.resolve(__dirname, '../stories/pages'),
  };

  config.module.rules = [
    ... config.module.rules, ... [
    { // 样式文件打包
      test: /\.scss$/,
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
    }
  ]];

  config.plugins = [
    ... config.plugins, ... [
    new MonacoWebpackPlugin(),
  ]];

  // Return the altered config
  return config;
}

module.exports = {
  webpackFinal,
  stories: ['../**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
