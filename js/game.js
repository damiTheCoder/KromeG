// Array of box colors
const colors = [
    'white','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
    'none','none', 'none','none', 'none','none', 'none','none', 'none','none',
   
];

// Shuffle the colors using Fisher-Yates algorithm
for (let i = colors.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [colors[i], colors[j]] = [colors[j], colors[i]];
}

let openedBoxes = [];
let treasureBoxIndex = Math.floor(Math.random() * colors.length);

// Array of questions and answers
let questions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Jupiter', 'Mars', 'Saturn', 'Neptune'],
        answer: 'Jupiter'
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Au', 'Gd', 'Ag'],
        answer: 'Au'
    },
    // Add more questions here...
];

let currentQuestionIndex = 0;

// Create the game board
const gameBoard = document.getElementById('game-board');

for (let i = 0; i < colors.length; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundColor = colors[i];
    box.addEventListener('click', handleClick);

    if (i === treasureBoxIndex) {
        box.dataset.treasure = true;
    }

    gameBoard.appendChild(box);
}

// Handle box click event
function handleClick() {
    const box = this;

    // Check if the box has already been opened
    if (openedBoxes.includes(box)) {
        return;
    }

    // Check if a question needs to be answered
    if (currentQuestionIndex >= questions.length) {
        // Shuffle the questions
        questions = shuffleArray(questions);
        currentQuestionIndex = 0;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const answer = promptWithOptions(currentQuestion.question, currentQuestion.options);

    if (answer && answer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        alert('Correct answer! Treasure not Found.');

        // Check if the box has the treasure
        if (box.dataset.treasure) {
            box.style.backgroundColor = 'yellow';
            const email = prompt('Congratulations! You found the treasure! Please enter your email:');
            if (email) {
                // Perform further actions with the email (e.g., store it, send it to a server, etc.)
                alert(`Thank you for providing your email. The Treasure code will be sent.
                use the code to claim the Treasure on the Treasure page: ${email}`);
            } else {
                alert('Email not provided. Treasure found, but email not collected.');
            }
        } else {
            // Change box color to green for correct answer
            box.style.backgroundColor = 'blueviolet';
        }

        // Add box to opened boxes
        openedBoxes.push(box);

        // Increment question index
        currentQuestionIndex++;
    } else {
        alert('Incorrect answer. Try again!');
    }
}

// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Prompt a question with multiple choice options
function promptWithOptions(question, options) {
    const formattedOptions = options.map((option, index) => `${index + 1}. ${option}`).join('\n');
    const answer = prompt(`${question}\n${formattedOptions}`);
    const optionIndex = parseInt(answer, 10);

    if (isNaN(optionIndex) || optionIndex < 1 || optionIndex > options.length) {
        return null;
    }

    return options[optionIndex - 1];
}







// ////////////////////////////////////////////////


// Javascript code for the Chatting system for players



var chatBtn = document.getElementById('chat-btn');
var chatOffcanvas = document.querySelector('.chat-offcanvas');
var chatOffcanvasToggle = document.querySelector('.chat-offcanvas-toggle');
var chatOffcanvasCancel = document.querySelector('.chat-offcanvas-cancel');

chatBtn.addEventListener('click', function() {
    var message = prompt('Click on the viewchat button to see your message (up to 9 words):');
    if (message && message.split(' ').length <= 9) {
        var messageElem = document.createElement('div');
        messageElem.classList.add('chat-message');
        messageElem.innerHTML = '<span class="username">You:</span> ' + message;

        // Add the message to the chat off-canvas body
        chatOffcanvas.appendChild(messageElem);
    } else {
        alert('Please dont let you sentence exceed  (up to 9 words).');
    }
});
setTimeout(() => {
    alertContainer.remove();
  }, 4000);

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

  
// Animation for all divs

// gggggggggggggggggggggggggggggggggggggggggg Desktop view for Everything gggggggggggggggggggggggggggggg


























// THE GAME DESIGN FOR WEB VIEW STARTS











