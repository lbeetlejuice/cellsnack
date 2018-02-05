let cells = [];
let player;

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < 125; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 20);
    cells[i] = new Cell(x, y, r);
  }
  player = new Player(0,0,30)
}

function draw() {
  background(255);

  for (let c of cells) {
    c.show();
    player.show();
    player.x = mouseX;
    player.y = mouseY;
    let overlapping = false;
    for (let other of cells) {
      if (c !== other && c.intersects(other)) {
        overlapping = true;
      }
      if(player.intersects(other)){
        c.avoiding(other);
      }
    }
  }
}
