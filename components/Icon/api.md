# API 文档

| 参数        | 说明                       | 类型         | 默认值 |
| ---------- | -------------------------- | ----------- | ---- |
| type       | 图标类型                    | String       | ---  |
| onClick    | 绑定点击事件                 | Function     | ---  |
| className  | 为 Icon 组件添加 className  | String        | ---  |
| style      | 为 Icon 组件添加 style 样式  | Object       | ---  |

## 自定义导入图标

```js
// 在入口处导入 iconfont 下载的图标库
import '../assets/iconfont/iconfont.js';

// 然后就可以在需要的地方使用 Icon 组件
<Icon type="icon-docker" />
```

## TODO

- 加载中 spin
- 旋转指定角度
- prop-type
