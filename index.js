// PLAYER BOX

// Get the box element
const box = document.getElementById("box");

// Set the initial position of the box to the middle of the screen
let boxTop = (window.innerHeight / 2) - (box.offsetHeight / 2); // Divide the screen size to find center
let boxLeft = (window.innerWidth / 2) - (box.offsetWidth / 2); // Divide the screen size to find center

// Update the position of the box
box.style.top = boxTop + "px";
box.style.left = boxLeft + "px";

// Define the function to move the box
function moveBox(event) {
  const viewportWidth = window.innerWidth; // get the width of the browser window
  const viewportHeight = window.innerHeight; // get the height of the browser window

  switch (event.keyCode) { // check which arrow key was pressed
    case 37: // Left arrow key
      if (boxLeft > 0) { // check if the box can still move left
        boxLeft -= 12; // move the box left by 12 pixels
      }
      break;
    case 38: // Up arrow key
      if (boxTop > 0) { // check if the box can still move up
        boxTop -= 12; // move the box up by 12 pixels
      }
      break;
    case 39: // Right arrow key
      if (boxLeft + box.offsetWidth < viewportWidth) { // check if the box can still move right
        boxLeft += 12; // move the box right by 12 pixels
      }
      break;
    case 40: // Down arrow key
      if (boxTop + box.offsetHeight < viewportHeight) { // check if the box can still move down
        boxTop += 12; // move the box down by 12 pixels
      }
      break;
  }

  // Update the position of the box
  box.style.top = boxTop + "px"; 
  box.style.left = boxLeft + "px";
}

// Add an event listener to the window object to listen for arrow key presses
window.addEventListener("keydown", moveBox);



//ENEMY BOX

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // returns a random integer between min and max (inclusive)
}

// Get elements
const player = document.getElementById("box"); // get the player element by its ID
const enemy = document.getElementById("enemy"); // get the enemy element by its ID
const scoreboard = document.getElementById("score"); // get the scoreboard element by its ID
const viewportWidth = window.innerWidth; // get the width of the browser window
const viewportHeight = window.innerHeight; // get the height of the browser window

// Define the score to start at 0 
let score = 0;

function moveEnemy() {
  // Generate a new position for the enemy
  let newEnemyTop = getRandomNumber(0, viewportHeight - enemy.offsetHeight); // generate a random top position for the enemy within the viewport
  let newEnemyLeft = getRandomNumber(0, viewportWidth - enemy.offsetWidth); // generate a random left position for the enemy within the viewport

  // Check if the enemy and the player collide
  const playerRect = player.getBoundingClientRect(); // get the bounding rectangle of the player element
  const enemyRect = enemy.getBoundingClientRect(); // get the bounding rectangle of the enemy element
  const collision = !(playerRect.right < enemyRect.left ||
    playerRect.left > enemyRect.right ||
    playerRect.bottom < enemyRect.top ||
    playerRect.top > enemyRect.bottom); // check if the rectangles intersect

  // Reduce the score by 10 points if the enemy and the player collide
  if (collision) {
    score -= 10; // subtract 10 points from the score
    scoreboard.textContent = score - 10; // update the scoreboard element with the new score
  }

  // Move the enemy to the new position over 1 second using CSS transitions
  enemy.style.transition = "top 1s linear, left 1s linear"; // set a transition for the top and left CSS properties of the enemy element
  enemy.style.top = newEnemyTop + "px"; // move the enemy to the new top position
  enemy.style.left = newEnemyLeft + "px"; // move the enemy to the new left position
}


// Move the enemy smoothly to a new position every second
setInterval(moveEnemy, 1000);

// Update the player's score every second
setInterval(function () {
  score += 1;
  scoreboard.textContent = score;
}, 1000);

// Make the enemy grow function to 10% growth
// Get the current height and width of the enemy
const currentHeight = parseInt(enemy.offsetHeight);
const currentWidth = parseInt(enemy.offsetWidth);

// Calculate the new height and width by multiplying the current values by 1.1
const newHeight = currentHeight * 1.1;
const newWidth = currentWidth * 1.1;

// Set the new height and width on the enemy element using CSS styles
enemy.style.height = newHeight + "px";
enemy.style.width = newWidth + "px";


// Increase the size of the enemy by 10% in every direction every 30 seconds
setInterval(growEnemy, 30000);