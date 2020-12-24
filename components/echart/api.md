# 文档

## 一、 API 文档

- 基于 echarts 进行浅封装, 可自适应

### 1.1 option

说明: echarts 配置, 同 echarts option 配置: https://echarts.apache.org/zh/option.html#title

- 描述: echarts 配置, 可自动更新 option
- 类型: Object
- 默认值: ---

### 1.2 createEchart 

- 描述: 初始化 echarts 实例后的回调函数
- 类型: Function,  echart => {}
- 默认值: ---

### 1.3 height

- 描述: 图表容器高度, 也可通过其他方式进行设置(通过 style、className 进行样式覆盖)
- 类型: Function
- 默认值: 100%

### 1.4 on

说明: 配置参数参考: https://echarts.apache.org/zh/api.html#echartsInstance.on, 绑定事件时会将所有对应的事件先进行解版

- 描述: 配置事件
- 类型: Object[],   { eventName, query, handler, context }, 
- 默认值: 100%

### 1.5 style

说明: 在些特殊的情况下需要覆盖 width height transform 等样式, 比如在实现某些可拉伸区块布局中则需要覆盖这些特定样式

- 描述: 追加 style 样式， 可覆盖已有属性
- 类型: Object
- 默认值: ---

### 1.6 className

- 描述: 追加 className
- 类型:  String
- 默认值: ---
