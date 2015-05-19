$(document).ready(function() {

  $('.portfolio-works').mixItUp();

  $('.portfolio li').click(function() {
    $('.portfolio li').removeClass('portfolio-active');
    $(this).addClass('portfolio-active');
  });


});