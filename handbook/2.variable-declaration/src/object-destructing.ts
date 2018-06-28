/**
 * 对象解构
 */
let obj: any = {
  name: "tyossss",
  age: 92
};

let {
  name: myName, // 重命名
  age: myAge, // 重命名
  address = "" // 默认值
} = obj;

let newObj: any = {
  address: "shenzhen",
  ...obj
};
