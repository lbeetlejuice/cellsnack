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

  intersects(other){
    let d = dist(this.x, this.y, other.x,other.y);
    return (d < this.r + other.r);
  }

  changeRadius(radius){
    this.r = this.r + radius;
  }
}
