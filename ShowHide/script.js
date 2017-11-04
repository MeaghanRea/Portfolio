// $(document).ready(() => {
// 	$('.btn-hide').on('click', () => {
// 		$('.astronaut').fadeOut('slow');
// 	});
// 	$('.btn-show').on('click', () => {
// 		$('.astronaut').fadeIn('fast');
// 	});
// 	$('.btn-toggle').on('click', () => {
// 		$('.astronaut').toggle();
// 	});
// });

$(document).ready(function() {
	$('btn-hide').click(function(){
		$('.astronaut').fadeOut()
	});
});

// $(document).ready(function(){
//     $(".btn1").click(function(){
//         $("p").fadeOut()
//     });
//     $(".btn2").click(function(){
//         $("p").fadeIn();
//     });
// });