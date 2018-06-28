/**
 * 在泛型约束中使用类型参数
 */
namespace usingTypeParamInGenericsContrain {

  // T 受 Object.keys(T) 约束
  function getProperty<T , K extends keyof T>(
    obj: T,
    key: K
  ) {
    return obj[key];
  }

  let obj = { a: 1, b: 2 };
  getProperty(obj, "a");  
  getProperty(obj, "x"); // 不在类型T的属性列表汇总
}
