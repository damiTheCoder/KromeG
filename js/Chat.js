

// Javascript code for the Chatting system for players



var chatBtn = document.getElementById('chat-btn');
var chatOffcanvas = document.querySelector('.chat-offcanvas');
var chatOffcanvasToggle = document.querySelector('.chat-offcanvas-toggle');
var chatOffcanvasCancel = document.querySelector('.chat-offcanvas-cancel');



chatOffcanvasToggle.addEventListener('click', function() {
    chatOffcanvas.classList.toggle('active');
});

chatOffcanvasCancel.addEventListener('click', function() {
    chatOffcanvas.classList.remove('active');
});



// drop down options for the game
// JavaScript code
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(accordion) {
  const button = accordion.querySelector(".accordion-button");
  const content = accordion.querySelector(".accordion-content");

  button.addEventListener("click", function() {
    accordion.classList.toggle("active");
  });
});
