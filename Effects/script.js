$(document).ready(() => {

  /* hide, show, toggle */
  $('.btn-hide').on('click', () => {
    $('.img-space-for-sale').hide();
  });
  
  $('.btn-show').on('click', () => {
    $('.img-space-for-sale').show();
  });
  
  $('.btn-toggle').on('click', () => {
    $('.img-space-for-sale').toggle();
  });
  

  /* fade out, fade in, fade toggle */
  $('.btn-fade-out').on('click', () => {
    $('.img-black-hole').fadeOut(500);
  });
  
  $('.btn-fade-in').on('click', () => {
    $('.img-black-hole').fadeIn(4000);
  });
  
  $('.btn-toggle-fade').on('click', () => {
    $('.img-black-hole').fadeToggle(5000);
  });
  
  /* slide up, slide down, slide toggle */
  $('.btn-slide-up').on('click', () => {
		$('.man-on-the-moon').slideUp(400);
  });
  
  $('.btn-slide-down').on('click', () => {
    $('.man-on-the-moon').slideDown('slow');
  });
  
  $('.btn-slide-toggle').on('click', () => {
    $('.man-on-the-moon').slideToggle('very slow');
  });
  
});