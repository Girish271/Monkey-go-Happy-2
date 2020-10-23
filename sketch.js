

var bananaimage,stoneimage,backgroundimage;
var obstaclegroup, bananagroup;
var score = 0;
var monkey_running, monkey,ground,banana;


function preload() {

 backgroundImage=loadImage("jungle2.jpg");

  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaimage=loadImage("Banana.png");
  stoneimage=loadImage("stone.png");


}
function setup() {
  createCanvas(800, 400);

  backgroundSprite =createSprite(0,0,800,400);
  backgroundSprite.addImage(backgroundImage);
  backgroundSprite.velocityX = -4;
  backgroundSprite.scale = 1.5;
  backgroundSprite.x = backgroundSprite.width/2;

  ground = createSprite(400,350,800,10);
  ground.visible = false;

  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;

  bananagroup = new Group();
  stonegroup = new Group();

  score = 0;
}

function draw() {
  background(220);

  if(backgroundSprite.x<100)
  {
   backgroundSprite.x = backgroundSprite.width/2; 
  }

  if(keyDown("space") && monkey.y >= 159)
  {
   monkey.velocityY = -12;
  }
  
     if(stonegroup.isTouching(monkey)){
     monkey.scale=0.2
   }
  
    if (monkey.isTouching( bananagroup )) {
     score++;
            switch(score){
        case 10: monkey.scale=0.12;
        break;
        case 20: monkey.scale=0.14;
        break;
        case 30: monkey.scale=0.15;
        break;
        case 40: monkey.scale=0.18;
        break;
        case 50: monkey.scale=0.22;
              default: break;
      

      }

    }
  


 
 spawnBanana();
  spawnstones();

  monkey.collide(ground);

  monkey.velocityY = monkey.velocityY + 0.8;
  





  drawSprites();

  stroke("white");
textSize(20);
fill("white");
  text("Score: " + score, 500, 50);
}

function spawnBanana() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage( bananaimage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     //assign lifetime to the variable
    banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
    
    //add each banana to the group
   bananagroup.add(banana);
  }
}
function spawnstones() {
  if(frameCount % 300 === 0) {
    var stone = createSprite(800,325,10,40);     
    stone .velocityX = -6;
    stone .addImage( stoneimage);
    
    //assign scale and lifetime to the obstacle     
    stone .scale = 0.2;
    stone .lifetime = 300;
    
    //add each obstacle to the group
   stonegroup.add(stone );
  }
}

