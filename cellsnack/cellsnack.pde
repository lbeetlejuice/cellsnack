int x,y;
boolean [] keys = new boolean[128];

void setup() {
  size(600,600);
  x = 300;
  y = 300;
}

void draw() {
  background(0);
  move();
  ellipse(x,y,20,20);
}

void move() {
  if(keys['w'])
  y--;
  if(keys['s'])
  y++;
  if(keys['a'])
  x--;
  if(keys['d'])
  x++;
}

void keyPressed() {
  keys[key] = true;
}

void keyReleased() {
  keys[key] = false;
}