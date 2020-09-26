var line1;
var particles = [];
var particle;
var turn = 0;
var plinkos = [];
var divisions = [];
var ground = [];

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var divisionHeight=300;
var score =0;
var gameState="play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
	line1 = createSprite(400,500,800,20);
	line1.shapeColor=color("yellow")
	line1.isStatic = true;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    


    
}
 


function draw() {
  background("black");
  textSize(20)
  stroke ("white");
  text("Score : ",100,30);
  text(" 500",20,550);
  text(" 500",100,550);
  text(" 500",180,550);
  text(" 500",240,550);
  text(" 100",320,550);
  text(" 100",400,550);
  text(" 100",480,550);
  text(" 200",570,550);
  text(" 200",665,550);
  text("200",750,550);
  
  



  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
    if(gameState!=="end"){
      count++;
      particle=new Particle(mouseX,10,10,10);
    }
}