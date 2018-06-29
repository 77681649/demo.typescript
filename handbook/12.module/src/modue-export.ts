export interface Person {
  name: string;
}

export const NUMBER_REGEXP = /^\d+$/;

export class Person implements Person {
  constructor(public name: string) {
    this.name = name;
  }
}
