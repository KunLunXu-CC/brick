// 基于官方原本配置新增字段 name 作为主题名称
export default {
  name: 'personality',  // 主题名称
  base: 'vs-dark',    // 基础, 基于哪个('vs' | 'vs-dark' | 'hc-black')内置主题
  inherit: false,     // 是否继承
  // 文档: https://code.visualstudio.com/docs/getstarted/themes
  rules: [
    // background 可修改迷你地图背景色, foreground 可设置代码普通字段字体颜色
    { token: '', foreground: 'D4D4D4', background: '282c34' },
    { token: 'invalid', foreground: 'f44747' },
    { token: 'emphasis', fontStyle: 'italic' },
    { token: 'strong', fontStyle: 'bold' },

    { token: 'variable', foreground: '74B0DF' },
    { token: 'variable.predefined', foreground: '4864AA' },
    { token: 'variable.parameter', foreground: '9CDCFE' },
    { token: 'constant', foreground: '569CD6' },
    { token: 'comment', foreground: '608B4E' },
    { token: 'number', foreground: 'B5CEA8' },
    { token: 'number.hex', foreground: '5BB498' },
    { token: 'regexp', foreground: 'B46695' },
    { token: 'annotation', foreground: 'cc6666' },
    { token: 'type', foreground: '3DC9B0' },

    { token: 'delimiter', foreground: 'DCDCDC' },
    { token: 'delimiter.html', foreground: '808080' },
    { token: 'delimiter.xml', foreground: '808080' },

    { token: 'tag', foreground: '569CD6' },
    { token: 'tag.id.pug', foreground: '4F76AC' },
    { token: 'tag.class.pug', foreground: '4F76AC' },
    { token: 'meta.scss', foreground: 'A79873' },
    { token: 'meta.tag', foreground: 'CE9178' },
    { token: 'metatag', foreground: 'DD6A6F' },
    { token: 'metatag.content.html', foreground: '9CDCFE' },
    { token: 'metatag.html', foreground: '569CD6' },
    { token: 'metatag.xml', foreground: '569CD6' },
    { token: 'metatag.php', fontStyle: 'bold' },

    { token: 'key', foreground: '9CDCFE' },
    { token: 'string.key.json', foreground: '9CDCFE' },
    { token: 'string.value.json', foreground: 'CE9178' },

    { token: 'attribute.name', foreground: '9CDCFE' },
    { token: 'attribute.value', foreground: 'CE9178' },
    { token: 'attribute.value.number.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.unit.css', foreground: 'B5CEA8' },
    { token: 'attribute.value.hex.css', foreground: 'D4D4D4' },

    { token: 'string', foreground: 'CE9178' },
    { token: 'string.sql', foreground: 'FF0000' },

    { token: 'keyword', foreground: '569CD6' },
    { token: 'keyword.flow', foreground: 'C586C0' },
    { token: 'keyword.json', foreground: 'CE9178' },
    { token: 'keyword.flow.scss', foreground: '569CD6' },

    { token: 'operator.scss', foreground: '909090' },
    { token: 'operator.sql', foreground: '778899' },
    { token: 'operator.swift', foreground: '909090' },
    { token: 'predefined.sql', foreground: 'FF00FF' },
  ],

  // 参考: monaco-editor/esm/vs/editor/common/view/editorColorRegistry.js
  // 参考: monaco-editor/esm/vs/platform/theme/common/colorRegistry.js
  // 文档: https://code.visualstudio.com/api/references/theme-colorside-bar

  colors: {
    'editor.background': '#282c34',                    // 编辑器背景色
    'editor.foreground': '#abb2bf',                    // 代码折叠: 前面的折叠箭头颜色
    'editor.selectionHighlightBackground': '#29244b',  // 和当前选中词条相同词条的高亮背景色
    'editorLineNumber.foreground': '#495162',          // 编辑器行号的颜色
    'editorCursor.foreground': '#528bff',              // 编辑器光标的颜色
    'editor.foldBackground': '#282c34',                // 折叠范围的背景色

    'editorIndentGuide.background': '#3b4048',         // 编辑器缩进参考线颜色
    'editorIndentGuide.activeBackground': '#c8c8c859', // 编辑器缩进参考线颜色: 活动代码

    'editor.lineHighlightBackground': '#2c313c',       // 行高亮(光标所在行)背景色
    'editor.lineHighlightBorder': '#2c313c',           // 行高亮(光标所在行)边框色

    'scrollbarSlider.background': '#2c313c',           // 迷你地图滚动滑块: 背景色
    'scrollbarSlider.hoverBackground': '#2c313c',      // 迷你地图滚动滑块: 鼠标停放时背景色
    'scrollbarSlider.activeBackground': '#2c313c',     // 迷你地图滚动滑块: 鼠标按下拖动时背景色

    'editorBracketMatch.background': '#515a6b',        // 匹配括号后面的背景色
    'editorBracketMatch.border': '#515a6b',            // 匹配括号框的颜色
  },
  // encodedTokensColors 编码令牌颜色
};
