var Block = require('./Block.js');

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var firstBlock = new Block(50, 50, 10, 10, "rgba(0, 255, 0, 1)");
var secondBlock = new Block(75, 75, 10, 10, "rgba(0, 255, 0, 1)");
var blocks = [
  firstBlock,
  secondBlock
];

requestAnimationFrame(function gameLoop () {
  context.clearRect(0, 0, canvas.width, canvas.height);

  blocks.forEach(function(block) {
    block.move({ x: 0.2, y: 0 }).draw(context);
  })

  requestAnimationFrame(gameLoop);
});

canvas.addEventListener('click', function (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  var newBlock = new Block(x, y, 10, 10, "rgba(0, 255, 0, 1)");

  blocks.push(newBlock);
});
