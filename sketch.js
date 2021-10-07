var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,base;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	     createSprite(165,480,10,100);
	     createSprite(355,480,10,100);
	     createSprite(260,530,200,10);
		 createSprite(260,430,200,10);
	     createSprite(260,600,20,130);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
    

	 boxleftSprite=createSprite(300,610,20,100,{isStatic:true});
	 boxleftSprite.shapeColor=color(255,0,0);
	 boxbaseSprite=createSprite(400,650,200,20,{isStatic:true});
	 boxbaseSprite.shapeColor=color(255,0,0);
	 boxrightSprite=createSprite(500,610,20,100,{isStatic:true});
	 boxrightSprite.shapeColor=color(255,0,0);





	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  drawSprites();
  text("Press DOWN ARROW to drop package",450,400);
  text.fontColor=color(0);
  text("ZOMBIE-FREE ZONE",200,480);
}
function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);  
  }
}




