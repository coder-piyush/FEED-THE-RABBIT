var garden, rabbit;
var gardenImg, rabbitImg;
var leaves, leavesImg;
var apple, appleImg;
var select_sprite;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leavesImg = loadImage("redImage.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);
  garden.velocityX = -2;

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  select_sprite = Math.round(random(1,2))
}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;

  if (garden.x < 160) {
    garden.x = garden.width / 2;
  }

  if (rabbit.x < 100) {
    rabbit.x = 100;
  }

  else if (rabbit.x > 340) {
    rabbit.x = 340;
  }

  if (frameCount%80 == 0){
    if (select_sprite == 1) {
      createApples();
    }
    else {
      createLeaves();
    }
  }

  drawSprites();
}


function createLeaves() {
  // write your code here 
  if (frameCount % 80 == 0) {
    leaves = createSprite(random(10, 80), 50, 40, 10);
    leaves.addImage("leaves", leavesImg)
    leaves.scale = 0.1;
    leaves.velocityY = 3;
    rabbit.depth = leaves.depth + 1;
  }
}


function createApples() {
  // write your code here 
  if (frameCount % 80 == 0) {
    apple = createSprite(random(140, 200), 50, 40, 10);
    apple.addImage("apple", appleImg)
    apple.scale = 0.1;
    apple.velocityY = 3;
    rabbit.depth = apple.depth + 1;
  }
}