// This is where you can add JavaScript code to make your website interactive.
// For example, you can handle form submissions, create animations, etc.

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Here you can add code to process the form data, like sending an email or saving to a database
  // For demo purposes, let's just log the data to the console
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);
});