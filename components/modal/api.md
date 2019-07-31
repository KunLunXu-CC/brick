# 文档

## 一、 API 文档

| 参数            | 说明                                 | 类型                                                      | 默认值 |
| -------------- | ------------------------------------ | --------------------------------------------------------- | ---- |
| threshold      | 边界，modal 在指定边界距离才允许进行操作   | Number                                                   | 5  |
| constraintSize | 限制大小，modal 最小宽高                | Number                                                   | 200  |
| defaultParams  | 默认参数，modal 默认初始参数             | Object                                                   | { width: 500, height: 500, offsetX: 0, offsetY: 0 }  |
| dragHeight     | 顶部可拖拽区域高度，限制 modal 拖拽的区域  | Number                                                    | 0  |
| style          | 为 modal 添加 style 样式                | Object                                                   | --- |
| className      | 为 modal 添加 className                | String                                                    | --- |
| toolStyle      | 为 tool 操作块 添加 style               | Object                                                    | --- |
| toolClassName  | 为 tool 操作块 添加 className           | String                                                    | --- |
| isMin          | 当前 modal 是否是最小化                  | Boolean                                                   | --- |
| isMax          | 当前 modal 是否为最大化                  | Boolean                                                   | --- |
| maxParams      | modal 最大化时 params 值                | Object                                                    | --- |
| minParams      | modal 最小化时 params 值                | Object                                                    | --- |
| onClose        | 点击关闭时触发事件                        | Function<br/>(e) => {}                                   | --- |
| onMin          | 点击最小化时触发事件                      | Function<br/>(e, isMin) => {}                             | --- |
| onMax          | 点击最大化时触发事件                      | Function<br/>(e, isMax) => {}                             | --- |
| onResize       | params 改变时触发函数，初始化时也会执行一次 | Function<br/> ({ offsetX, offsetY, width, height }) => {} | --- |

## 二、 TODO
