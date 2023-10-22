const path = require("path");

module.exports = {
  extends: [path.resolve(__dirname, './node_modules/@kunlunxu/create-react-app/.stylelintrc.js')],
  rules: {
    // 功能函数配置
    "function-no-unknown": [
      true,
      {
        // 忽略的函数列表, see: https://stylelint.io/user-guide/rules/function-no-unknown/
        ignoreFunctions: ['px2em']
      }
    ]
  }
};
