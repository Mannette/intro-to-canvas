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

  ////////////////
  /// SEQUENCE ///
  ////////////////

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

// function to determine fibonacci sequence
function fibSequence (x) {
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return fibSequence(x - 1) + fibSequence(x - 2);
  }
}

// draws fibonacci sequence
function drawFibonacci () {
  for (rowNumber = 0; rowNumber < 15; rowNumber++) {
    rowLength = fibSequence(rowNumber);
    drawRow(rowNumber, rowLength, getRandomColor());
  }
}

  ////////////////////
  /// END SEQUENCE ///
  ////////////////////

  ////////////////////////
  /// FIBONACCI SPIRAL ///
  ////////////////////////

function fibSpiral () {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
  context.fillStyle = '#000000'

  // define number of circles
  var circles = 100;

  // define golden ratio and angle
  var phi = Math.sqrt(5) / 2 - 1;
  var goldenAng = phi * 2 * Math.PI;

  // define central coordinates
  var centerX = size.x / 2;
  var centerY = size.y / 2;
  var outerRadius = size.x * 0.45;
  // var angleInc = (2 + (frameNumber) / 12) * Math.PI / 180;

  var smRadius = 2;

  for (var i = 1; i <= circles; i++) {
    var ratio = i / circles;
    var angle = i * goldenAng;
    var spiralRadius = ratio * outerRadius;
    var x = centerX + Math.cos(angle) * spiralRadius;
    var y = centerY + Math.sin(angle) * spiralRadius;

    context.beginPath();
    context.arc(
      x,
      y,
      smRadius,
      0,
      2 * Math.PI,
      false
    );
    context.fill();
  }
}

  //////////////////
  /// END SPIRAL ///
  //////////////////

  ////////////////////////
  /// SUNFLOWER SPIRAL ///
  ////////////////////////

  function sunflower (frameNumber) {
    context.clearRect(0, 0, size.x, size.y);
    drawBorder();
    /**
     * will aid in determining area of circles
     * smaller numbers yields smaller circles as cirlces move inward
     */
    var deviation = 6 / 7;

    /**
     * aid in determining amount/size of circles
     * higher numbers yield smaller/more circles
     */
    var circles = 1000;

    // golden ratio
    var phi = (Math.sqrt(5) + 1) / 2 - 1;
    // golden angle
    var goldenAng = phi * 2 * Math.PI;

    // set max radius
    var lrgRadius = size.x * 0.45;
    // set area for large circles
    var lrgArea = Math.pow(lrgRadius, 2) * Math.PI;

    // define an average area
    var avgArea = lrgArea / circles;

    // define a min and max area
    var minArea = avgArea * (1 - deviation);
    var maxArea = avgArea * (1 + deviation);

    // define an area
    var area = 0;

    // factor to account for empty space
    var spaceFactor = 0.87;

    // define central x/y coordinates
    var centerX = size.x / 2;
    var centerY = size.y / 2;

    // define incrimentation for hue
    var hueIncr = frameNumber * 0.0002 + 0.1;
    var angleOffset = frameNumber * 0.01;

    // loop to create circles in spiral
    for (var i = 1; i <= circles; i++) {
      context.beginPath();

      // aids in determining decreasing circle area
      var ratio = i / circles;
      // define area for smallest circles
      var smArea = minArea + ratio * (maxArea - minArea);
      // define radius for smallest circles
      var smRadius = Math.sqrt(smArea / Math.PI);

      // determines area for all circles
      area += smArea;

      // defines radius for spiral
      var spiralRadius = Math.sqrt(area / Math.PI);
      // defines x/y coordinates for circles along a curve
      var x = centerX + Math.cos(i * goldenAng + angleOffset) * spiralRadius;
      var y = centerY + Math.sin(i * goldenAng + angleOffset) * spiralRadius;

      // set alternating hue
      var hue = hueIncr * i;
      hue -= Math.floor(hue);
      hue *= 360;

      context.fillStyle = 'hsl(' + hue + ', 80%, 50%)';

      // draw the circles
      context.arc(
        x,
        y,
        smRadius * spaceFactor,
        0,
        2 * Math.PI,
        false
      );
      // fill the circles
      context.fill();
      // setInterval(
      //   function () {
      //     context.
      //   },
      // 1000);
    }

  }

  /////////////////////
  /// END SUNFLOWER ///
  /////////////////////

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
var spiralButton = document.getElementById('fibSpiral');
var sunflowerButton = document.getElementById('sunflower');

// ----------------- //
// ** END BUTTONS ** //
// ----------------- //

// ------------------- //
// BUTTON CLICK EVENTS //
// ------------------- //

// randomly generated coordinates and size
// must fire on each click
var randomX, randomY, randomWidth, randomHeight;

// creates red rectangle
redButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'red';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

// creates green rectangle
greenButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'green';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

// creates blue rectangle
blueButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'blue';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

// creates orange rectangle
orangeButton.onclick = function () {
  randomX = Math.floor(Math.random() * size.x);
  randomY = Math.floor(Math.random() * size.y);
  randomWidth = Math.floor(Math.random() * (size.x / 2));
  randomHeight = Math.floor(Math.random() * (size.y / 2));

  context.fillStyle = 'orange';
  context.fillRect(randomX, randomY, randomWidth, randomHeight);
};

// randomly creates cirlces/rectangles
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

// fibonacci sequence
fibButton.onclick = function () {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
  drawFibonacci();
};

// fibonacci spiral
spiralButton.onclick = function () {
  console.log('test')
  fibSpiral();
};

// fibonacci spiral in nature
sunflowerButton.onclick = function () {
  sunflower(144);
};

// clear canvas
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
