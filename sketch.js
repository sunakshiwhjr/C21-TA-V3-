const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let myEngine;
let myWorld;

var ground, leftWall, rightWall, topWall;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  
  myWorld = myEngine.world;

  ground = new Ground(200, 390, 400, 10);
  leftWall = new Ground(5, 195, 10, 380);
  rightWall = new Ground(395, 195, 10, 380);
  topWall = new Ground(200, 5, 400, 10);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(myEngine);

  ground.display();
  leftWall.display();
  rightWall.display();
  topWall.display();
}

