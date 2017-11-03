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

