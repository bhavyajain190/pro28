
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ball=createSprite(200,600,50,50)
	ground=createSprite(400,650,800,20)
  dustbin1=createSprite(500,540,20,160);
  dustbin2=createSprite(600,540,20,160);
  dustbin3=createSprite(550,620,100,20);
  slingshot = new Slingshot(ball.body,{x:200,y:100});
 
  
Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
  }
  

