
// const _ = require('lodash')

// const md = [
//   { type: 'h1', key: '1' },
//   { type: 'h2', key: '1-1' },

//   { type: 'h3', key: '1-1-1' },
//   { type: 'h3', key: '1-1-2' },

//   { type: 'h4', key: '1-1-2' },
//   { type: 'h5', key: '1-1-2' },


//   // { type: 'h2', key: '1-2' },
//   // { type: 'h1', key: '2' },
//   // { type: 'h2', key: '2-1' },
//   // { type: 'h2', key: '2-2' },
// ]

// const H = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

// /*
// let p = []

// h1 h2 h3 h3 h2 h1 h2 h2

// 1. h1   => [h1]

// 2. h2   => [h1, h2]

// 3. h3   => [h1, h2, h3]

// 3. h3   => [h1, h2, h3]
// */

// const handler = (list) => {
//   let res = []

//   list.forEach(current => {
//     // 1. res 空 || current === 第一个, 直接追加, 并过滤其他
//     if (_.isEmpty(res) || current.type === res[0].type) {
//       res.push({ ...current, _children: [] })
//       res = res.filter(v => v.type === res[0].type)
//       return
//     }

//     // 2. 过滤, 保证 current 是最大的
//     res = res.filter(v => v.type < current.type)

//     const ele = {...current, _children: []}
//     _.last(res)._children.push(ele)
//     res.push(ele)
//   })

//   return res
// }

// const res = handler(md)
// console.log('%c [ res ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', JSON.stringify(res, null, 2));
