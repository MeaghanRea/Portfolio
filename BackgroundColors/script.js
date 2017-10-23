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
    $(".btn").mouseover(function(){
    	$(this).css("background", "black");
    	$(this).css("color", "white");
	});
	$(".btn").mouseout(function(){
		$(this).css("background", "white");
		$(this).css("color", "black");
	});
});


/* facebook share link */
(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
