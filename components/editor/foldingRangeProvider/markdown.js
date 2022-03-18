import _ from 'lodash';
import * as monaco from 'monaco-editor';

const CODE_MARK = {
  END: 'end',
  OUTER: 'outer',
  INNER: 'inner',
  START: 'start',
};

// 处理行
const handleLines = lines => {
  let isCodeBlock = false; // 标记是否是代码块部分

  return lines.reduce((total, line, index) => {
    const text = line.trim();
    let codeMark = isCodeBlock ? CODE_MARK.INNER : CODE_MARK.OUTER;

    // 判断是否为代码块: 修改 codeMark、isCodeBlock
    if (/^```[^`]?/.test(text)) {
      codeMark = isCodeBlock ? CODE_MARK.END : CODE_MARK.START;
      isCodeBlock = !isCodeBlock;
    }

    text && total.push({
      codeMark, // 代码块标记
      text: line, // 原始文本
      lineNum: index + 1, // 当前行数(从 1 开始)
    });

    return total;
  }, []);
};

// 追加「标题」的折叠范围
const appendHeaderFoldingRanges = ({ restData, line, results }) => {
  const headerReg = /^(?<mark>#{1,6} )/.exec(line.text);

  // 代码块内部, 不处理
  if (line.codeMark !== CODE_MARK.OUTER || !headerReg?.groups?.mark) {
    return;
  }

  // 结束: 非代码块、下一个行和同当前标记
  const end = restData.find((ele, index) => {
    const next = restData[index + 1];

    if (!next) {
      return false;
    }

    return next.codeMark === CODE_MARK.OUTER &&
      next.text.startsWith(`${headerReg.groups.mark}`);
  }) ?? _.last(restData);

  end && results.push({
    end: end.lineNum,
    start: line.lineNum,
    kind: monaco.languages.FoldingRangeKind.Region,
  });
};

// 追加「代码块」的折叠范围
const appendCodeBlockFoldingRanges = ({ restData, line, results }) => {
  if (line.codeMark !== CODE_MARK.START) {
    return;
  }

  // 结束: codeMark 为代码块结束标记
  const end = restData.find(ele => ele.codeMark === CODE_MARK.END);

  end && results.push({
    end: end.lineNum,
    start: line.lineNum,
    kind: monaco.languages.FoldingRangeKind.Region,
  });
};

// model: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ITextModel.html
export default model => {
  const lines = handleLines(model.getLinesContent());
  const results = [];

  lines.forEach((line, index) => {
    const restData = lines.slice(index + 1);
    appendHeaderFoldingRanges({ restData, line, results });
    appendCodeBlockFoldingRanges({ restData, line, results });
  });

  return results;
};
