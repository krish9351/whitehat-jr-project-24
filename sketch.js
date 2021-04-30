
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(100, 100);
  iron = new Iron(500, 350);
	stone = new Stone(100, 350, 50, 50);
  rubber = new Rubber(600, 350, 60);
  sandParticle1 = new Sand(400, 350, 10);
  sandParticle2 = new Sand(410, 350, 10);
  sandParticle3 = new Sand(390, 350, 10);
  sandParticle4 = new Sand(380, 350, 10);
  sandParticle5 = new Sand(370, 350, 10);

  ground = new Ground(10, height, 1600, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  ground.display();
  
  iron.display();
  stone .display();
  rubber.display();
  sandParticle1.display();
  sandParticle2.display();
  sandParticle3.display();
  sandParticle4.display();
  sandParticle5.display();

  hammer.display();

  drawSprites();
 
}



