
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var chain1,chain2,chain3,chain4,chain5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof (400,200,270,10)

	bobObject1 = new Ball(300,400,25)
	bobObject2 = new Ball(350,400,25)
	bobObject3 = new Ball(400,400,25)
	bobObject4 = new Ball(450,400,25)
	bobObject5 = new Ball(500,400,25)

	chain1 = new rope(bobObject1.body,roof.body,-100,5)
	chain2 = new rope(bobObject2.body,roof.body,-50,5)
	chain3 = new rope(bobObject3.body,roof.body,0,5)
	chain4 = new rope(bobObject4.body,roof.body,50,5)
	chain5 = new rope(bobObject5.body,roof.body,100,5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50.1,y:-20})
	}
}



