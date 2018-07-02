namespace decoratorEnumerable {
  function enumerable(enumerable = true) {
    return function enumerableDecorator(
      target: any,
      propertyKey: string,
      propertyDescriptor: PropertyDescriptor
    ) {
      propertyDescriptor.enumerable = enumerable;
      return propertyDescriptor;
    };
  }

  class Person {
    public name: string;
    public age: number;

    @enumerable(false)
    _format() {}

    @enumerable()
    print() {
      console.log("haha");
    }
  }

  let person: Person = new Person();

  for (let key in person) {
    console.log(key);
  }
}
