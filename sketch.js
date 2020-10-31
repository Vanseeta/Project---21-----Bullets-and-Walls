var speed;
var damage;
var weight;
var thickness;
var wall, wall2, wall3, wall4;
var bullet,bullet2, bullet3, bullet4;

function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22,83);

  bullet = createSprite(50, 125, 11, 10);
  bullet.shapeColor = color("white");
  bullet.velocityX = 0;
  bullet.weight = weight;

  wall = createSprite(800, 150, 1600, 10);
  wall.shapeColor = color("white");
  wall.width = thickness;

  bullet2 = createSprite(50, 175, 11, 10);
  bullet2.shapeColor = color("yellow");

  wall2 = createSprite(800, 200, 1600, 10);
  wall2.shapeColor = color("white");
  wall2.width = thickness;

  bullet3 = createSprite(50, 225, 11, 10);
  bullet3.shapeColor = color("red");
  
  wall3 = createSprite(800, 250, 1600, 10);
  wall3.shapeColor = color("white");
  wall3.width = thickness;

  bullet4 = createSprite(50, 275, 11, 10);
  bullet4.shapeColor = color("green");
  
  wall4 = createSprite(1600, 200, 20, 400);
  wall4.shapeColor = color(80,80,80);
  wall4.width = thickness;

}

function draw() {
  background("black");

  if(keyCode === RIGHT_ARROW) {
    bullet.velocityX = speed;
  }

  if(bullet.isTouching(wall4)){
    bullet.collide(wall4);
  }

  damage = (0.5*bullet.weight*bullet.speed*bullet.speed) / (wall.width*wall.width*wall.width);

  if(wall.x * bullet.x < (wall.width + bullet.width)/2){
    return true
  }
   
    if(damage > 10) {
      bullet.shapeColor = color(255, 0, 0);
   }
   
    if(damage < 10) {
      bullet.shapeColor = color(0, 255, 0);
   }

  drawSprites();
}