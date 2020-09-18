//Declaring variables and constants
var ground,paperObject;
var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
   paperImage=loadImage("sprites/paper.png");
}

function setup() {
	//creating canvas and placing it in center
	createCanvas(800, 700);
	rectMode(CENTER);
	
	//creating sprites
	engine = Engine.create();
	world = engine.world;

	paperObject=new Paper(80,600,50);

	body1=new Dustbin(620,590,10,80,-10);
	body2=new Dustbin(680,590,10,80,10);
	body3=new Dustbin(650,625,60,10);

	groundSprite=createSprite(width/2, height-35, width,10);
    groundSprite.shapeColor = "Green"

	//Create a Ground
	ground = Bodies.rectangle(width/2, 635, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	//make the engine start 
	Engine.run(engine);

}	


function draw() {
  rectMode(CENTER);
  background("White");

  drawSprites();
  
  //making more ground
  fill("Green");
  rect(400,680,800,100);
 
  body1.display();
  body2.display();
  body3.display();
  paperObject.display();
}

//making keyDown function

function keyPressed() {
 if (keyCode === UP_ARROW) {
 
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:25,y:-25});

  }
}



