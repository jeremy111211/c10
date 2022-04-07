
var trex ,trex_running;
var ground
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 
  trex = createSprite(50,150,50,50);
  trex.addAnimation("run",trex_running);
  trex.scale = 0.7;

  ground = createSprite(300,180,600,10);

  edges = createEdgeSprites();
}
function draw(){
  background("black")
  
  if(keyDown("space")){
   trex.velocityY = -10
  }

  trex.velocityY += 0.5;
  trex.collide(ground);

  console.log(trex.y)


  drawSprites();
}
