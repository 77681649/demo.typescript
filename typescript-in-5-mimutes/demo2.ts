/**
 * 接口
 */

interface Person {
  firstName: string;
  lastName: string;
}

export function gretter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

gretter({ firstName: "123", lastName: "haha" });
