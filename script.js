var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg = document.getElementById("bg");
var body = document.querySelector("body");
// setGradient();
bg.textContent = window.getComputedStyle(body).getPropertyValue("background-image");
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient(){
	document.getElementsByTagName("body")[0].style.background = "linear-gradient(to right, " 
	+ color1.value + ", "
	+ color2.value + ")";
	bg.textContent = body.style.background + ";";
}