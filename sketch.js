
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var Ground , box1 ,box2 ,box3 ,box4 ,box5 ;
var box6 , box7 ,box8 ,box9 ,box10;
var ball1 , rope01;

function preload(){
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	Ground = new ground(500,500,1300,30)
	box1 = new box(1000,440,70,70)
	box2 = new box(1000,360,70,70)
    box3 = new box(1000,290,70,70)
	box4 = new box(1000,220,70,70)
	box5 = new box(1000,150,70,70)
	box6 = new box(920,440,70,70)
	box7 = new box(920,360,70,70)
	box8 = new box(920,290,70,70)
	box9 = new box(920,220,70,70)
	box10 = new box(920,150,70,70)

	ball1 = new ball(840,290,60);

	rope01 = new Rope(ball1.body,{x:840 , y:200})
	
	Engine.run(engine);

}

function draw() {

  background("black");
  Engine.update(engine)

  Ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ball1.display();

  rope01.display();

  
  
  
}







