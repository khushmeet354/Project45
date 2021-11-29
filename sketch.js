var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var bird, birdImg ;
var light, lightImg ; 
var building, buildingImg ; 
var obsTop, obsTopImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
birdImg = loadImage("assets/obsTop2.png")
lightImg = loadImage("assets/obsBottom2.png")
buildingImg = loadImage("assets/obsBottom3.png")
obsTopImg = loadImage("assets/obsTop1.png")
}

function setup(){

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;


// creating light 
light = createSprite(300,250,80,20)
light.addImage("light", lightImg)
light.scale = 0.10

// creating building
building = createSprite(100,250,80,20)
building.addImage("building", buildingImg)
building.scale = 0.10
}


function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }
          if(keyDown("RIGHT_ARROW")) {
            balloon.velocityX = 6 ;
          }
          if(keyDown("LEFT_ARROW")) {
            balloon.velocityX = -6 ;
          }
          bg.velocityX = -2
          
          if(bg.x<0){
            bg.x=bg.width/2
          }
         
          
          balloon.depth=building.depth
          balloon.depth=balloon.depth+1

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}