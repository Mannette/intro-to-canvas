var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };
var pixelSize = 5;
var incriment = 0;

// draws border
function drawBorder () {
  context.strokeRect(0, 0, canvas.width, canvas.height);
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

  //////////////////////
  /// FIBONACCI DOTS ///
  //////////////////////
function fibDots () {
  context.fillStyle = "#000000";
  var phi = (Math.sqrt(5) +1) / 2;
  var goldenAng = phi * 2 * Math.PI;
  var circles = 500;

  var largeRad = size.x * 0.45;
  var smallRad = 2;
  var centerX = size.x / 2;
  var centerY = size.y / 2;

  for (var i = 0; i < circles; i++) {
    context.beginPath();
    var ratio = i / circles;
    var angle = i * goldenAng;
    var spiralRad = ratio * largeRad;
    var x = centerX + Math.cos(angle) * spiralRad;
    var y = centerY + Math.sin(angle) * spiralRad;
    context.arc(
      x,
      y,
      smallRad,
      0,
      2 * Math.PI
    );
    context.fill();
  }
}
  ////////////////
  /// END DOTS ///
  ////////////////

  ////////////////////
  /// TORUS DESIGN ///
  ////////////////////

function torus () {
  // context.clearRect(0, 0, size.x, size.y);
  drawBorder();
  context.strokeStyle = '#000000';
  context.fillStyle = '#000000';

  // define number of circles
  var circles = 500;

  // define golden ratio and angle
  var phi = (Math.sqrt(5) + 1) / 2;
  // var phi = Math.sqrt(5) / 2 - 1;
  var goldenAng = phi * 2 * Math.PI;

  // define central coordinates
  var centerX = size.x / 2;
  var centerY = size.y / 2;
  var outerRadius = size.x * 0.45;

  var toIncrease = 0;
  var test = setInterval(
              loop,
              82
            );

  function loop (i) {
    i = toIncrease++;

    var startPoint = findCoordinates(circles, i);
    var endPoint = findCoordinates(circles, i+1);


    context.beginPath();
    context.moveTo(startPoint.x, startPoint.y);

    context.lineTo(endPoint.x, endPoint.y);
    context.stroke();
    if (i > circles) {
      clearInterval(test);
    }
  }
}

function findCoordinates (circles, i) {
  // define golden ratio and angle
  var phi = (Math.sqrt(5) + 1) / 2;
  var goldenAng = phi * 2 * Math.PI;
  // define central coordinates
  var centerX = size.x / 2;
  var centerY = size.y / 2;
  var outerRadius = size.x * 0.45;

  var ratio = i / circles;
  var angle = i * goldenAng;
  var spiralRadius = ratio * outerRadius;
  var x = centerX + Math.cos(angle) * spiralRadius;
  var y = centerY + Math.sin(angle) * spiralRadius;

  var coordinates = {x: x, y: y};
  return coordinates;
}

  /////////////////
  /// END TORUS ///
  /////////////////

  ////////////////////////
  /// FIBONACCI SPIRAL ///
  ////////////////////////
function fibSpiral (frameNumber) {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();


  fibSquares();
  spirals();
}

function fibSquares () {
  var phi = (Math.sqrt(5) + 1) / 2;
  context.lineWidth = '1';
  context.strokeStyle = '#000000';

  context.strokeRect(
    (size.x / 2) + pixelSize,
    size.y / 2,
    pixelSize / phi,
    pixelSize
  );
  context.strokeRect(
    size.x / 2,
    size.y / 2,
    pixelSize,
    pixelSize
  );
  context.strokeRect(
    size.x / 2,
    (size.y / 2) + pixelSize,
    pixelSize * phi,
    pixelSize * phi
  );
  context.strokeRect(
    ((size.x / 2) + pixelSize + (pixelSize / phi)),
    size.y / 2,
    pixelSize * Math.pow(phi, 2),
    pixelSize * Math.pow(phi, 2)
  );
  context.strokeRect(
    size.x / 2,
    (size.y / 2) - (pixelSize * Math.pow(phi, 3)),
    pixelSize * Math.pow(phi, 3),
    pixelSize * Math.pow(phi, 3)
  );
  context.strokeRect(
    (size.x / 2) - pixelSize * Math.pow(phi, 4),
    (size.y / 2) - pixelSize * Math.pow(phi, 3),
    pixelSize * Math.pow(phi, 4),
    pixelSize * Math.pow(phi, 4)
  );
  context.strokeRect(
    (size.x / 2) - (pixelSize * Math.pow(phi, 4)),
    (size.y / 2) + pixelSize * Math.pow(phi, 2),
    pixelSize * Math.pow(phi, 5),
    pixelSize * Math.pow(phi, 5)
  );
  context.strokeRect(
    (size.x / 2) + pixelSize * Math.pow(phi, 3),
    (size.y / 2) - pixelSize * Math.pow(phi, 3),
    pixelSize * Math.pow(phi, 6),
    pixelSize * Math.pow(phi, 6)
  );
  context.strokeRect(
    (size.x / 2) - pixelSize * Math.pow(phi, 4),
    (size.y / 2) - (pixelSize * Math.pow(phi, 7) + pixelSize * Math.pow(phi, 3)),
    pixelSize * Math.pow(phi, 7),
    pixelSize * Math.pow(phi, 7)
  );
  context.strokeRect(
    (size.x / 2) - (pixelSize * Math.pow(phi, 4) + pixelSize * Math.pow(phi, 8)),
    (size.y / 2) - (pixelSize * Math.pow(phi, 3) + pixelSize * Math.pow(phi, 7)),
    pixelSize * Math.pow(phi, 8),
    pixelSize * Math.pow(phi, 8)
  );
  context.strokeRect(
    (size.x / 2) - (pixelSize * Math.pow(phi, 4) + pixelSize * Math.pow(phi, 8)),
    (size.y / 2) + (pixelSize * Math.pow(phi, 2) + pixelSize * Math.pow(phi, 5)),
    pixelSize * Math.pow(phi, 9),
    pixelSize * Math.pow(phi, 9)
  );
  context.strokeRect(
    (size.x / 2) + (pixelSize * Math.pow(phi, 3) + pixelSize * Math.pow(phi, 6)),
    (size.y / 2) - (pixelSize * Math.pow(phi, 3) + pixelSize * Math.pow(phi, 7)),
    pixelSize * Math.pow(phi, 10),
    pixelSize * Math.pow(phi, 10)
  );
}

function spirals () {
  var phi = (Math.sqrt(5) + 1) / 2;
  context.lineWidth = '1';
  context.strokeStyle = '#0a007d';

  function firstArc () {
    var i = 3 * Math.PI / 2;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + pixelSize,
        (size.y / 2) + pixelSize,
        pixelSize,
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI) {
        window.clearInterval(interval);
        secondArc();
      }
    }, 1);
  }
  firstArc();

  function secondArc () {
    var i = Math.PI;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + pixelSize + (pixelSize / phi),
        (size.y / 2) + pixelSize,
        pixelSize * phi,
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI / 2) {
        window.clearInterval(interval);
        thirdArc();
      }
    }, 1);
  }

  function thirdArc () {
    var i = Math.PI / 2;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + (pixelSize * phi),
        (size.y / 2),
        pixelSize * Math.pow(phi, 2),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= 0) {
        window.clearInterval(interval);
        fourthArc();
      }
    }, 1);
  }

  function fourthArc () {
    var i = 2 * Math.PI;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2),
        (size.y / 2),
        pixelSize * Math.pow(phi, 3),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= (3 * Math.PI / 2)) {
        window.clearInterval(interval);
        fifthArc();
      }
    }, 5);
  }

  function fifthArc () {
    var i = 3 * Math.PI / 2;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2),
        (size.y / 2) + (pixelSize * Math.pow(phi, 2)),
        pixelSize * Math.pow(phi, 4),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI) {
        window.clearInterval(interval);
        sixthArc();
      }
    }, 5);
  }

  function sixthArc () {
    var i = Math.PI;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + (pixelSize * Math.pow(phi, 3)),
        (size.y / 2) + (pixelSize * Math.pow(phi, 2)),
        pixelSize * Math.pow(phi, 5),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI / 2) {
        window.clearInterval(interval);
        seventhArc();
      }
    }, 5);
  }

  function seventhArc () {
    var i = Math.PI / 2;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + (pixelSize * Math.pow(phi, 3)),
        (size.y / 2) - (pixelSize * Math.pow(phi, 3)),
        pixelSize * Math.pow(phi, 6),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= 0) {
        window.clearInterval(interval);
        eighthArc();
      }
    }, 10);
  }

  function eighthArc () {
    var i = 2 * Math.PI;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) - (pixelSize * Math.pow(phi, 4)),
        (size.y / 2) - (pixelSize * Math.pow(phi, 3)),
        pixelSize * Math.pow(phi, 7),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= 3 * Math.PI / 2) {
        window.clearInterval(interval);
        ninthArc();
      }
    }, 10);
  }

  function ninthArc () {
    var i = 3 * Math.PI / 2;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) - (pixelSize * Math.pow(phi, 4)),
        (size.y / 2) + (pixelSize * Math.pow(phi, 2) + pixelSize * Math.pow(phi, 5)),
        pixelSize * Math.pow(phi, 8),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI) {
        window.clearInterval(interval);
        tenthArc();
      }
    }, 10);
  }

  function tenthArc () {
    var i = Math.PI;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + (pixelSize * Math.pow(phi, 6) + pixelSize * Math.pow(phi, 3)),
        (size.y / 2) + (pixelSize * Math.pow(phi, 2) + pixelSize * Math.pow(phi, 5)),
        pixelSize * Math.pow(phi, 9),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI / 2) {
        window.clearInterval(interval);
        lastArc();
      }
    }, 15);
  }

  function lastArc () {
    var i = Math.PI / 2;
    var interval = window.setInterval(function () {
      context.beginPath();
      context.arc(
        (size.x / 2) + (pixelSize * Math.pow(phi, 3) + pixelSize * Math.pow(phi, 6)),
        (size.y / 2) - (pixelSize * Math.pow(phi, 3) + pixelSize * Math.pow(phi, 7)),
        pixelSize * Math.pow(phi, 10),
        i,
        i - Math.PI / 1000,
        true
      );
      context.stroke();
      i -= Math.PI / 1000;
      if (i <= Math.PI / 1000) {
        window.clearInterval(interval);
        // call next curve
      }
    }, 15);
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
  var circles = 2500;

  // golden ratio
  var phi = (Math.sqrt(5) + 1) / 2;
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
  }
}

// var counter = 0
function sunflowerFrame () {
  incriment+= 0.1;
  sunflower(incriment);
  if (counter < 10000) {
    window.requestAnimationFrame(sunflowerFrame);
    counter++;
    console.log(counter);
  } else {
    window.cancelAnimationFrame(sunflowerFrame);
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


var clearButton = document.getElementById('clear');
var fibButton = document.getElementById('fib');
var torusButton = document.getElementById('torus');
var sunflowerButton = document.getElementById('sunflower');
var spiralButton = document.getElementById('fibSpiral');
var dotsButton = document.getElementById('dots');

// ----------------- //
// ** END BUTTONS ** //
// ----------------- //

// ------------------- //
// BUTTON CLICK EVENTS //
// ------------------- //

// randomly generated coordinates and size
// must fire on each click
var randomX, randomY, randomWidth, randomHeight;

// fibonacci sequence
fibButton.onclick = function () {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
  drawFibonacci();
};

// torus spiral
torusButton.onclick = function () {
  torus();
};

// fibonacci spiral
spiralButton.onclick = function () {
  fibSpiral();
};

// fibonacci spiral in nature
sunflowerButton.onclick = function () {
  counter = 0;
  sunflowerFrame();
};

// fibonacci dots
dotsButton.onclick = function () {
  fibDots();
};

// clear canvas
clearButton.onclick = function () {
  context.clearRect(0, 0, size.x, size.y);
  drawBorder();
};

// ---------------------- //
// ** END CLICK EVENTS ** //
// ---------------------- //
