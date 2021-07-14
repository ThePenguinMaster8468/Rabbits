var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleImg;
var leaves,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
    else {
      createLeaves();
    }
  }

  drawSprites();

}
function createApples(){
  apples = createSprite(random(50,350),40,10,10);
  apples.addImage(appleImg);
  apples.velocityY = 2;
  apples.scale = 0.09;
  apples.lifetime = 400;
  rabbit.depth = apples.depth;
  rabbit.depth = rabbit.depth + 1;
}
function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leafImg);
  leaves.velocityY = 2;
  leaves.scale = 0.1;
 leaves.lifetime = 400;
 rabbit.depth = leaves.depth;
  rabbit.depth = rabbit.depth + 1;
}