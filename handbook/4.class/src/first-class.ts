/**
 * 第一个类
 */

class Greeter {
  /**
   * [public] gretting: string
   */
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("jo");
greeter.greet();
