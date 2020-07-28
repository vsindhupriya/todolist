$("ul").on("click","li",function(){
	//$(this).css("color","grey");
	//$(this).css("text-decoration","line-through");


	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color:"black",
			textDecoration: "none"
		});

	}else{
		$(this).css({
			color:"grey",
			textDecoration: "line-through"
		});
	}*/


	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").keypress(function(event){
	if(event.which === 13){
	var todotext = $(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fas fa-trash'></i></span>  " + todotext + "</li>");
	}
});


$("#toggle-form").click(function(){
	$("input").fadeToggle();
})
