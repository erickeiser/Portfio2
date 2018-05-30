

$('#home').click(function(){
	$('#home').css('background','#428bca')
	$('#home i').css('color','#fff')
	$('#home-content').toggle('slow')
  $('#home-content').css('display', 'block');
	$('#resume').css('background', '#333')
	$('#resume i').css('color','#007e33')
	$('#resume-content').css('display','none');
	$('.gallery_wrapper').css('display','none');
	$('#work').css('background','#333')
	$('#work i').css('color','#ff8800')
	$('#contact-content').css('display','none')
	$('#contact').css('background','#333')
	$('#contact i').css('color','#d3d3d3')
	$('#footer').css('display','block')
})
 
$('#resume').click(function(){
	$('#resume-content').toggle('slow')
  $('#resume-content').css('display','block')
  $('#resume').css('background', '#007e33')
  $('#resume i').css('color', 'white')
	$('#home').css('background', '#333')
	$('#home i').css('color','#428bca')
	$('#home-content').css('display','none')
	$('.gallery_wrapper').css('display','none')
	$('#work').css('background','#333')
	$('#work i').css('color','#ff8800')
	$('#contact').css('background','#333')
	$('#contact i').css('color','#d3d3d3')
	$('#contact-content').css('display','none')
	$('#footer').css('display','block');

})

$('#work').click(function(){
	$('.gallery_wrapper').toggle('slow')
  $('.gallery_wrapper').css('display','block')
	$('#work').css('background','#ff8800')
	$('#work i').css('color','#fff')
  $('#resume-content').css('display','none')
  $('#resume').css('background', '#333')
  $('#resume i').css('color', '#007e33')
	$('#home').css('background', '#333')
	$('#home i').css('color','#428bca')
	$('#home-content').css('display','none')
	$('#contact-content').css('display','none')
	$('#contact').css('background','#333')
	$('#contact i').css('color','#d3d3d3')
	$('#footer').css('display','block')
})
	
	
$('#contact').click(function(){
$('#contact-content').toggle('slow')
$('#contact-content').css('display','block')
$('#contact').css('background','#d3d3d3')
$('#contact i').css('color','#fff')

$('#home-content').css('display','none')
$('#home i').css('color','#428bca')
$('#home').css('background', '#333')
$('.gallery_wrapper').css('display','none')
$('#work-content').css('display','none')
	$('#work').css('background','#333')
	$('#work i').css('color','#ff8800')
  $('#resume-content').css('display','none')
  $('#resume').css('background', '#333')
  $('#resume i').css('color', '#007e33')
	
	$('#footer').css('display','block')
})

	


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCXaiP9XVxNEice5ol8MoArKkF-Pxppvds",
    authDomain: "contact-form-f5a8a.firebaseapp.com",
    databaseURL: "https://contact-form-f5a8a.firebaseio.com",
    projectId: "contact-form-f5a8a",
    storageBucket: "",
    messagingSenderId: "132737329912"
  };
  firebase.initializeApp(config);

  //REFERENCE MESSAGES COLLECTION
  var messagesRef = firebase.database().ref('messages');



// EVENT LISTENER FOR FORM SUBMIT
document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit Form
function submitForm(e) {
  e.preventDefault();

  // GET values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  var form = document.getElementById('contactForm');
  
  //Save Messages
  saveMessages(name, company, email, phone, message);

  //Show Alert
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  //Form reset 
form.reset();

}





// function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
} 

// Save messages to firebase
function saveMessages(name, company, email, phone, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  })
}