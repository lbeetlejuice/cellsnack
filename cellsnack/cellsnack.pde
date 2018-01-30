int x,y;
boolean [] keys;
int startsize = 20;
Player player;

void setup() {
  size(1000,1000);
  player = new Player();
  keys = new boolean[128];
  x = y = 500;
}

void draw() {
  background(0);
  move();
  player.drawPlayer();
  ellipse(x,y,startsize,startsize);
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