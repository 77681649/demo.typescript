/**
 * 映射类型
 *
 */
namespace mappedType {
  interface Person {
    name?: string;
    age?: number;
  }

  type Readonly<T> = { readonly [P in keyof T]: T[P] };
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  type Partial<T> = { [P in keyof T]?: T[P] };

  let person: Readonly<Person> = {
    name: "tyo",
    age: 20
  };

  person.name = "aha";
}
