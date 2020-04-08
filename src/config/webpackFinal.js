const path = require('path');
const MonacoEditor = require('monaco-editor-webpack-plugin');

module.exports = config => {
  // 1. 添加插件
  config.plugins.push(new MonacoEditor());

  // 2. 添加路径别名
  config.resolve.alias = {
    ... config.resolve.alias,
    '@components': path.resolve(__dirname, '../../components'),
  };

  return config;
}
