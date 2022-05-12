$('#drawer-open-btn').on('click', function(){
  $('#drawer-open-btn').removeClass('show');
  $("#page-mask").addClass('show');
  $("#page-drawer").addClass('show');
  $("#drawer-close-btn").addClass('show');
});

$('#drawer-close-btn').on('click', function(){
  $('#drawer-close-btn').removeClass('show');
  $('#page-mask').removeClass('show');
  $("#page-drawer").removeClass('show');
  $('#drawer-open-btn').addClass('show');
});