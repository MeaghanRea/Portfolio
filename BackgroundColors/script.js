$(document).ready(function(){
    $("#row-red").mouseover(function(){
        $(this).css("background", "red");
    });
    $("#row-red").mouseout(function(){
        $(this).css("background", "white");
    });
    $("#row-blue").mouseover(function(){
        $(this).css("background", "blue");
    });
    $("#row-blue").mouseout(function(){
        $(this).css("background", "white");
    });
    $("#row-green").mouseover(function(){
        $(this).css("background", "green");
    });
    $("#row-green").mouseout(function(){
        $(this).css("background", "white");
    });
    $(".button").mouseover(function(){
    	$(this).css("background", "black");
    	$(this).css("color", "white");
	});
	$(".button").mouseout(function(){
		$(this).css("background", "white");
		$(this).css("color", "black");
	});
});
