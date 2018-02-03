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
  player1 = new Player(0,0,20)
}

function draw() {
  background(255);

  for (let b of bubbles) {
    b.show();
    b.move();
    player1.show();
    player1.x = mouseX;
    player1.y = mouseY;
    let overlapping = false;
    for (let other of bubbles) {
      if (b !== other && b.intersects(other)) {
        overlapping = true;
      }
      if(player1.intersects(other)){
        b.avoiding(other);
      }
    }
    if (overlapping) {
      b.changeColor(0);
    } else {
      b.changeColor(0);
    }
  }




}
