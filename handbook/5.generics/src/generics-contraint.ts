/**
 * 泛型约束
 */
namespace genericsContraint {
  interface Lengthwise {
    length: number;
  }

  /**
   * 获得指定对象的长度
   * 通过添加泛型约束,可以确保泛型的参数必然是某个类型
   * 
   * @template T
   * @param {T} o
   * @returns {number}
   */
  function getLength<T extends Lengthwise>(o: T): number {
    // 没有泛型约束会报错: length不存在
    return o.length
  }
}
