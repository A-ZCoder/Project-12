var field,ball,bomb,player;
var fieldImg,ballImg,bombImg,playerImg;


function preload() {

fieldImg = loadImage("soccer.jpg");
ballImg = loadImage("ball.png");
bombImg = loadImage("red ball.png");
playerImg = loadImage("gloves.png");

}

function setup() {
field = createSprite(200,200,10,10);
field.addImage(fieldImg);
player = createSprite(200,355,10,10);
player.addImage(playerImg);
player.scale = 0.150;
}


function draw() {
background(0);
  
player.x = World.mouseX;




CreateBall();
CreateBomb();




edges= createEdgeSprites();
player.collide(edges);


  drawSprites();
}

      


var select_sprites = Math(random(1,400));
var select_sprites = Math(random(1,400));
var select_sprites = Math(random(1,400));
var select_sprites = Math(random(1,400));





function CreateBall() {

if(frameCount % 70 === 0) {
  ball=createEdgeSprites();
  player.collide(ball);
ball = createSprite (random(50,360), 40, 10, 10);
ball.addImage(ballImg);
ball.scale=0.05;
ball.velocityY=3;
ball=createEdgeSprites();
ball.bounceOff(player);
}
}

if(ball.isTouching(player)) {
ball.velocityY=0;

}



function CreateBomb() {
if(frameCount % 100 === 0) {
bomb= createSprite (random(85,360), 40, 10,10);
bomb.addImage(bombImg);
bomb.scale= 0.1;
bomb.velocityY= 3;
}
}



