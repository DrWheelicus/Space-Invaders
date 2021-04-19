//By: Sonika 

//Retrieving the username  
var userName = cookie.get('userName');
if (!userName) {

  userName = prompt('Choose your username:');
  if (!userName) {
    alert('Invalid username!');
  } else {
    cookie.set('user', userName);
  }
}

var socket = io();

socket.on('count', function(data) {
  $('.userCount').html(data);
});

socket.on('message', function(data) {
  $('.chat').append('<p><strong>' + data.userName + '</strong>: ' + data.userMessage + '</p>');
});

$('form').submit(function (i) {
  i.preventDefault();

  // Retrieve the message from the user
  var userMessage = $(i.target).find('input').val();

    //Below we are sending the message
  socket.emit('message', {
    userName: cookie.get('user') || 'Anonymous',
    userMessage: userMessage
  });

  i.target.reset();
  $(i.target).find('input').focus();
});