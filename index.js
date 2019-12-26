/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(stringTime) {
  var timeArray = stringTime.split(":");
  var hour = parseInt(timeArray[0]);
  var minutes = parseInt(timeArray[1]);
}


/* Write your implementation of displayMessage() */
