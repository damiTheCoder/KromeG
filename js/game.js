 // Initialize the game for both web and mobile views
 initializeGame('web');
 initializeGame('mobile');

 function initializeGame(view) {
     const numBoxes = 100;
     const gameBoard = document.getElementById(view + '-game-board');
     gameBoard.innerHTML = ''; // Clear previous boxes

     // Generate colors array with the specified number of boxes
     const colors = Array(numBoxes).fill('none');
     colors[0] = 'white'; // First box is white
     colors[Math.floor(Math.random() * colors.length)] = 'treasure'; // Random box for treasure

     // Shuffle the colors using Fisher-Yates algorithm
     for (let i = colors.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [colors[i], colors[j]] = [colors[j], colors[i]];
     }

     let openedBoxes = [];

     // Create the game board
     for (let i = 0; i < colors.length; i++) {
         const box = document.createElement('div');
         box.className = 'box';
         box.dataset.clicks = '0'; // Initialize click counter
         box.addEventListener('click', handleClick);

         if (colors[i] === 'treasure') {
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

         // Check if the box has the treasure
         if (box.dataset.treasure) {
             box.style.backgroundColor = 'yellow';
             showModal('Congratulations! You found the treasure! Please enter your email:', true);
         } else {
             // Change box color to blueviolet for correct action
             box.style.backgroundColor = 'blueviolet';
             showModal('No treasure in this box. Keep trying!');
         }

         // Add box to opened boxes
         openedBoxes.push(box);
     }
 }

 function showModal(message, promptForEmail = false) {
     const modal = document.getElementById('myModal');
     const modalMessage = document.getElementById('modal-message');
     modalMessage.innerHTML = message;
     modal.style.display = 'flex';

     if (promptForEmail) {
         setTimeout(() => {
             const email = prompt('Please enter your email:');
             if (email) {
                 alert(`Thank you for providing your email. The Treasure code will be sent. Use the code to claim the Treasure on the Treasure page: ${email}`);
             } else {
                 alert('Email not provided. Treasure found, but email not collected.');
             }
         }, 1000); // Delay prompt to ensure modal is shown first
     }
 }

 function closeModal() {
     const modal = document.getElementById('myModal');
     modal.style.display = 'none';
 }