var paper;
var ground;
//var side1;
var side2;
//var side3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world; 
	
	groundSprite=createSprite(width/2, height-40, width,10);
	groundSprite.shapeColor=color(0,128,0)


	
	

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 paper = new Paper(100,200,200);
    //side1 = new Dustbin(510,610,20,100);
	side2 = new Dustbin(620,560,200,200);
	//side3 = new Dustbin(730,610,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);


paper.display();
//side1.display();
side2.display();
//side3.display();



  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	 }
   }


