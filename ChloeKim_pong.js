// Variables
var playerHeight = 80
var playerWidth = 20
var playerSpeed = 12
var playerL = 200
var playerR = 200

var scoreL = 0
var scoreR = 0

var ballX = 300
var ballY = 200
var ballSize = 20
var ballXSpeed = 4
var ballYSpeed = -2

function setup() {
  createCanvas(600, 400);
  img = loadImage('neonborder.png');
}

function preload() {
  soundFormats("wav");
  bounceSound = loadSound("bounce.wav")
   soundFormats("mp3");
  bgmSound = loadSound("bgm3.mp3")
}



function draw() {
  background('#13283D');
    //wwwwbgmSound.play();

  //background draw
  stroke(255);
  strokeWeight(2);
  line(300,0,300,400);
    strokeWeight(4);

  line(10,10,590,10);
  line(10,10,10,390);
  line(10,390,590,390);
  line(590,390,590,10);
  
    noStroke();

 //background img
   image(img, 0.5,0, img.width / 0.835, img.height / 0.86,1,12);
  fill(0,255,255);
  
  // draw left player
  rect(0, playerL, playerWidth, playerHeight);
    fill(0,255,255);
  noStroke();

  
  // draw right player
  rect(width - playerWidth, playerR, playerWidth, playerHeight);
  fill(0,255,255);
  noStroke();

  // draw ball
  ellipse(ballX, ballY, ballSize)
  noStroke();
  
  /* User Input */
  // 'W' key
  if (keyIsDown(87)) {
    playerL = playerL - playerSpeed
  }
  // 'S' key
  if (keyIsDown(83)) {
    playerL = playerL + playerSpeed
  }

  if (keyIsDown(UP_ARROW)) {
    playerR = playerR - playerSpeed
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerR = playerR + playerSpeed
  }

  /* Game logic */
  if (playerL <= 0) {
    playerL = 0;
  }
  if (playerL > height - playerHeight) {
    playerL = height - playerHeight;
  }

  if (playerR <= 0) {
    playerR = 0;
  }
  if (playerR > height - playerHeight) {
    playerR = height - playerHeight;
  }

  ballX = ballX + ballXSpeed
  ballY = ballY + ballYSpeed

  // Bounce off top wall
  if (ballY < 0) {
    ballY = 0;
    ballYSpeed = -ballYSpeed;
  }

  // Bounce off bottom wall
  if (ballY > height) {
    ballY = height;
    ballYSpeed = -ballYSpeed;
  }



  // bounce off right player
  if (ballX > width - playerWidth && ballY >= playerR && ballY <= playerR + playerHeight) {
    ballX = width - playerWidth
    ballXSpeed = -ballXSpeed
    bounceSound.play();
  }

  // bounce off left player
  if (ballX < 0 + playerWidth && ballY >= playerL && ballY >= playerL - playerHeight) {
    ballX = 0 + playerWidth
    ballXSpeed = -ballXSpeed
    bounceSound.play();
  }



  // playerL scores!
  if (ballX > width) {
    ballX = width / 2
    ballY = height / 2
    scoreR = scoreR+1
    ballXSpeed = -ballXSpeed
  }

  fill(255);
  textSize(15);
  text("SCORE: "+scoreL, 310, 65);



  // playerR scores!
  if (ballX <= 0 - playerWidth) {
    ballX = width / 2
    ballY = height / 2
    scoreL = scoreL+1
    ballXSpeed = -ballXSpeed
  }
  fill(255);
  textSize(15);
  text("SCORE: " + scoreR, 220, 65);
  
 
}
