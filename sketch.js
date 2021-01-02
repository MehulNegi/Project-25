
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
}

function setup() {
	createCanvas(1366, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin2 (1115,265,20,190);
	ground = new Ground (683,height-30,1370,20);
	dustbin2 = new Dustbin2 (935,265,20,190);
	dustbin3 = new Dustbin (1025,265,2,2);
	paper = new Paper(200,350,70);



	Engine.run(engine);
  
}


function draw() {
  background(0, 255, 204);
  rectMode(CENTER);
  
  
  paper.display(); 
  ground.display();
  //dustbin1.display();
  //dustbin2.display();
  dustbin3.display();
 
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-75});  
	}
}

