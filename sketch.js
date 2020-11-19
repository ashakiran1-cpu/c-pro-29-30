const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var ball;
var ch;
var b1,b2,b3,b4,b5;
var b6,b7,b8,b9;
var b10,b11,b12;
var b13,b14;
var b15;
var stand;
var ground




function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=Bodies.rectangle(400,400,800,10,{isStatic:true})
   World.add(world, ground);
  stand=Bodies.rectangle(370,319,240,10,{isStatic:true})
   World.add(world,stand);

  ball=new Ball(100,300,20);
  ch = new Chain(ball.body,{x:120,y:250});

  b1=new Block(300,300,25,35);
  b2=new Block(330,300,25,35);
  b3=new Block(360,300,25,35)
  b4=new Block(390,300,25,35);
  b5=new Block(420,300,25,35);

 b6=new Block(315,265,25,35);
  b7=new Block(345,265,25,35)
  b8 =new Block(375,265,25,35)
  b9=new Block(405,265,25,35)

  b10 =new Block(335,230,25,35)
  b11 =new Block(365,230,25,35)
  b12 =new Block(395,230,25,35)

  b13 =new Block(345,195,25,35)
  b14 =new Block(375,195,25,35)

  b15 =new Block(360,160,25,35)

  
  Engine.run(engine);

}

function draw() {
  background("cyan");  
  fill("brown")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10)
  rect(stand.position.x,stand.position.y,240,10)
  ball.display();
  ch.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  ch.fly();
}

function keyPressed(){
  if(keyCode === 32){
    ch.attach(ball.body);
  }
}