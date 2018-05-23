
$('.port-item').click(function(){
  $('.collapse').toggle('hide')
})
var clicked = false;
$('#home').click(function(){
  if(clicked) {
     $(this).css('background-color', '#428bca')
     $('.home').css('color', '#fff')
     clicked = false;
  } else {
    $(this).css('background-color', '#333')
    $('.home').css('color', '#428bca')
    clicked = true;
  }
 
})




