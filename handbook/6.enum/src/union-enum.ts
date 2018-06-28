/**
 * 联合枚举
 */
namespace unionEnum {
  enum ShapeKind {
    Circle,
    Square
  }

  interface Circle {
    kind: ShapeKind.Circle; // 作为类型
    radius: number;
  }

  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }

  // 不满足
  let circle1: Circle = {
    kind: "a",
    radius: 10
  };

  // ok
  let circle2: Circle = {
    kind: ShapeKind.Circle,
    radius: 10
  };
}
