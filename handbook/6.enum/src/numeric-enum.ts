namespace numericEnum {
  // 枚举类型
  enum Direction {
    Up = 1, // 1
    Down, // 2

    Left = 10, // 10
    Right // 11
  }

  enum Color {
    Red, // 0
    Blue,
    Yellow
  }

  let dir: Direction = Direction.Down;
  let color: Color = Color.Yellow;
}
