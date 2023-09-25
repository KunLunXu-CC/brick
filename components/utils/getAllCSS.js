// 返回当前页面所以样式规则: .body{...} .main{...}
export default () => [...document.styleSheets].reduce((total, styleSheet) => {
  const list = [...styleSheet.cssRules].map((rule) => {
    // 过滤掉以 .ant 开头的规则: 因为预览模块没用到 antd 的组件, 所以干脆过滤掉 antd 的样式
    // 过滤掉以 :root 开头的规则: 因为 juice 暂不支持 CSS 变量, 所以就把 :root 上的规则过滤掉(大部分都是 CSS 变量定义)
    if (/^(\.ant|:root)/.test(rule.cssText)) {
      return '';
    }

    return rule.cssText;
  });

  return [...total, ...list];
}, []).join('\n');
