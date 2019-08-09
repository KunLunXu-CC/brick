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

### 锁死当前开发分支并开始新的版本迭代

- 将当前开发分支(dev)分支名修改为当前版本 v1.1.0

```shell
# 1.将本地分支改名 old_branch 为可选参数，默认修改当前分支名
git branch –m old_branch new_branch

# 2.将本地分支的远程删除
git push origin :old_branch

# 3将新分支推到远程
git push --set-upstream origin new_branch

# 3.1 如果报以下错误： 则请删除最新 tag 后重新 push
error: src refspec v1.1.1 matches more than one.
error: 无法推送一些引用到 'https://github.com/qianyin925/qyrc.git'

# 3.2 查看所有 tag
git tag

# 3.3 删除　tag
git tag -d v1.1.1

```

- 将当前版本分支合并至主分支

- 并重新切一个 dev 分支

### github 版本发布

- 拉取远程仓库数据

```shell
# 拉取远程数据包括 tag 信息
git fetch origin --prune
```

- 版本发布， 生成 changelog 和  tag

```shell
# 1.0.0 表示当前要发布的版本
npm run release -- --release-as 1.1.0
```

```shell
# 如遇如下问题请删除 v1.1.5 分支
✔ bumping version in package.json from 1.1.6 to 1.1.6
Error in git-raw-commits: warning: refname 'v1.1.5' is ambiguous.

```

- push commit 和 tag 到远程

```shell
git push --follow-tags
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
