class Bit{
	constructor(x,y,d){
		this.x = x;
		this.y = y;
		this.diameter = d;
		this.state = false; // on or off
	}
	
	setState(state){
		this.state = Boolean(parseInt(state));
	}
	
	toggle(x,y) { // if it contains a point
		let d = dist(x,y,this.x,this.y);
		if(d<this.diameter/2){
			this.state = !this.state;
		}
	}
	
	show(){
		stroke(0); // white outline
		fill(255*this.state); // white if it's on
		ellipse(this.x, this.y, this.diameter);
	}
}