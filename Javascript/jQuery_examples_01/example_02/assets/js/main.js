$('#drawer-open-btn').on('click', function(){
  $('#drawer-open-btn').removeClass('show');
  $('#drawer-open-btn').removeClass('on');

  $("#page-mask").addClass('on');

  setTimeout(function(){
    $("#page-mask").addClass('show');
  },10);
  
  $("#page-drawer").addClass('on');

  setTimeout(function(){
    $("#page-drawer").addClass('show');
  },10);
  
  $("#drawer-close-btn").addClass('on');
  $("#drawer-close-btn").addClass('show');

});

$('#drawer-close-btn').on('click', function(){
  $('#drawer-close-btn').removeClass('show');
  $('#drawer-close-btn').removeClass('on');

  $("#page-mask").removeClass('show');

  setTimeout(function(){
    $("#page-mask").removeClass('on');
  },300);
  
  $("#page-drawer").removeClass('show');
  setTimeout(function(){
    $("#page-drawer").removeClass('on');
  },300);

  $('#drawer-open-btn').addClass('on');
  $('#drawer-open-btn').addClass('show');
});