/**
 * 根据字符串生成唯一 code
 * @see https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 * @param {String} str 字符串
 * @returns {Number} 生成的 code
 */
export default ({ str = '' }) => [...str].reduce((total, ele, index) => {
  const char = str.charCodeAt(index);
  return (((total << 5) - total) + char) | 0;
}, 0);
