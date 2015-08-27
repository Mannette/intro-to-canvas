var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };

// draws border
function drawBorder () {
  context.strokeRect(0, 0, size.x, size.y);
}
drawBorder();

// creates circles
function circles () {
  var randomCenterX = Math.floor(Math.random() * size.x);
  var randomCenterY = Math.floor(Math.random() * size.y);
  var randomSize = Math.floor(Math.random() * 100);

  context.beginPath();
  context.arc(
    randomCenterX,
    randomCenterY,
    randomSize,
    0,
    2 * Math.PI
  );
  context.fillStyle = getRandomColor();
  context.fill();
}

// random color generator
function getRandomColor () {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// adds blue box in top left on single click
canvas.onclick = function () {
  context.fillStyle = 'blue';
  context.fillRect(0, 0, (size.x / 4), (size.y / 4));
};

// adds red box in bottom right corner
canvas.ondblclick = function () {
  context.fillStyle = 'red';
  context.fillRect((size.x / 1.34), (size.y / 1.34), (size.x / 4), (size.y / 4));
};

// ------- //
// BUTTONS //
// ------- //
var redButton = document.getElementById('red');
var greenButton = document.getElementById('green');
var blueButton = document.getElementById('blue');
var orangeButton = document.getElementById('orange');
var clearButton = document.getElementById('clear');
var randomButton = document.getElementById('random');
// ----------------- //
// ** END BUTTONS ** //
// ----------------- //

// ------------------- //
// BUTTON CLICK EVENTS //
// ------------------- //
// randomly generated coordinates and size
// must fire on each click
var randomX, randomY, randomWidth, randomHeight;

redButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'red';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

greenButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'green';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

blueButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'blue';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

orangeButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'orange';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

randomButton.onclick = function () {
  var shape = Math.floor(Math.random() * 2);
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = getRandomColor();
  if (shape === 1) {
    circles();
  } else {
    context.fillRect(randomX, randomY, randomWidth, randomHeight);
  }
};

clearButton.onclick = function () {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
};
// ---------------------- //
// ** END CLICK EVENTS ** //
// ---------------------- //
