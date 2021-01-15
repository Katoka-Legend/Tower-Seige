const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg  = "white"

function setup() {
    createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,490,1000,20)
        
    
    p1 = new Ground(550,450,200,20)
    p2 = new Ground(550,200,200,20)

    block1 = new Block(500,360,20,30);
    block2 = new Block(520,360,20,30);
  block3 = new Block(540,360,20,30);
  block4 = new Block(560,360,20,30);
  block5 = new Block(580,360,20,30);
  block6 = new Block(600,360,20,30);

  block7 = new Block(510,330,20,30);
  block8 = new Block(530,330,20,30);
  block9 = new Block(550,330,20,30);
  block10 = new Block(570,330,20,30);
  block11 = new Block(590,330,20,30);

  block12 = new Block(520,310,20,30);
  block13 = new Block(540,310,20,30);
  block14 = new Block(560,310,20,30);
  block15 = new Block(580,310,20,30);

  block16 = new Block(530,280,20,30);
  block17 = new Block(550,280,20,30);
  block18 = new Block(570,280,20,30);

  block19 = new Block(540,250,20,30);
  block20 = new Block(560,250,20,30);

  block21 = new Block(550,220,20,30);

  block22 = new Block(500,135,20,30);
  block23 = new Block(520,135,20,30);
  block24 = new Block(540,135,20,30);
  block25 = new Block(560,135,20,30);
  block26 = new Block(580,135,20,30);
  block27 = new Block(600,135,20,30);

  block28 = new Block(510,105,20,30);
  block29 = new Block(530,105,20,30);
  block30 = new Block(550,105,20,30);
  block31 = new Block(570,105,20,30);
  block32 = new Block(590,105,20,30);

  block33 = new Block(520,75,20,30);
  block34 = new Block(540,75,20,30);
  block35 = new Block(560,75,20,30);
  block36 = new Block(580,75,20,30);
  
  block37 = new Block(530,45,20,30);
  block38 = new Block(550,45,20,30);
  block39 = new Block(570,45,20,30);

  ball = new Ball(100,250,50)
  slingshot = new SlingShot(ball.body,{x:120,y:250})
  
  // console.log(bg)
}


var points = 0


function draw() {
  // background(bg)
  getTime()
    Engine.update(engine);  

    fill("black")
    textSize(25)
    text('score : '+points,50,50)
    ground.display()

    p1.display()  
    p2.display()

  
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();

    block21.display();
  
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();
    block27.display();

    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();

    block33.display();
    block34.display();
    block35.display();
    block36.display();

    block37.display();
    block38.display();
    block39.display();

    ball.display()
    slingshot.display()

    
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
  
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
  
    block12.score();
    block13.score();
    block14.score();
    block15.score();
  
    block16.score();
    block17.score();
    block18.score();
  
    block19.score();
    block20.score();
  
    block21.score();
  
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
  
    block28.score();
    block29.score();
    block30.score();
    block31.score();
    block32.score();
  
    block33.score();
    block34.score();
    block35.score();
    block36.score();
  
    block37.score();
    block38.score();
    block39.score();

    
    
  }


function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingshot.release();
  }
  
  function keyPressed(){
    if(keyCode === 32 && ball.body.speed < 3){
      Matter.Body.setPosition(ball.body,{x:120,y:250})
      slingshot.attach(ball.body);
    } 
   
  }


  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON);
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1800){
      bg = 'black'
      background('white')
    }
    else{
      bg = 'white'
      background(105,105,105)
    }
    return bg
}
