// Get the box element
const box = document.getElementById("box");

// Set the initial position of the box to the middle of the screen
let boxTop = (window.innerHeight / 2) - (box.offsetHeight / 2);
let boxLeft = (window.innerWidth / 2) - (box.offsetWidth / 2);

// Update the position of the box
box.style.top = boxTop + "px";
box.style.left = boxLeft + "px";

// Define the function to move the box
function moveBox(event) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  switch (event.keyCode) {
    case 37: // Left arrow key
      if (boxLeft > 0) {
        boxLeft -= 12;
      }
      break;
    case 38: // Up arrow key
      if (boxTop > 0) {
        boxTop -= 12;
      }
      break;
    case 39: // Right arrow key
      if (boxLeft + box.offsetWidth < viewportWidth) {
        boxLeft += 12;
      }
      break;
    case 40: // Down arrow key
      if (boxTop + box.offsetHeight < viewportHeight) {
        boxTop += 12;
      }
      break;
  }
  
  // Update the position of the box
  box.style.top = boxTop + "px";
  box.style.left = boxLeft + "px";
}

// Add an event listener to the window object to listen for arrow key presses
window.addEventListener("keydown", moveBox);


//FIENDE
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const player = document.getElementById("box");
const enemy = document.getElementById("enemy");
const scoreboard = document.getElementById("score");
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

let score = 0;

function moveEnemy() {
  // Generate a new position for the enemy
  let newEnemyTop = getRandomNumber(0, viewportHeight - enemy.offsetHeight);
  let newEnemyLeft = getRandomNumber(0, viewportWidth - enemy.offsetWidth);

  // Check if the enemy and the player collide
  const playerRect = player.getBoundingClientRect();
  const enemyRect = enemy.getBoundingClientRect();
  const collision = !(playerRect.right < enemyRect.left || 
                      playerRect.left > enemyRect.right || 
                      playerRect.bottom < enemyRect.top || 
                      playerRect.top > enemyRect.bottom);

  // Reduce the score by 10 points if the enemy and the player collide
  if (collision) {
    score -= 10;
    scoreboard.textContent = score - 10;
  }

  // Move the enemy to the new position over 1 second using CSS transitions
  enemy.style.transition = "top 1s linear, left 1s linear";
  enemy.style.top = newEnemyTop + "px";
  enemy.style.left = newEnemyLeft + "px";
}

// Move the enemy smoothly to a new position every second
setInterval(moveEnemy, 1000);

// Update the player's score every second
setInterval(function () {
  score += 1;
  scoreboard.textContent = score;
}, 1000);

function growEnemy() {
  const currentHeight = parseInt(enemy.offsetHeight);
  const currentWidth = parseInt(enemy.offsetWidth);
  const newHeight = currentHeight * 1.1;
  const newWidth = currentWidth * 1.1;

  enemy.style.height = newHeight + "px";
  enemy.style.width = newWidth + "px";
}

// Increase the size of the enemy by 10% in every direction every minute
setInterval(growEnemy, 30000);



