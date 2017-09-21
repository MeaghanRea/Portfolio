$(document).ready(function() {
	$('#heart1').mouseenter(function() {
		alert('Don\'t tell my heart...');
	});
	$('#heart2').mouseenter(function() {
		alert('My achy, breaky heart...');
		$('#heart2').effect('pulsate', { times: 8 }, 1000);
	});
	$('#heart3').mouseenter(function() {
		alert('I just don\'t think he\'d understand...');
	});
	$('#heart4').mouseenter(function() {
		alert('And if you tell my heart, my achy, breaky heart...');
	});
	$('#heart5').mouseenter(function() {
		alert('He might blow up and kill this man. (wooooo-oo-oooooo!)');
		$('#heart5').effect('explode', {pieces: 400}, 1000);
		$('#heart5').fadeIn (2000);
	});
	$('#heart6').mouseenter(function() {
		alert('No hearts were achy, breaky\'d during the making of this exercise.');
		$('#heart6').effect('bounce', { times: 6 }, 500);
	});
	$('#heart7').mouseenter(function() {
		alert('Written by Donald L. Von Tress, the song was made popular in 1992 by Billy Ray Cyrus.');
	});
});






