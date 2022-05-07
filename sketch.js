var player, playerImg;
var bgImg;
var bridgeImg;
var bridge1,bridge2;
var invisColider;
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;
var enemy1, enemy1Img;
var gameOverImg, gameOver;
var coinImg, coin;
var gOSound, gameSound;
function preload(){
 bgImg = loadImage("assets/sky.png");
 bridgeImg = loadImage("assets/R.png");
 enemy1Img = loadImage("assets/Enemy1.png");
 gameOverImg = loadImage("assets/GameOver.jpg");
 coinImg = loadImage("assets/coin.png");
 playerImg = loadImage("assets/player.png");
 
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  player = createSprite(1200,490,50,50);
  player.debug = true;
  player.scale = 0.1;
  player.addImage(playerImg);

  bridge1 = createSprite(1050,600,10,10);
  bridge1.scale = 0.16;
  bridge1.addImage(bridgeImg);
  bridge1.debug = true;
  bridge1.setCollider("rectangle",0,0,2300,300);

  bridge2 = createSprite(500,500,10,10);
  bridge2.addImage(bridgeImg);
  bridge2.scale = 0.16;
  bridge2.debug = true;
  bridge2.setCollider("rectangle",0,0,2300,300);

  invisColider = createSprite(500,640,10,10);
  invisColider.debug = true;
  invisColider.setCollider("rectangle",0,0,3000,30);

  enemy1 = createSprite(500,445,10,10);
  enemy1.addImage(enemy1Img);
  enemy1.scale = 0.1;

  gameOver = createSprite(100,250);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  
}

function draw() { 
  background(bgImg);
 if(gameState === PLAY){
  player.collide(bridge1);
  player.collide(bridge2);
 
  player.collide(invisColider);
  if(keyDown("LEFT_ARROW")){
    player.x = player.x-15;
  }
  if(keyDown("RIGHT_ARROW")){
    player.x = player.x+15;
  }
  if(keyDown("space")){
    player.velocityY = -10;
  }
  
  if(enemy1.isTouching(player)){
    gameState = END;
  }
  if(invisColider.isTouching(player)){
    gameState = END;
  }
  player.velocityY = player.velocityY+1;
 }
 
 else if(gameState === END){
  gameOver.x=camera.position.x;
  gameOver.visible = true;
  
  
 }
 
  
  drawSprites();
}

