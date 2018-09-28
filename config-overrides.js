// 导入 less 支持依赖包
const rewireLess = require('react-app-rewire-less');
// c从 react-app-rewired 导入添加 babel 插件的函数
const { injectBabelPlugin } = require('react-app-rewired');
// 导入 eslint 扩展配置依赖包
const rewireEslint = require('react-app-rewire-eslint');

module.exports = function override(config, env) {

  /***** less配置 *****/
  // 只需要一条配置信息即可实现对less的支持
  config = rewireLess(config, env);
  // 下面注释用于配置loader的参数
  // config = rewireLess.withLoaderOptions(someLoaderOptions)(config, env);
  
  /* 添加对修饰器的支持 */
  config = injectBabelPlugin('transform-decorators-legacy', config)

  /* 扩展 eslint 配置： 将调用项目目录下 .eslintrc 配置文件 */
  config = rewireEslint(config, env);

  return config;
}