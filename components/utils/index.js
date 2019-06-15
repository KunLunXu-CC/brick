/**
 * 合并 className
 * @param  {...any} args className 参数列表
 */
export function getClassName(...args){
  const filter = args.filter(v => !!v);
  return filter.join(' ');
}
