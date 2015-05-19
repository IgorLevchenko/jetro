var $container = $("#slider")
.after('<div id="nav">')
.cycle({
  fx: 'fade',
  speed: 500,
  timeout: 0,
  prev: '.prev',
  next: '.next',
  pager:  '#nav'
});

$(function($) {
  $("#nav a").addClass(function(index) {
    return "preview" + (index + 1);
  });
} ) (jQuery);




