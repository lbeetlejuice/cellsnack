class Cell {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  avoiding(other) {
    other.x = other.x + 1;
    other.y = other.y + 1;
  }

  show() {
    fill(0, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
