

var elements=document.querySelectorAll("li");

for (var i=0; i<elements.length; i++){
    elements[i].addEventListener("mouseover", function(){
    this.style.color="blue";
});
    elements[i].addEventListener("mouseout", function(){
    this.style.color="black";
});


    elements[i].addEventListener("click", function(){
        this.classList.toggle("benimClass");
    });


};



// elements.addEventListener("mouseover", function(){
//     this.style.color="blue";
// });
// elements.addEventListener("mouseout", function(){
//     this.style.color="black";
// });