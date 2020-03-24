# 文档

## 一、 API 文档

### 1.1 operationList

- 描述: 容器允许操作列表，可选值有: `top, left, right, bottom, leftTop, rightTop, leftBottom, rightBottom, drag`
- 类型: String[]
- 默认值: `['top', 'left', 'right', 'bottom', 'leftTop', 'rightTop', 'leftBottom', 'rightBottom', 'drag']`

### 1.2 margin

- 描述: 容器距外容器最小外边距
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: { left: 0, right: 0, top: 0, bottom: 0 }

### 1.3 defaultParams

- 描述: 默认参数，容器默认初始参数
- 类型: Object, 其中相关属性理论上是支持所有单位但还是推荐使用数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: { width: 200, height: 200, offsetX: 0, offsetY: 0 }

### 1.4 constraintSize

- 描述: 限制大小，设置容器的最小宽度、高度
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值:  `{ width: 200, height: 200 }`

### 1.5 params

- 描述: 容器参数, 结合 on Resize 双向绑定数据
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: ---

### 1.6 threshold

- 描述: 边界设置, 在指定边界距离内才允许进行操作
- 类型: Number
- 默认值: 5

### 1.7 dragHeight

- 描述: 顶部可拖拽区域高度，限制 modal 拖拽的区域
- 类型: Number
- 默认值: 20

### 1.8 onResize

- 描述: params 改变时触发函数，初始化时也会执行一次
- 类型: Function ({ offsetX, offsetY, width, height })=>{}
- 默认值: ---

### 1.9 onBoundary

- 描述: 到达边界时触发函数
- 类型: Function (String[])=>{}, 参数是个数组表示哪个方法到达边界, 可能值有 left、 right、 top、 bottom
- 默认值: ---

### 1.10 style

说明: 在些特殊的情况下需要覆盖 width height transform 等样式, 比如在实现某些可拉伸区块布局中则需要覆盖这些特定样式

- 描述: 追加 style 样式， 可覆盖已有属性
- 类型: Object
- 默认值: ---

### 1.11 className

- 描述: 追加 className
- 类型:  String
- 默认值: ---

## 三、 TODO
