let bubble1;
let bubble2;
let player1;


function setup() {
	createCanvas(600,400);

	bubble1 = new Bubble(200,200);
	bubble2 = new Bubble(300,200,10);
	player1 = new Player(mouseX,mouseY,50)
}

function draw() {
	background(255,255,0);
	bubble1.show();
	bubble1.move();

	bubble2.show();
	bubble2.move();

	player1.show();
	player1.x = mouseX;
	player1.y = mouseY;

	var counter = 0;
	if(player1.intersects(bubble1)){
		//background(200,200,200);
		counter = counter + 1;
		player1.changeRadius(counter);
	}
}
