
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ball1 
var bin,bin1,bin2
var ground
var launch


function setup() {
	createCanvas(700, 700);
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
	ball= new Ball(100,100,40);
  
  bin=new Dustbin(575,650,10,70);
  bin1=new Dustbin(625,680,100,10);
  bin2=new Dustbin(675,650,10,70);
  
  ground=new Ground(0,700,10000,40);
 
}



  function draw() 
  {
    rectMode(CENTER);
    background("black");
    ball.display()
    ground.display()
    bin.display()
    bin1.display()
    bin2.display()
    
    //keyPressed();    
    drawSprites();
  
  }
  function keyPressed()
  {
    if(keyCode===UP_ARROW  ){
      
    Matter.Body.applyForce(ball.body,ball.body.position,{x:270,y:-85});
  }
}






