# 文档

容错率： props.threshold
大小限制：props.constraintSize
默认参数设置：props.defaultParams
样式追加：props.style
类名设置：props.className
可拖拽区域: props.dragRef
工具块追加样式: props.toolClassName
工具块追加类: props.toolStyle

最小化值: min = {}; 有值说明当前窗口为 min 状态, 且值为对应的 params 参数， 否则则为 null || undefined
最大化值: max = {}; 有值说明当前窗口为 max 状态, 且值为对应的 params 参数， 否则则为 null || undefined

- onClose
- onMin
- onMax      props.onMax(e, modalRef);
- onResize
