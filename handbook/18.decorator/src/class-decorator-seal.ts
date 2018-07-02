"use strict";
/**
 * 类装饰器
 */
namespace classDecoratorSealed {
  //
  // seal 类以及类的实例
  //
  function sealed<T extends { new (...args: any[]): {} }>(constructor: T) {
    // seal 类成员
    Object.seal(constructor);

    // seal 原型成员
    Object.seal(constructor.prototype);

    // seal 实例成员
    return class extends constructor {
      constructor(...args) {
        super(...args);
        Object.seal(this);
      }
    };
  }

  @sealed
  class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    public sayHello() {
      console.log("Hello.");
    }
  }

  let person: Person = new Person("tyossss", 28);

  person.sayHello();
  person.sayHello = function() {}; // 抛出异常
  person.sayHello();
}
