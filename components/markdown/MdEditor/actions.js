import * as monaco from 'monaco-editor';

/**
 * 官方 DEMO: https://microsoft.github.io/monaco-editor/playground.html#interacting-with-the-editor-adding-an-action-to-an-editor-instance
 * 允许上下文菜单中的子菜单: https://github.com/microsoft/monaco-editor/issues/1947
 * 上下文菜单 - 自定义外观: https://github.com/microsoft/monaco-editor/issues/1138
 */
export default [
  {
    // An unique identifier of the contributed action.
    id: 'my-unique-id1',

    // A label of the action that will be presented to the user.
    label: '测试1',

    // An optional array of keybindings for the action.
    keybindings: [
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
      // chord
      monaco.KeyMod.chord(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK,
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyM,
      ),
    ],

    // A precondition for this action.
    precondition: null,

    // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
    keybindingContext: null,

    contextMenuGroupId: 'xxx',

    contextMenuOrder: 2,

    // Method that will be executed when the action is triggered.
    // @param editor The editor instance is passed in as a convenience
    run (ed) {
      alert(`i'm running => ${ed.getPosition()}`);
    },
  },
  {
    // An unique identifier of the contributed action.
    id: 'my-unique-id2',

    // A label of the action that will be presented to the user.
    label: '测试2',

    // An optional array of keybindings for the action.
    keybindings: [
      monaco.KeyMod.CtrlCmd | monaco.KeyCode.F10,
      // chord
      monaco.KeyMod.chord(
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyK,
        monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyM,
      ),
    ],

    // A precondition for this action.
    precondition: null,

    // A rule to evaluate on top of the precondition in order to dispatch the keybindings.
    keybindingContext: null,

    contextMenuGroupId: 'xxx',

    contextMenuOrder: 1,

    // Method that will be executed when the action is triggered.
    // @param editor The editor instance is passed in as a convenience
    run (ed) {
      alert(`i'm running => ${ed.getPosition()}`);
    },
  },
];
