class Boundary {
  constructor(x1, y1, x2, y2) {
    this.a = createVector(x1, y1);
    this.b = createVector(x2, y2);
    this.strokeColor = [255, 255, 255];
  }

  updateStrokeColor(color) {
    this.strokeColor = color;
  }

  show() {
    strokeWeight(5)
    stroke(...this.strokeColor);
    line(this.a.x, this.a.y, this.b.x, this.b.y);
  }
}
