

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
	bubble2.show();
	bubble1.move();
	bubble2.move();
	player1.show();
	bubble2.x = mouseX;
	bubble2.y = mouseY;



	if(bubble1.intersects(bubble2)){
		background(200,0,100);
	}
}

class Player {
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
	}

	show(){
		fill(250,200,200);
		ellipse(this.x,this.y,this.r,this.r);
	}


}

class Bubble {
	constructor(x,y,r = 50){
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}

	intersects(other){
		let d = dist(this.x, this.y, other.x,other.y);
		return (d < this.r + other.r);
		// if(d < this.r + other.r){
		// 	return true;
		// } else {
		// 	return false;
		// }

	}

	changeColor(bright){
		this.brightness = bright;
	}

	contains(px,py){
		let d = dist(px,py,this.x,this.y);
		if(d  < this.r){
			return true;
		} else {
			return false;
		}
	}

	move(){
		this.x = this.x + random(-6,6);
		this.y = this.y + random(-6,6);
	}

	show(){
		stroke(255);
		strokeWeight(4);
		fill(this.brightness,125);
		ellipse(this.x,this.y,this.r *2);
	}
}
