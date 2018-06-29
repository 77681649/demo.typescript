/**
 * 多态的this类型
 *
 */

class BasicCalculator {
  public constructor(protected value: number = 0) {}

  public currentValue(): number {
    return this.value;
  }

  public add(operand: number): this {
    this.value += operand;
    return this;
  }

  public multiply(operand: number): this {
    this.value *= operand;
    return this;
  }
}

class ScientificCalculator extends BasicCalculator {
  public sin() {
    this.value = Math.sin(this.value);
    return this;
  }
}

//
//
//
let v1 = new BasicCalculator(2)
  .add(10)
  .multiply(1)
  .currentValue();

let v2 = new ScientificCalculator(2)
  .multiply(1)
  .sin()
  .add(10)
  .currentValue();
