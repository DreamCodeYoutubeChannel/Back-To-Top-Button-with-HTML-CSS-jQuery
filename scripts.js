$(document).ready(() => {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      $('.btn').fadeIn(250);
    } else {
      $('.btn').fadeOut(250);
    }
  });

  $('.btn').click(() => {
    $('html,body').animate(
      {scrollTop:0}, 400
    );
  });
});
