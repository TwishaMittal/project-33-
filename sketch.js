const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var flakes = [];
var backgroundImg
function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);  
  if(frameCount%15===0){
    flakes.push(new Snow())
  }
  for (var k=0; k < flakes.length; k++){
    flakes [k].display();
  }
  drawSprites();
}