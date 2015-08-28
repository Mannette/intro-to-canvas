var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };
var pixelSize = canvas.width / 100;

// draws border
function drawBorder () {
  context.strokeRect(0, 0, size.x, size.y);
}
drawBorder();

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

// ------ //
// SHAPES //
// ------ //

// creates rectangles
function rectangles () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  // for (var i = 1; i > 0; i -= 0.1) {
  //   console.log(i);
  //   return i;
  // }

  context.fillStyle = getRandomColor();
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
}

// creates circles
function circles () {
  var randomCenterX = Math.floor(Math.random() * size.x);
  var randomCenterY = Math.floor(Math.random() * size.y);
  var randomSize = Math.floor(Math.random() * 100);

  context.beginPath();
  context.arc(
    randomCenterX, // x coordinate
    randomCenterY, // y coordinate
    randomSize, // radius
    0, //
    2 * Math.PI // radians
  );
  context.fillStyle = getRandomColor();
  context.fill();
}

// creates triangles
function triangles () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  var firstVrtxX = Math.floor(Math.random() * size.x);
  var firstVrtxY = Math.floor(Math.random() * size.y);
  var secondVrtxX = Math.floor(Math.random() * size.x);
  var secondVrtxY = Math.floor(Math.random() * size.y);

  context.beginPath();
  context.moveTo(randomX, randomY);
  context.lineTo(firstVrtxX, firstVrtxY);
  context.lineTo(secondVrtxX, secondVrtxY);
  context.closePath();

  context.fillStyle = getRandomColor();
  context.fill();
}
// creates diamonds
function diamonds () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  var firstVrtxX = Math.floor(Math.random() * size.x);
  var firstVrtxY = Math.floor(Math.random() * size.y);
  var secondVrtxX = Math.floor(Math.random() * size.x);
  var secondVrtxY = Math.floor(Math.random() * size.y);
  var thirdVrtxX = Math.floor(Math.random() * size.x);
  var thirdVrtxY = Math.floor(Math.random() * size.y);

  context.beginPath();
  context.moveTo(randomX, randomY);
  context.lineTo(firstVrtxX, firstVrtxY);
  context.lineTo(secondVrtxX, secondVrtxY);
  context.lineTo(thirdVrtxX, thirdVrtxY);
  context.closePath();

  context.fillStyle = getRandomColor();
  context.fill();
}

// ---------------- //
// ** END SHAPES ** //
// ---------------- //

// ------------------- //
// FIBONACCI FUNCTIONS //
// ------------------- //

var rowNumber, rowLength;

// draws individual block
function drawPixel (x, y, color) {
  context.fillStyle = color;
  context.fillRect(
    x * pixelSize, // x coordinate
    y * pixelSize, // y coordinate
    pixelSize, // width
    pixelSize // height
  );
}

//
function drawRow (rowNumber, rowLength, color) {
  for (var i = 0; i < rowLength; i++) {
    drawPixel(rowNumber, i, color);
  }
}
function fibSequence (x) {
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return fibSequence(x - 1) + fibSequence(x - 2);
  }
}

//
function drawFibonacci () {
  for (rowNumber = 0; rowNumber < 15; rowNumber++) {
    rowLength = fibSequence(rowNumber);
    drawRow(rowNumber, rowLength, getRandomColor());
  }
}
// ------------------- //
// ** END FIBONACCI ** //
// ------------------- //

// ------- //
// BUTTONS //
// ------- //

var redButton = document.getElementById('red');
var greenButton = document.getElementById('green');
var blueButton = document.getElementById('blue');
var orangeButton = document.getElementById('orange');
var clearButton = document.getElementById('clear');
var randomButton = document.getElementById('random');
var fibButton = document.getElementById('fib');

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

  if (shape === 1) {
    circles();
  } else {
    rectangles();
  }
};

fibButton.onclick = function () {
  drawFibonacci();
};

clearButton.onclick = function () {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
};

// ---------------------- //
// ** END CLICK EVENTS ** //
// ---------------------- //

// ------------ //
// KEY BINDINGS //
// ------------ //

// r keycode = 82
// c keycode = 67
// t keycode = 84
// d keycode = 68
document.onkeydown = function (e) {
  e = e || window.event;
  switch (e.which || e.keyCode) {

    // draws rectangle
    case 82:
      rectangles();
      break;

    // draws circle
    case 67:
      circles();
      break;

    // draws triangle
    case 84:
      triangles();
      break;

    // draws diamond
    case 68:
      diamonds();
      break;

    default: return;
  }
  e.preventDefault();
};

// ---------------------- //
// ** END KEY BINDINGS ** //
// ---------------------- //
