/**
 * 可索引的类型
 */

// 定义一个字符串数组
interface StringArray {
  [index: number]: string;
}

// 定义一个KeyPair<string,number>
interface KeyValuePair {
  [key: string]: number;
}

// 定义一个数字字段
interface NumberDictionary {
  readonly [name: string]: number;
  length: number;
}

let names: StringArray = ["a", "b", "c"];
let keyValuePair: KeyValuePair = {
  a: 1,
  b: 2,
  c: 3
};

let dic: NumberDictionary = {
  a: 1,
  b: 2,
  c: 3,
  length: 4
};

// 只读
dic[4] = 4