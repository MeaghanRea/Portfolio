$(document).ready(function() {
	$('.triangle-down').mouseenter(function() {
		$(this).fadeOut (2000);
		$(this).fadeIn (2000);
	});
	$('.triangle-up').mouseenter(function() {
		$(this).fadeOut (1000);
		$(this).fadeIn (1000);
	});
	$('.triangle2-up').mouseenter(function() {
		$(this).fadeOut (500);
		$(this).fadeIn (500);
	});
	$('.triangle2-down').mouseenter(function() {
		$(this).fadeOut (1500);
		$(this).fadeIn (1500);
	});
});

(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
