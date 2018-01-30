class Player {
 float x,y;
 PImage spriteSheet;
 PImage [][] movement;
 
 Player() {
   x = y = 500;
   
   setupSprites();
 }
 
 void setupSprites() {
   movement = new PImage[7][7]; //rows,columns
  spriteSheet = loadImage("cell.png"); 
  for(int i = 0; i < 7; i++) {
    movement[0][i] = spriteSheet.get(i*59,0,59,59); //x,y,width,height
    movement[1][i] = spriteSheet.get(i*59,0,59,59);
  }
 }
 
 void drawPlayer() {
   for(int i = 0; i < 7; i++){
     image(movement[0][i],i*59,0);
   }
 }
 
 
 
 
}