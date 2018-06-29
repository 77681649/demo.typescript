/**
 * 索引类型 index-types
 *
 */

/**
 * names 是动态的,依赖与o的属性列表
 *
 * T:    泛型
 * K:    泛型约束于 keys(T)
 * T[K]: 返回
 */
function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

let obj = {
  a: 1,
  b: 2
};

pluck(obj, ["a", "b"]);
pluck(obj, ["a", "b", "c"]);
