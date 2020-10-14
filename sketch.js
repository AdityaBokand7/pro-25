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
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world; 
	
	groundSprite=createSprite(width/2, height-40, width,10);
	groundSprite.shapeColor=color("blue")


	
	

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 paper = new Paper(110,640,70);
    //side1 = new Dustbin(510,610,20,100);
	side2 = new Dustbin(1200,540,300,40);
	//side3 = new Dustbin(730,610,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);


paper.display();
//side1.display();
side2.display();
//side3.display();



  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-73})
	 }
   }


