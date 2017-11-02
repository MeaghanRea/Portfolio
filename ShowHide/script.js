$(document).ready(() => {
	$('.btn-hide').on('click', () => {
		$('.astronaut').fadeOut('slow', function() {
		});
	});
	$('.btn-show').on('click', () => {
		$('.astronaut').show();
	});
	$('.btn-toggle').on('click', () => {
		$('.astronaut').toggle();
	});
});