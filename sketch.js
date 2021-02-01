
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var plane;
var hammer1;
var sand1;
var stone1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(600,height,1200,20)
	hammer1 = new Hammer(100,100);
     sand1 = new Sand(505,450,10);
	stone1 = new Stone(700,320,100,100);

  
}


function draw() {
  background(0);
  Engine.update(engine);

plane.display();
hammer1.display();
sand1.display();  
stone1.display();
 
}



