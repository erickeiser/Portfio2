

$('#home').click(function(){
  $('#home').css('background','#428bca')
	$('#home-content').toggle('slow')
  $('#home-content').css('display', 'block');
  $('#resume',).css('background', '#333')
	$('#resume-content').css('display','none');
	$('#work-content').css('display','none');
	$('#contact-content').css('display','none');
})
 
$('#resume').click(function(){
	$('#resume-content').toggle('slow')
  $('#resume-content').css('display','block')
  $('#resume').css('background', '#007e33')
  $('#resume i').css('color', 'white')
  $('#home').css('background', '#333')
	$('#home-content').css('display','none')
	$('#work-content').css('display','none')
	$('contact-content').css('dsiplay','none')
})

$('#work').click(function(){
	$('#work-content').toggle('slow')
  $('#work-content').css('display','block')
  $('#work').css('background','yellow')

	$('#resume-content').css('display','none')
	$('#contact-content').css('display','none')

})

$('#contact-content').click(function(){
	$('#contact-content').toggle('slow')
	$('#content-content').css('display','display')
	$('#home-content').css('display','none')
	$('#resume-content').css('display','none')
})










 


