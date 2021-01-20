
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var mango;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=new Tree(20,100,100,200);
	mango=new  Mango(20,200,20,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  mango.display();
 
}



