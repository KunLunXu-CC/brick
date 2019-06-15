<h1 align="center">Qianyin React Component</h1>

<div align="center">
  一套个人 React UI 组件库
  <br/><br/>
</div><br/><br/>

## 特性

- 最新技术栈: 使用 React@16.8.0 新特性编写组件库
- 组件库编译: 使用 gulp + webpack 对组件库进行打包后发布
- UI 开发环境: 使用 Storybook 搭建 React UI 独立开发测试环境
- 按需加载: 允许通过 babel-plugin-import 实现组件的按需加载
- 基本配置: React 开发环境配置、eslint 配置、git commit 规范校验配置、版本发布配置......

## 参考轮子

- [ant-design](https://github.com/ant-design/ant-design)
- [cuke-ui](https://github.com/cuke-ui/cuke-ui)

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

## TODO

- [x] [组件]滚动条
- [ ] [组件]markdown 预览组件
- [ ] [组件]markdown 文本编辑组件
- [ ] [配置]单元测试配置
