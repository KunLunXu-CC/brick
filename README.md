<h1 align="center">Qianyin React Component</h1>

<div align="center">
  一套个人 React UI 组件库
  <br/><br/>
</div>

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
import { Scrollbar } from "qyrc"
import "qyrc/dist/qyrc.min.css"
```

- 按需加载: 手动加载样式模块

```js
import React from "react"
import { Scrollbar } from "qyrc"
import "qyrc/lib/scrollbar/style"
```

- 按需加载: 通过 babel-plugin-import 实现

```js
// babel babel-plugin-import 插件配置： 创建多个 babel-plugin-import 实例
module.exports = {
  plugins: [
    ["babel-plugin-import", {
      "libraryName": "qyrc",
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
import { Scrollbar } from "qyrc"
```

## 本地开发

- 运行开发环境

```shell
npm install
npm run start
```

- git commit

```shell
npm run commit
```

- 编译 npm 包

```shell
npm run build:publish
```

## 版本发布流程

### github 版本发布

- 拉取远程仓库数据

```shell
git checkout master
git pull origin master
# 拉取远程数据包括 tag 信息
git fetch origin --prune
```

- 版本发布， 生成 changelog 和  tag

```shell
# 1.0.0 表示当前要发布的版本
npm run release -- --release-as 1.1.0
```

- push commit 和 tag 到远程

```shell
git push --follow-tags origin master
```

- 创建 github releases: 直接讲 changelog 当前版本信息拷贝过去

### npm 包发布

- npm 包编译

```shell
npm run build:publish
```

- 发布包

```shell
# 1. 切换官方源头
npm config set registry http://registry.npmjs.org

# 2. 登录 npm
npm login

# 3. 发布包
npm publish --access public

# 4. 如果需要则切换回淘宝源
npm config set registry https://registry.npm.taobao.org/
```

### 封锁当前版本并开始新的版本迭代

- 将当前版本的开发分支合并到 master

- 将当前分支名修改为当前版本 v1.1.0

```shell

```

- 回到 master 开启一个新的分支 dev-next 开始新的迭代
