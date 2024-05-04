$("ul").on("click","li",function(){
    $(this).toggleClass("tamamlanmis");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='Text']").keypress(function(event){

    if(event.which === 13){
    var yeniItem = $(this).val();
    console.log(yeniItem);
    $(this).val("");
    $("ul").append("<li><span><i class='fa-solid fa-scissors'> </i></span>"+" "+ yeniItem+"</li>")
    }
});

$(".fa-pen-to-square").click(function(){
   $("input[type='text']").fadeToggle();
});