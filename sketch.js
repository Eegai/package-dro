var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,700);
	rectMode(CENTER);
	

	packageSprite=createSprite(335, 205, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(350, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box = createSprite(350,640,200,20)
	box1 = createSprite(440,590,20,100)
	box2 = createSprite(260,590,20,100)
	box.shapeColor="red"
	box1.shapeColor="red"
	box2.shapeColor="red"

	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 boxBody = Bodies.rectangle(350,650,200,20,{isStatic:true} );
 	World.add(world, ground);
	box.x = boxBody.position.x
	box.y = boxBody.position.y
	
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0); 
  Engine.update(engine);
  if(packageSprite.isTouching(groundSprite)){
	  packageSprite.velocityY=0
  }
  box.display()
  box2.display()
  box1.display()
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	packageSprite=createSprite(335, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	World.add(world, packageBody);
	packageSprite.velocityY=5
 }}
