class Polygon {
  constructor(points) {
    this.points = points;
  }

  getArea() {
    let area = 0;
    let j = this.points.length - 1;

    for (let i = 0; i < this.points.length; i++) {
      area = area +
        (this.points[j][0] + this.points[i][0]) *
        (this.points[j][1] - this.points[i][1]);
      j = i;
    }

    return Math.abs(area / 2);
  }

  getPoints() {
    return this.points.map(n => `(${n[0]},${n[1]})`).join(',');
  }

  toString() {
    return `I am ${this.name}, area = ${this.getArea()}`
  }
}

class Rectangle extends Polygon {
  constructor(points) {
    super(points, 'Rectanger');
    this.name = 'Rectanger'
  }
}

class Triangle extends Polygon {
  constructor(points) {
    super(points, 'Triangle');
    this.name = 'Triangle';
  }

  static create(points) {
    return new Triangle(points);
  }
}

export {
  Triangle, Polygon, Rectangle
}
