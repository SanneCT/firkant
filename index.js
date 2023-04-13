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
        boxLeft -= 10;
      }
      break;
    case 38: // Up arrow key
      if (boxTop > 0) {
        boxTop -= 10;
      }
      break;
    case 39: // Right arrow key
      if (boxLeft + box.offsetWidth < viewportWidth) {
        boxLeft += 10;
      }
      break;
    case 40: // Down arrow key
      if (boxTop + box.offsetHeight < viewportHeight) {
        boxTop += 10;
      }
      break;
  }
  
  // Update the position of the box
  box.style.top = boxTop + "px";
  box.style.left = boxLeft + "px";
}

// Add an event listener to the window object to listen for arrow key presses
window.addEventListener("keydown", moveBox);







