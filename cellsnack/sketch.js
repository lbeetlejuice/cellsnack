let bubbles = [];
let player1;

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 20);
    bubbles[i] = new Bubble(x, y, r);
  }
  player1 = new Player(mouseX,mouseY,20)
}

function draw() {
  background(0);

  for (let b of bubbles) {
    b.show();
    b.move();
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      b.changeColor(255);
    } else {
      b.changeColor(0);
    }
  }

  player1.show();
}
