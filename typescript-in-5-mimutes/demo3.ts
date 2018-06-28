/**
 * 类 class
 */
export class Student {
  //
  // 成员变量
  //
  fullName: string;

  //
  // 构造函数的参数上使用public,等价于创建同名的成员变量
  //
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

let student = new Student("a", "b", "c");
