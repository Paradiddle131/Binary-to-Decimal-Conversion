let num = "01111110";
let byte = [];
let decimalP;
let mytext;

function mousePressed(){
	for(let i = 0; i<byte.length; i++){
		byte[i].toggle(mouseX, mouseY);
	}
}

function setup() {
  createCanvas(400, 400);
	binaryToDecimal(num);
	mytext = createDiv('Click us!');
	decimalP = createDiv('');
	
	let w = width/8;
		for(let i = 0; i<8; i++){
			byte[i] = new Bit(w/2 + i*w,50,w-4);
			byte[i].setState(num.charAt(i));
	}
}

function draw() {
  background(50);
		num = '';
			for(let i = 0; i<byte.length; i++){
				byte[i].show();
				num += byte[i].state ? '1' : '0';
			}
	decimalP.html(binaryToDecimal(num));
var div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.color = "white";
div.location = 100,100;
div.innerHTML = "Hello";

document.getElementById("main");

var paragraph = document.createElement("P");
}



function binaryToDecimal(val){
	let sum = 0;
	for(let i = 0; i<val.length; i++){
		let bit = val.charAt(val.length-i-1);
		sum += parseInt(bit)*pow(2, i);
	}
	return sum;

}