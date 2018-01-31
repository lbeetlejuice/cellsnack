class Bubble {
	constructor(x,y,r = 50){
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
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
		fill(this.brightness,125);
		ellipse(this.x,this.y,this.r *2);
	}
}
