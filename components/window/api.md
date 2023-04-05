# 文档

## 一、 API 文档

### 1.1 threshold (VariableBlock)

- 描述: 边界设置, 在指定边界距离内才允许进行操作
- 类型: Number
- 默认值: 5

### 1.2 constraintSize (VariableBlock)

- 描述: 限制大小，设置容器的最小宽度、高度
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值:  `{ width: 200, height: 200 }`

### 1.3 defaultParams (VariableBlock)

- 描述: 默认参数，容器默认初始参数
- 类型: Object, 其中相关属性理论上是支持所有单位但还是推荐使用数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: { width: 900, height: 400, offsetX: 10, offsetY: 10 }

### 1.4 dragHeight (VariableBlock)

- 描述: 顶部可拖拽区域高度，限制 window 拖拽的区域
- 类型: Number
- 默认值: 20

### 1.5 operationList (VariableBlock)

- 描述: 容器允许操作列表，可选值有: `top, left, right, bottom, leftTop, rightTop, leftBottom, rightBottom, drag`
- 类型: String[]
- 默认值: `['top', 'left', 'right', 'bottom', 'leftTop', 'rightTop', 'leftBottom', 'rightBottom', 'drag']`

### 1.6 margin (VariableBlock)

- 描述: 容器距外容器最小外边距
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: { left: 0, right: 0, top: 0, bottom: 0 }

### 1.7 onResize

- 描述: params 改变时触发函数，初始化时也会执行一次
- 类型: Function ({ offsetX, offsetY, width, height })=>{}
- 默认值: ---

### 1.8 onMax

- 描述: 切换最大化函数
- 类型: Function (isMax, e)=>{}
- 默认值: ---

### 1.9 isMax

- 描述: 当前状态是否是最大化
- 类型: Boolean
- 默认值: ---

### 1.10 maxParams

- 描述: 切换最大化时的 params
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: 父亲容器宽、高、offsetX 为 0、offsetY 为 0

### 1.11 onMin

- 描述: 切换最小化函数
- 类型: Function (isMin, e)=>{}
- 默认值: ---

### 1.12 isMin

- 描述: 当前状态是否是最小化
- 类型: Boolean
- 默认值: ---

### 1.13 minParams

- 描述: 切换最大化时的 params
- 类型: Object, 其中所有属性只支持数字或者百分比字符串, 例如: `50 、 '50%'`
- 默认值: { width: 0, height: 0, offsetX: 0, offsetY: 0 }

### 1.14 onClose

- 描述: 点击关闭时触发函数
- 类型: Function (e)=>{}
- 默认值: ---

### 1.15 style

- 描述: 追加 style 样式
- 类型: Object
- 默认值: ---

### 1.16 className

- 描述: 追加 className
- 类型:  String
- 默认值: ---

### 1.17 toolPosition

- 描述: 工具块使用 position absolute, 通过改参数设置工具块的位置, 当然其实该功能的实现完全能够通过 toolStyle 实现, 只是这样更加语义化些
- 类型:  Object
- 默认值: { top: 10, left: 5 }

### 1.18 toolStyle

- 描述: 为工具块追加 style 样式
- 类型: Object
- 默认值: ---

### 1.19 toolClassName

- 描述: 为工具块追加 className
- 类型:  String
- 默认值: ---

### 1.20 showShadow

- 描述: 是否显示投影
- 类型:  boolean
- 默认值: ---
