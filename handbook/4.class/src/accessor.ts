/**
 * 存取器
 */
class Food {}

export class Animal {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  get size(): [number, number] {
    return [this.width, this.height];
  }

  eat(food: Food) {}
  sleep() {}
}

export class Person extends Animal {
  public firstName: string;
  public lastName: string;

  constructor(
    firstName: string,
    lastName: string,
    width: number,
    height: number
  ) {
    super(width, height);

    this.firstName = firstName;
    this.lastName = lastName;
  }

  private get name(): string {
    return this.lastName + " " + this.firstName;
  }

  private set name(name: string) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}
