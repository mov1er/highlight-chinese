// src/highlight.js
const vscode = require('vscode');

/**
 * 高亮汉字并忽略注释内容
 * @param {vscode.TextEditor} editor
 */
function highlight(editor) {
  const text = editor.document.getText();
  const commentRegex = /\/\/.*|\/\*[\s\S]*?\*\/|<!--([\s\S]*?)-->|#.*$/gm;
  const chineseRegex = /[\u4e00-\u9fff]|[\u3000-\u303f]|[\uff00-\uffef]/g;

  let matches = [];
  let match;

  // 收集非注释部分的汉字
  let nonCommentText = text.replace(commentRegex, match => ' '.repeat(match.length));
  while ((match = chineseRegex.exec(nonCommentText)) !== null) {
    matches.push(new vscode.Range(
      editor.document.positionAt(match.index),
      editor.document.positionAt(match.index + match[0].length)
    ));
  }

  const decorationType = vscode.window.createTextEditorDecorationType({
    backgroundColor: 'rgba(255, 247, 4, 0.3)',
    borderRadius: '4px'
  });

  editor.setDecorations(decorationType, matches);
}

module.exports = highlight;
