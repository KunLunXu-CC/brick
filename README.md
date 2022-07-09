<h1 align="center">Qianyin React Component</h1>

<div align="center">
  一套个人 React UI 组件库
  <br/><br/>
</div>


预览: https://KunLunXu0-0.github.io/brick

## 特性

- 最新技术栈: 使用 React@16.8.0 新特性编写组件库
- 组件库编译: 使用 gulp + webpack 对组件库进行打包后发布
- UI 开发环境: 使用 Storybook 搭建 React UI 独立开发测试环境
- 按需加载: 允许通过 babel-plugin-import 实现组件的按需加载
- 基本配置: React 开发环境配置、eslint 配置、git commit 规范校验配置、版本发布配置......

## 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [cuke-ui](https://github.com/cuke-ui/cuke-ui)

## 使用

- 一次引入完整样式

```js
import React from "react"
import { Scrollbar } from "@kunlunxu/brick"
import "@kunlunxu/brick/dist/brick.min.css"
```

- 按需加载: 手动加载样式模块

```js
import React from "react"
import { Scrollbar } from "@kunlunxu/brick"
import "@kunlunxu/brick/lib/scrollbar/style"
```

- 按需加载: 通过 babel-plugin-import 实现

```js
// babel babel-plugin-import 插件配置： 创建多个 babel-plugin-import 实例
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "@kunlunxu/brick",
      "libraryDirectory": "es",
      "style": true
    },'cuke-ui'],

    ["babel-plugin-import", {
      "libraryName": "antd",
      "libraryDirectory": "es",
      "style": true
    },'antd'],
  ]
}
```

```js
// 按需引入组件
import React from "react"
import { Scrollbar } from "@kunlunxu/brick"
```
