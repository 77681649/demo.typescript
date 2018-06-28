interface IPoint {
  x: number;
  y: number;
}

interface IRectangle {
  width: number;
  height: number;
  origin: IPoint;

  draw();
}

interface ISquare extends IRectangle {
  square: number;
}

class Rectangle implements IRectangle {
  constructor(
    public width: number,
    public height: number,
    public origin: IPoint
  ) {
    this.width = width;
    this.height = height;
    this.origin = origin;
  }

  draw() {
    console.log(
      `draw rectangle: origin(${this.origin.x},${this.origin.y}) size(${
        this.width
      },${this.height})`
    );
  }
}

class Square extends Rectangle implements Square {
  constructor(public square: number, public origin: IPoint) {
    super(square, square, origin);

    this.square = square;
  }
}
