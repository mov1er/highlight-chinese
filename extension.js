// src/extension.js
const vscode = require('vscode');
const highlight = require('./highlight');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "highlight-chinese" is now active!');
  let disposable = vscode.commands.registerCommand('highlight-chinese.activate', () => {
    vscode.window.showInformationMessage('汉字高亮插件已激活！');
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      highlight(editor);
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {
	console.log('Deactivating "highlight-chinese" extension.');
	vscode.commands.unregisterCommand('highlight-chinese.activate');
  }

module.exports = {
  activate,
  deactivate
};