# 文档

## 一、 API 文档

| 参数            | 说明                                 | 类型                                                | 默认值 |
| -------------- | ------------------------------------ | -------------------------------------------------- | ---- |
| threshold      | 边界设置, 在指定边界距离内才允许进行操作   | Number                                             | 5  |
| constraintSize | 限制大小，容器的最小宽高                 | Object                                             | { width: 200, height: 200 }  |
| defaultParams  | 默认参数，modal 默认初始参数             | Object                                             | { width: 200, height: 200, offsetX: 0, offsetY: 0 }  |
| dragHeight     | 顶部可拖拽区域高度，限制 modal 拖拽的区域  | Number                                             | 20  |
| operationList  | 允许操作列表                            | String[]                                           | [...所有操作列表] |
| margin         | 容器距外容器最小外边距                    | Object                                             |{ left: 0, right: 0, top: 0, bottom: 0 }
| onResize       | params 改变时触发函数，初始化时也会执行一次 | Function ({ offsetX, offsetY, width, height })=>{} | --- |
| style          | 添加 style 样式                        | Object                                             | --- |
| className      | 添加 className                         | String                                            | --- |

## 二、 operationList 可选操作有

## 三、 TODO
