const MonacoEditor = require('monaco-editor-webpack-plugin');

module.exports = config => {
  config.plugins.push(new MonacoEditor());
  return config;
}
