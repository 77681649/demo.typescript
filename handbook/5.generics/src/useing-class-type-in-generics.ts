/**
 * 在约束中使用类类型
 */
namespace usingTypeParamInGenericsContrain {
  class Animal {
    public name: string;
  }

  class Lion extends Animal {
    public run() {}
  }

  class Bee extends Animal {}

  // 类类型约束能识别所有继承于该类的子类
  function createInstance<T extends Animal>(c: new () => T): T {
    return new c();
  }

  createInstance(Lion).run();
  createInstance(Bee).name;
}
