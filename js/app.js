var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 600;

var score = 0;
var gscore = 0;

var player = {
  pacmouth: 320,
  pacdir: 0,
  x: 0,
  y: 0,
  pacsize: 32,
}

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pacman-sprite.png";

var keyclick = {};

document.addEventListener('keydown', (event) =>  {
  keyclick[event.keyCode] = true;
  move(keyclick);
});

function move(keyclick) {
  player.x+=5;
  render();
};

document.addEventListener('keyup', (event) =>  {
   delete keyclick[event.keyCode];
});

function checkReady() {
  this.ready = true;
  playgame();
}

function playgame() {
  render();
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(mainImage, player.pacmouth, player.pacdir, 32, 32, player.x, player.y, player.pacsize, player.pacsize)
  ctx.font = "22px sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText('Pacman: ' + score + " vs Ghost: " + gscore, 2, 10);
}

document.body.appendChild(canvas);