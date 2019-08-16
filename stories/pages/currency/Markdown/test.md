# flex 布局

<details>
<summary>Click to open</summary>
<p>If your browser supports this element, it should allow you to expand and collapse these details.</p></details>
<details>
<summary>Click to open</summary>
<p>If your browser supports this element, it should allow you to expand and collapse these details.</p></details>

[x] 这是任务嘛

[ ] 这是未完成任务

## 浏览器支持

![浏览器支持](http://img.redocn.com/sheji/20141219/zhongguofengdaodeliyizhanbanzhijing_3744115.jpg)

| 描述 | 值 |
| --- | --- |
| 名字 | name |

## 描述

- `Flex` 是 `Flexible Box` 的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。
- 采用 `Flex` 布局的元素（设置 `display: flex || inline-flex` 的元素 ），称为 `Flex` 容器（`flex container`），简称”容器”。它的所有子元素自动成为容器成员，称为 `Flex` 项目（`flex item`），简称”项目”。

## 创建弹性容器

> - 为容器设置样式： `display: flex || inline-flex` 即可使容器升级为弹性容器
> - 当将容器设为 `Flex` 布局以后，容器内的所有项目的 `float`、 `clear` 和 `vertical-align` 属性将失效（布局重置）。

### 在弹性容器中，项目将消除块元素特性

- 将容器设为 `Flex` 布局以后， 容器内的块级元素（`display： block`）将不再具有块级元素的特性（当然其 `display` 值还是 `block`）;

- 有如下演示代码

```css
  #wrapper{
    display: flex;
    background: #eee;
    padding: 10px;
  }
  .item{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .item-1{background:brown}
  .item-2{background:pink}
  .item-3{background:orchid}
```

```html
<div id="wrapper">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

- 图中项目不再具有块级元素的特性（有点类似 `inline-block`）

![项目不再具有块级元素特性](../img/2018-11-0409:43:37.png)

### 在弹性容器中项目的 margin 在垂直方向上的值不会进行叠加

- 如下代码：

```html
  <style>
    *{padding: 0; margin: 0;}
    #wrapper{
     display: flex;
     width: 110px;
     flex-wrap: wrap;
    }
    .item{
      width: 40px;
      height: 40px;
      margin: 5px;
      background: red;
      line-height: 40px;
      text-align: center;
    }
  </style>
  <div id="wrapper">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
  </div>
```

- 代码效果图

![margin在垂直方向上不叠加](../img/2018-12-0115:50:17.png)

### 主轴和交叉轴

> - 容器默认存在两根轴： 主轴（项目沿主轴进行一一排列）、交叉轴（垂直于主轴）
> - 主轴的开始位置（与边框的交叉点）叫做 `main start`，结束位置叫做 `main end`
> - 交叉轴的开始位置叫做 `cross start`，结束位置叫做 `cross end`。
> - 单个项目占据的主轴空间叫做 `main size`，占据的交叉轴空间叫做 `cross size`

![主轴交叉轴图](../img/2018-11-0410:09:42.png)

### 容器属性

| 属性   | 描述 　|
| ------ | ------ |
| flex-direction  | 决定主轴的方向（即项目的排列方向） |
| flex-wrap       | 决定当一条轴线排不下所有项目时如何进行换行（当项目多行时变相决定行的排列方向） |
| flex-flow       | flex-direction属性和flex-wrap属性的简写形式|
| justify-content | 定义项目在主轴方向上的对齐方式 |
| align-content   | 项目一一进行排列必然形成行， 该属性则定义了行（轴线）在交叉轴上的对齐方式|
| align-items     | 定义行内（单轴内）所有项目在交叉轴方向上的对齐方式 |

#### flex-direction: row | row-reverse | column | column-reverse

- `flex-direction` 属性决定主轴的方向（即项目的排列方向）。主轴的方向决定了交叉轴的方向（交叉轴垂直于主轴）；
- 主轴具有四个属性对应四个主轴方向； 但是交叉轴只有两个方向要么从左向右要么就是从上到下；

| 属性值 |　描述 |
| ------ | ------ |
|　row            | 从左向右（默认值） |
|　row-reverse    | 和 row　属性相反，即从右向左 |
|　column         | 从上到下|
|　column-reverse | 和　column 相反，即从下到上 |

- flex-direction 属性不同取值， 容器内项目的排列顺序：

![flex-direction演示图](../img/2018110410:52:00.png)

- 下面代码分别修改容器 `flex-direction` 属性的取值将得到上文演示图片的效果

```css
#wrapper{
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 200px;
  background: #eee;
  padding: 10px;
}
.item{
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.item-1{background:brown}
.item-2{background:pink}
.item-3{background:orchid}
```

```html
<div id="wrapper">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

#### flex-wrap: nowrap | wrap | wrap-reverse

- 默认情况下，项目都排在一条线（又称”轴线”）上。`flex-wrap` 属性决定了当一条轴线排不下所有项目的情况下，如何进行换行。

| 属性值 | 描述 |
| ------ | ------ |
| nowrap        | 不进行换行（默认值） |
| wrap          | 允许换行， 沿着交叉轴方向进行排列 |
| wrap-reverse  | 允许换行， 并沿着交叉轴相反方向进行排列 |

- 如下图， 默认情况（`flex-wrap: nowrap`）下项目都排在一条线（又称”轴线”）上； 即使一行无法排列所有的项目，也会对项目在主轴方向上的大小进行缩放迫使所有项目都能够在一行进行排列
- 补充： 至于项目如何进行缩放， 则取决于项目的 `flex-shrink` 属性， 该属性后续会进行讲解

![flex-wrap 默认值](../img/2018-11-0411:18:42.png)

- 上图演示代码

```html
<style>
  #wrapper{
    display: flex;
    flex-direction: row;
    width: 200px;
    height: 200px;
    background: #eee;
    padding: 10px;
  }
  .item{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .item-1{background:brown}
  .item-2{background:pink}
  .item-3{background:orchid}
</style>
<div id="wrapper">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

- `flex-wrap: wrap` 当所有项目无法在一行进行排列时，允许换行进行排序，行的排列顺序为交叉轴的方向；
- 如下代码：

```html
 <style>
  #wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 200px;
    background: #eee;
    padding: 10px;
  }
  .item{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .item-1{background:brown}
  .item-2{background:pink}
  .item-3{background:orchid}
</style>
<div id="wrapper">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

![flex-wrap: wrap 演示](../img/2018-11-0411:31:07.png)

- `flex-wrap: wrap-reverse` 当所有项目无法在一行进行排列时，允许换行进行排序，行的排列顺序和交叉轴的方向相反；
- 如下演示代码：

```html
<style>
  #wrapper{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    width: 200px;
    background: #eee;
    padding: 10px;
  }
  .item{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .item-1{background:brown}
  .item-2{background:pink}
  .item-3{background:orchid}
</style>
<div id="wrapper">
  <div class="item item-1">1</div>
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

- 如图：交叉轴的方向从上到下， 项目换行排序的方向和交叉轴相反从下到上

![flex-wrap: wrap-reverse 演示](../img/2018-11-0411:34:45.png)

#### flex-flow

flex-flow 属性是 flex-direction 属性和flex-wrap属性的简写形式，默认值为 row nowrap。

#### justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly

- `justify-content` 属性定义了项目在主轴上的对齐方式。

| 属性值 | 描述 |
| ------ | ------ |
| flex-start    | 项目在主轴上向主轴开始方向靠拢(默认值) |
| flex-end      | 项目在主轴上向主轴结束方向靠拢 |
| center        | 项目在主轴上全部往中间靠拢 |
| space-between | 设置主轴方向多余空间的处理方式（具体看图）|
| space-around  | 设置主轴方向多余空间的处理方式（具体看图）|
| space-evenly  | 设置主轴方向多余空间的处理方式（具体看图）|

- `justify-content` 不同属性值在主轴方向上的排列演示图

![justify-content属性](../img/2018111109:37:17.png)

- 下面代码分别修改容器 `justify-content` 属性值将得到上文演示图片的效果

```html
  <style>
    #wrapper{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      width: 200px;
      height: 200px;
      background: #eee;
    }
    .item{
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
    .item-1{background:brown}
    .item-2{background:pink}
    .item-3{background:orchid}
  </style>
  <div id="wrapper">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
  </div>
```

#### align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch

- 项目沿主轴排列成一行或者多行， `align-content` 属性则定义这些行在交叉轴上的对齐方式（设置行（轴线）的对齐方式）

| 属性值 | 描述 |
| ------ | ------ |
| flex-start    | 每行都向交叉轴起点靠拢　|
| flex-end      | 每行都向交叉轴终点靠拢　|
| center        | 每行都向交叉轴中间靠拢　|
| space-between | 设置交叉轴方向多余空间的处理方式（具体看图）|
| space-around  | 设置交叉轴方向多余空间的处理方式（具体看图）|
| space-evenly  | 设置交叉轴方向多余空间的处理方式（具体看图）|
| stretch       | (默认值)每行都在交叉轴方法进行均匀伸缩，企图占满交叉轴上所有剩余的空间 |

- align-content 不同属性值, 行在交叉轴方向上的排列演示图

![align-content属性](../img/2018120210:48:17.png)

- 下面代码依次修改 align-content 属性值将得到上文演示图的效果
- 补充：对比代码和示意图，其实我们并没有给每个项目设置高度，但是项目却自动伸缩获取 100% 的高度，这是因为 align-items 的默认值为 stretch ， align-items 在下文会进详细的说明；

```html
  <style>
    #wrapper{
      width: 200px;
      height: 200px;
      background: #eee;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
    }
    .item{
      width: 40px;
      line-height: 40px;
      margin: 1px;
      background: red;
      text-align: center;
    }
    .item-50h{line-height: 50px; }
    .item-70h{line-height: 70px; }
    .item-30h{line-height: 30px; }
  </style>
  <div id="wrapper">
    <div class="item item-50h">1</div>
    <div class="item item-70h">2</div>
    <div class="item item-30h">3</div>
    <div class="item item-50h">4</div>
    <div class="item item-70h">5</div>
    <div class="item item-30h">6</div>
  </div>
```

#### align-items: flex-start | flex-end | center | baseline | stretch

- 项目沿主轴进行排列成一行或者多行， `align-content` 则可以设置每行在交叉轴方向的对齐方式
- 而 `align-items` 则设置行内所有项目在该行内沿着交叉轴方法的对齐方式

| 属性值 | 描述 |
| ------ | ------ |
| flex-start  | 行内项目在交叉轴上向开始位置靠拢 |
| flex-end    | 行内项目在交叉轴上向结束位置靠拢 |
| center      | 行内项目在交叉轴上向中间位置靠拢 |
| basline     | 行内项目按照文字基线进行对齐（用于不同字体大小、行高的文字布局上特别好用） |
| stretch     | （默认）行内项目(在未为项目设置高度或者设为 auto 情况下)在交叉轴方法进行伸缩，占满该行在交叉轴上的所有剩余空间 |

- `align-items` 不同属性值, 行内项目在交叉轴方向上的排列示意图

![align-items属性](../img/2018120211:32:53.png)

- 上文示意图代码：依次修改 `align-center` 属性值将得上上文示意图的效果
- 注意对比代码和示意图，发现 `basline` 和 `center` 效果貌似一样， 实际上是因为所有项目设置了相同的字体大小、并且文字居中；有兴趣的可以尝试移除行高并为每个项目设置不同的字体大小，查看 `baseline` 的具体效果；

```html
  <style>
    #wrapper{
      width: 200px;
      height: 200px;
      background: #eee;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: stretch;
    }
    .item{
      width: 40px;
      line-height: 40px;
      margin: 1px;
      background: red;
      text-align: center;
    }
    .item-50h{line-height: 50px; }
    .item-70h{line-height: 70px; }
    .item-30h{line-height: 30px; }
  </style>
  <div id="wrapper">
    <div class="item item-50h">1</div>
    <div class="item item-70h">2</div>
    <div class="item item-30h">3</div>
    <div class="item item-50h">4</div>
    <div class="item item-70h">5</div>
    <div class="item item-30h">6</div>
  </div>
```

## 项目属性

| 属性 | 描述 |
| ------ | ------ |
| order       | 定义项目的排列顺序 |
| flex-grow   | 定义项目的放大比例 |
| flex-shrink | 定义项目的缩小比例 |
| flex-basis  | 定义了在分配多余空间之前，项目占据的主轴空间 |
| flex        | flex-grow flex-shrink flex-basis 的简写属性 |
| align-self  | 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性（重新设置该项目的 align-items 属性 ）

### order: \<integer\>

- `order` 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。(支持负数)
- 有代码如下:

```html
  <style>
    #wrapper{
      display: flex;
      flex-direction: row;
      width: 200px;
      height: 200px;
      background: #eee;
    }
    .item{
      width: 50px;
      line-height: 50px;
      height: 50px;
      text-align: center;
    }
    .item-1{background:brown; order: 3}
    .item-2{background:pink; order: 1}
    .item-3{background:orchid; order: -1}
  </style>
  <div id="wrapper">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
  </div>
```

- 演示效果有:

!['roder'](../img/2018112409:17:05.png)

### flex-grow: \<number\>

- 已只项目是沿着主轴的方向进行排列的,当项目较少时, 主轴方法存在剩余的空间时; 可通过 `flex-grow` 来规定如何处理主轴方向上剩余的空间;
- 主轴上剩余空间的计算则取决于 `flex-basis` （下面介绍）
- `flex-grow` 属性的默认值为 0，即如果存在剩余空间，也不进行放大(不对剩余的空间进行处理)。
- 如果所有项目的 `flex-grow` 属性值都相等(假如都为 1 )，则它们将等分剩余空间（如果有的话）。
- 如果一个项目的 `flex-grow` 属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍（按 2:1 的比例分配剩余空间）。

- flex-grow 属性演示图

![flex-grow](../img/2018112409:48:41.png)

- 下面代码中只需修改每个项目的 `flex-grow` 属性值即可得到上述效果

```html
  <style>
    #wrapper{
      display: flex;
      flex-direction: row;
      width: 400px;
      height: 200px;
      background: #eee;
    }
    .item{
      width: 50px;
      line-height: 50px;
      height: 50px;
      text-align: center;
    }
    .item-1{background:brown; flex-grow: 2}
    .item-2{background:pink; flex-grow: 1}
    .item-3{background:orchid; flex-grow: 1}
  </style>
  <div id="wrapper">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
  </div>
```

### flex-shrink: \<number\>

- 已知在项目沿主轴进行排序时, 当主轴无法容下所有项目并且主轴方向上项目的排列不允许进行换行的情况下所有项目会进行等比例进行缩放,而这一行为实际上是由项目的 `flex-shrink` 属性进行控制的; 因为 `flex-shrink` 属性定义了项目的缩小比例;
- 如果所有项目的 `flex-shrink` 属性都为 1，当空间不足时，都将等比例缩小(默认情况, 所以也就有了上述情况)。
- 如果一个项目的 `flex-shrink` 属性为 0， 其他项目都为 1，则空间不足时，前者不缩小， 后者等比例进行缩放。
- 如果一个项目的 `flex-shrink` 属性为 2 ，其他项目都为 1，则空间不足时，前者和后者按照 2:1 进行缩小;
- 负值对该属性无效。

- `flex-shrink` 属性演示图

![flex-shrink](../img/2018112410:37:48.png)

- 下面代码中只需要修改 `flex-shrink` 即可实现上述效果

```html
  <style>
    #wrapper{
      display: flex;
      flex-direction: row;
      width: 400px;
      height: 200px;
      background: #eee;
    }
    .item{
      width: 200px;
      line-height: 50px;
      height: 50px;
      text-align: center;
    }
    .item-1{background:brown; flex-shrink: 2}
    .item-2{background:pink; flex-shrink: 1}
    .item-3{background:orchid; flex-shrink: 1}
  </style>
  <div id="wrapper">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
  </div>
```

### flex-basis: \<length\>

- 在 `flex-grow` 属性生效(分配多余主轴空间)之前, `flex-basis` 属性将设置项目所占据的基础主轴空间( 相当于设置项目的最小宽度 )
- 浏览器实际上是根据 `flex-basis` 属性来计算主轴上的剩余空间(只是 `flex-basis` 默认值为 `auto` 等于项目的大小);

- flex-basis 属性演示图

![flex-basis](../img/2018112411:16:02.png)

- 上文演示图代码:

```html
  <style>
    #wrapper{
      display: flex;
      flex-direction: row;
      width: 800px;
      height: 200px;
      background: #eee;
    }
    .item{
      width: 50px;
      line-height: 50px;
      height: 50px;
      text-align: center;
    }
    .item-1{background:brown; flex-grow: 1; flex-basis: 400px}
    .item-2{background:pink; flex-grow: 1;}
    .item-3{background:orchid; flex-grow: 1;}
  </style>
  <div id="wrapper">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
  </div>
```

### flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]

- `flex` 属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 的简写，默认值为 `0 1 auto` 。后两个属性(`flex-shrink` 和 `flex-basis`)可选。
- 该属性有两个快捷值:
  - auto: 等价于 `flex:1 1 auto`
  - none: 等价于 `flex: 0 0 auto`
- 建议优先使用 `flex` 属性，而不是单独写三个分离的属性（ `flex-grow`, `flex-shrink` 和 `flex-basis` ），因为浏览器会推算相关值。

### align-self: auto | flex-start | flex-end | center | baseline | stretch

- 还记得在 `flex` 容器中我们可以通过 `align-items` 属性来设置行内项目在交叉轴上的对齐方式, 那么如果需要行内某个项目具有鹤立独行的对齐方式时就可以通过为项目设置 `align-self` 来修改(覆盖)行内项目在交叉轴上的对齐方式

- `align-self` 属性演示

![align-self](../img/2018-12-0211:47:21.png)

- 演示代码如下:

```html
  <style>
    #wrapper{
      width: 200px;
      height: 200px;
      background: #eee;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: flex-start;
    }
    .item{
      width: 40px;
      line-height: 40px;
      margin: 1px;
      background: red;
      text-align: center;
    }
    .item-50h{line-height: 50px; }
    .item-70h{line-height: 70px; }
    .item-30h{line-height: 30px;  align-self: flex-end;}
  </style>
  <div id="wrapper">
    <div class="item item-50h">1</div>
    <div class="item item-70h">2</div>
    <div class="item item-30h">3</div>
    <div class="item item-50h">4</div>
    <div class="item item-70h">5</div>
    <div class="item item-30h">6</div>
  </div>
```

## flex 布局的一些小例子

### 骰子布局

#### 单个项目在 flex 容器中的定位布局

- 效果演示:

![单项目在flex容器中的定位布局](../img/2018112414:56:50.png)

- 演示代码有(依次修改 flex 容器 justify-content 和 align-items 属性值):

```html
  <style>
    body{padding: 50px}
    #wrapper{
      background: #eee;
      margin: 5px;
      width: 240px;
      height: 240px;
    }
    .item{
      width: 80px;
      height: 80px;
      background: red;
    }
    .flex{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  </style>
  <div id="wrapper" class="flex">
    <div class="item"></div>
  </div>
```

- 上面的效果实际上是对 justify-content 和 align-items 属性的 flex-start center flex-end 三个属性的组合

#### 双项目以及三项目在 flex 容器中简单布局

- 简单演示

![双项目三项目布局](../img/2018-11-2415:55:17.png)

- 演示代码

```html
  <style>
    body{padding: 50px}
    #box{
      display: flex;
      flex-wrap: wrap;
      width: 750px;
    }
    .wrapper{
      background: #eee;
      margin: 5px;
      width: 240px;
      height: 240px;
    }
    .item{
      width: 70px;
      height: 70px;
      line-height: 70px;
      margin: 5px;
      text-align: center;
      background: red;
    }

    /* 双项目 */
    .flex:nth-child(1){
      display: flex;
      justify-content: flex-start;
    }
    .flex:nth-child(2){
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .flex:nth-child(3){
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .flex:nth-child(3) .item:nth-child(2){
      align-self: center;
    }
    /* 三项目 */
    .flex:nth-child(4){
      display: flex;
      justify-content: flex-start;
    }
    .flex:nth-child(5){
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .flex:nth-child(6){
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .flex:nth-child(6) .item:nth-child(2){
      align-self: center;
    }
    .flex:nth-child(6) .item:nth-child(3){
      align-self: flex-end;
    }

  </style>
</head>
<body>
  <div id="box">
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
    </div>
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
    </div>
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
    </div>
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
    </div>
  </div>
```

#### 四项目在 flex 容器中简单布局

- 演示效果

![四项目](../img/2018-11-2416:23:28.png)

- 演示代码

```html
  <style>
    body{padding: 50px}
    #box{
      display: flex;
      flex-wrap: wrap;
      width: 750px;
    }
    .wrapper{
      background: #eee;
      margin: 5px;
      width: 240px;
      height: 240px;
    }
    .item{
      width: 70px;
      height: 70px;
      line-height: 70px;
      margin: 5px;
      text-align: center;
      background: red;
    }

    .flex:nth-child(1){
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      align-content: space-between;
    }
    .flex:nth-child(2){
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .row{
      display: flex;
      justify-content: space-between;
    }
  </style>
  <div id="box">
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
    </div>
    <div class="wrapper flex">
      <div class="row">
        <div class="item">1</div>
        <div class="item">2</div>
      </div>
      <div class="row">
        <div class="item">3</div>
        <div class="item">4</div>
      </div>
    </div>
  </div>
```

#### 六项目九项目简单布局

- 演示效果

![六项目九项目](../img/2018-11-2416:49:00.png)

- 演示代码(实际就是对项目进行分组嵌套)

```html
  <style>
    body{padding: 50px}
    #box{
      display: flex;
      flex-wrap: wrap;
      width: 750px;
    }
    .wrapper{
      background: #eee;
      margin: 5px;
      width: 240px;
      height: 240px;
    }
    .item{
      width: 70px;
      height: 70px;
      line-height: 70px;
      margin: 5px;
      text-align: center;
      background: red;
    }

    /* 双项目 */
    .flex:nth-child(1){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
    }
    .flex:nth-child(2){
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .row{
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .row:nth-child(2){
      justify-content: center;
    }
  </style>
  <div id="box">
    <div class="wrapper flex">
      <div class="row">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      </div>
      <div class="row">
        <div class="item">4</div>
      </div>
      <div class="row">
        <div class="item">5</div>
        <div class="item">6</div>
      </div>
    </div>
    <div class="wrapper flex">
      <div class="item">1</div>
      <div class="item">2</div>
      <div class="item">3</div>
      <div class="item">4</div>
      <div class="item">5</div>
      <div class="item">6</div>
      <div class="item">7</div>
      <div class="item">8</div>
      <div class="item">9</div>
    </div>
  </div>
```

### 文字布局(不同字体大小)

- 演示效果

![文字布局](../img/2018-11-2417:25:17.png)

- 演示代码

```html
  <style>
    body{padding: 50px}
    #wrapper{
      display: inline-flex;
      padding: 0 10px;
      height: 60px;
      background: red;
    }
    .no{font-size: 30px;}
    .order{font-size: 60px;}
    .line{
      border-left: 2px solid #333;
      height: 40px;
      margin: 0 10px;
      align-self: center;
    }
    .row-left{
      display: flex;
      align-items: baseline;
    }
    .row-right{
      height: 100%;
      font-size: 18px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  </style>
  <div id="wrapper">
    <div class="row-left">
      <div class="no">No.</div>
      <div class="order">04</div>
    </div>
    <div class="line"></div>
    <div class="row-right">
      <div>十月</div>
      <div>2018</div>
    </div>
  </div>
```

### 超级简单的网格布局

#### 每个子项平局分布容器的宽度（关键： flex-grow 属性）

- 演示效果

![网格布局](../img/2018-11-2417:43:47.png)

- 演示代码

```html
  <style>
    body{padding: 50px}
    #wrapper{
      background: #eee;
      padding: 5px;
    }
    .item{
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: red;
    }
    .grid{
      display: flex;
    }
    .grid-cell{
      /* 推荐使用简写属性 flex: 1 */
      flex-grow: 1;
      margin: 5px;
    }
  </style>
  <div id="wrapper">
    <div class="grid">
      <div class="grid-cell item">1/2</div>
      <div class="grid-cell item">1/2</div>
    </div>
    <div class="grid">
      <div class="grid-cell item">1/3</div>
      <div class="grid-cell item">1/3</div>
      <div class="grid-cell item">1/3</div>
    </div>
    <div class="grid">
      <div class="grid-cell item">1/4</div>
      <div class="grid-cell item">1/4</div>
      <div class="grid-cell item">1/4</div>
      <div class="grid-cell item">1/4</div>
    </div>
    <div class="grid">
      <div class="grid-cell item">1/5</div>
      <div class="grid-cell item">1/5</div>
      <div class="grid-cell item">1/5</div>
      <div class="grid-cell item">1/5</div>
      <div class="grid-cell item">1/5</div>
    </div>
  </div>
```

#### 个别子项具有固定宽度其余项目平均分布（关键： flex-grow flex-basis 属性）

- 演示效果

![网格布局](../img/2018-12-0109:29:49.png)

- 演示代码

```html
  <style>
    body{padding: 50px}
    #wrapper{
      background: #eee;
      padding: 5px;
    }
    .grid{
      display: flex;
    }
    .grid-cell{
      height: 50px;
      margin: 5px;
      line-height: 50px;
      text-align: center;
      background: red;
    }
    .grid:nth-child(1) .grid-cell{flex: 1;}
    .grid:nth-child(1) .grid-cell:nth-child(1){
      flex: 0 0 50%;
    }

    .grid:nth-child(2) .grid-cell{flex: 1;}
    .grid:nth-child(2) .grid-cell:nth-child(1){
      flex: 0 0 400px;
    }

    .grid:nth-child(3) .grid-cell{flex: 1;}
    .grid:nth-child(3) .grid-cell:nth-child(1){
      flex: 0 0 20%;
    }
    .grid:nth-child(3) .grid-cell:nth-child(4){
      flex: 0 0 20%;
    }

    .grid:nth-child(4) .grid-cell{flex: 1;}
    .grid:nth-child(4) .grid-cell:nth-child(1){
      flex: 0 0 200px;
    }
    .grid:nth-child(4) .grid-cell:nth-child(5){
      flex: 0 0 200px;
    }
  </style>
  <div id="wrapper">
    <div class="grid">
      <div class="grid-cell">50%</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">平均分布</div>
    </div>
    <div class="grid">
      <div class="grid-cell">400px</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">平均分布</div>
    </div>
    <div class="grid">
      <div class="grid-cell">20%</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">20%</div>
    </div>
    <div class="grid">
      <div class="grid-cell">200px</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">平均分布</div>
      <div class="grid-cell">200px</div>
    </div>
  </div>
```

### 圣杯布局

- 圣杯布局（Holy Grail Layout）指的是一种最常见的网站布局。页面从上到下，分成三个部分：头部（header），躯干（body），尾部（footer）。其中躯干又水平分成三栏，从左到右为：导航、主栏、副栏。
- t同时这里我们满足当屏幕宽度小于 785px 时躯干从水平布局变为垂直分布， 从上到下依次是：航、主栏、副栏。

- 演示效果

![圣杯布局](../img/2018120110:48:06.png)

- 演示代码

```html
  <style>
    body{padding: 50px}
    #wrapper{
      display: flex;
      flex-direction: column;
    }
    .row{ flex-grow: 1;}
    .header, .footer{background: #eee; line-height: 50px;text-align: center;}
    .body{ display: flex; height: 400px;}
    .left{flex: 0 0 12em; background: red;}
    .content{flex: 1;background: brown;}
    .right{flex: 0 0 12em; background: blue;}
    @media (max-width: 768px){
      .body{ display: flex; height: 400px; flex-direction: column;}
      .left{flex: auto; background: red;}
      .content{flex: auto;background: brown;}
      .right{flex: auto; background: blue;}
    }
  </style>
  <div id="wrapper">
    <div class="row header">#header</div>
    <div class="row body">
      <div class="left">#left</div>
      <div class="content">#content</div>
      <div class="right">#right</div>
    </div>
    <div class="row footer">#footer</div>
  </div>
```

### 输入框布局

- 常见输入框带前后缀，且自适应：
- 效果演示

![输入框布局](../img/2018-12-0112:28:46.png)

- 演示代码

```html
  <style>
    body{
      padding: 50px;
    }
    #wrapper{
      display: flex;
      border: 1px solid #eee;
      border-radius: 6px;
      line-height: 50px;
    }
    .prefix, .suffix{
      padding: 0 20px;
      background: #eee;
    }
    .input{flex:1; padding: 0 10px;}

  </style>
  <div id="wrapper">
    <div class="prefix">prefix</div>
    <div class="input">input</div>
    <div class="suffix">suffix</div>
  </div>
```

### 图文布局

- 图文左右布局，图片和文字的任意对齐
- 效果演示

![图文布局](../img/2018-12-0114:28:52.png)

- 演示代码:(修改 align-self 属性可控制图片和文本的对齐方式)

```html
  <style>
    body{
      padding: 50px;
    }
    #wrapper{
     display: flex;
     align-items: flex-start;
    }
    .img{
      line-height: 50px;
      text-align: center;
      margin: 0 5px;
      flex: 1 0 50px;
      background: red;
      /* align-self: center; */
    }
  </style>
</head>
<body>
  <div id="wrapper">
    <div class="img">img</div>
    <div class="">
      Ubuntu Phone has been designed with obsessive attention to detail.
      Form follows function throughout, from the ever-changing welcome
      screen to essentials like messaging and alarms. And the Launcher
      puts it all at your fingertips, whatever you’re doing with your phone.
      Canonical is the global software vendor that provides commercial, design
      and engineering support to the Ubuntu project. Today, our hardware
      enablement team supports the pre-installation of Ubuntu on more
      than 10% of all new PCs shipped, worldwide.
    </div>
  </div>
```

### 流式布局

- 效果演示：

![流式布局](../img/2018-12-0114:44:11.png)

- 演示代码：

```html
  <style>
    body{
      padding: 50px;
    }
    #wrapper{
     display: flex;
     flex-wrap: wrap;
     align-content: flex-start;
    }
    .item{
      width: 100px;
      height: 100px;
      margin: 5px;
      background: red;
    }

  </style>
  <div id="wrapper">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
```

### 底部固定

- 在某些页面中有时页面内容太少，无法占满一屏的高度，底栏经常就会抬高到页面的中间， 下面使用flex实现底部固定在页面底部上；

- 效果演示

![底部固定](../img/2018-12-0115:30:41.png)

- 演示代码

```html
  <style>
    *{padding: 0; margin: 0;}
    #wrapper{
     display: flex;
     height: 100vh;
     box-sizing: border-box;
     flex-direction: column;
    }
    .header{
      line-height: 50px;
      text-align: center;
      background: #eee;
    }
    .content{
      flex: 1;
      text-align: center;
    }
    .footer{
      line-height: 50px;
      text-align: center;
      background: #eee;
    }
  </style>
  <div id="wrapper">
    <div class="header">#header</div>
    <div class="content">#content</div>
    <div class="footer">#footer</div>
  </div>
```
