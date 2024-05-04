/*var ilkElement = document.querySelector("li");*/
var Elementler = document.querySelectorAll("li");

for (var i = 0; i < Elementler.length; i++) {
	Elementler[i].addEventListener("mouseover",function(){
	this.style.color="blue";
	});

	Elementler[i].addEventListener("mouseout",function(){
	this.style.color="black";
	});

	Elementler[i].addEventListener("click",function(){
		this.classList.toggle("benimClass");
	});
};



/*
ilkElement.addEventListener("mouseover",function(){
	this.style.color="blue";
});

ilkElement.addEventListener("mouseout",function(){
	this.style.color="black";
});

*/