$('a[href^="#"]').click(function(){
  var duration = 1000;
  var href= $(this).attr("href");
  var target = $(href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, duration, 'swing');
  return false;
});