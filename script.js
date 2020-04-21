var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.getElementById("random");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function getRandomNumber() {
	var x = Math.floor( Math.random() * 256 );
	return x;
};

function setRandomColor() {
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ getRandomNumber() 
	+ ", " 
	+  getRandomNumber() 
	+ ", " 
	+ getRandomNumber() 
	+ ")"
	+ ", " 
	+ "rgb(" 
	+ getRandomNumber() 
	+ ", " 
	+  getRandomNumber() 
	+ ", " 
	+ getRandomNumber() 
	+ ")"
	+ ")";
	css.textContent = body.style.background + ";";	
};

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomColor.addEventListener("click", setRandomColor);


