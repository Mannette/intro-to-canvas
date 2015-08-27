var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var size = { x: canvas.width, y: canvas.height };

function drawBorder () {
  context.strokeRect(0, 0, size.x, size.y);
}
drawBorder();

canvas.onclick = function () {
  context.fillStyle = 'blue';
  context.fillRect(0, 0, (size.x / 4), (size.y / 4));
};

canvas.ondblclick = function () {
  context.fillStyle = 'red';
  context.fillRect((size.x / 2), (size.y / 2), (size.x / 4), (size.y / 4));
};
