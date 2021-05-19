var bg,bgImage;
var wizard,wiz_image;
var bludger1,bludger2,bludger_img;
var quaffle,quaffle_img;
var snitch,snitch_img;
var teamLogo, logo_img;
var confetti, confetti2,confetti_img;
var collisionSound;
var victorySound;
var gameState="PLAY"
var m1,m2,m3,m4,m5,m6,m7,m8;
const ac1="WITCHES"
var touches=0;
function preload(){

  wiz_image=loadImage("images/Harry_img.png")
  bgImage=loadImage("images/background.jpg")
  bludger_img=loadImage("images/bludger.png")
  quaffle_img=loadImage("images/quaffle.png")
  snitch_img=loadImage("images/snitch.png")
  logo_img=loadImage("images/gryffindor.png")
  confetti_img=loadImage("images/confetti.png")
  collisionSound=loadSound("collision.mp3")
  victorySound=loadSound("victory.mp3")
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  bg.addImage(bgImage)
  bg.scale=3.6;
  bg.velocityX=-4

teamLogo=createSprite(100,100,50,50)
teamLogo.addImage(logo_img)
teamLogo.scale=0.4

teamLogo2=createSprite(1350,100,50,50)
teamLogo2.addImage(logo_img)
teamLogo2.scale=0.4

confetti=createSprite(1300,340,50,50)
confetti.addImage(confetti_img)
confetti_img.scale=0.5

confetti2=createSprite(1320,340,50,50)
confetti2.addImage(confetti_img)
confetti2.scale=0.5

  wizard=createSprite(100, 360, 50, 50);
  wizard.addImage(wiz_image)
  wizard.scale=0.7

  bludger1=createSprite(400,displayHeight/2,40,40);
  bludger1.addImage(bludger_img)
  bludger1.scale=0.1
  bludger1.velocityY=18

  bludger2=createSprite(700,displayHeight/2,40,40);
  bludger2.addImage(bludger_img)
  bludger2.scale=0.1
  bludger2.velocityY=12

  quaffle=createSprite(1000,displayHeight/2,40,40);
  quaffle.addImage(quaffle_img)
  quaffle.scale=0.14
  quaffle.velocityY=20

  snitch=createSprite(1300,360,40,40);
  snitch.addImage(snitch_img)
  snitch.scale=0.3

  invinci1=createSprite(400,170,20,20);
  invinci1.visible=false;
  invinci2=createSprite(400,displayHeight-80,20,20);
  invinci2.visible=false;

  invinci3=createSprite(700,170,20,20);
  invinci3.visible=false;
  invinci4=createSprite(700,displayHeight-50,20,20);
  invinci4.visible=false;

  invinci5=createSprite(1000,170,20,20);
  invinci5.visible=false;
  invinci6=createSprite(1000,displayHeight-50,20,20);
  invinci6.visible=false;
}

function draw() {
  background("white");  

  m1=createElement('h1');
    m1.position(480,5)
    m1.html("QUDDITCH WORLD CUP")
    m1.style('color','gold')
    m1.style('background','maroon')

    m2=createElement('h1');
    m2.position(1200,500)
    m2.html("PRESS RIGHT ARROW KEY TO MOVE")
    m2.style('color','blue')
    m2.style('background','black')

    m3=createElement('h1');
    m3.position(168,50)
    m3.html("PASS THE BLUGDERS AND QUAFFLE TO CATCH THE GOLDEN SNITCH")
    m3.style('color','blue')
    m3.style('background','gold')
    m3.style('color','maroon')

    m4=createElement('h1');
    m4.position(100,500)
    m4.html("TOUCHES "+touches)
    m4.style('color','blue')
    m4.style('background','gold')
    m4.style('color','maroon')

    bludger1.bounceOff(invinci2)
    bludger1.bounceOff(invinci1)
    bludger2.bounceOff(invinci3)
    bludger2.bounceOff(invinci4)
    quaffle.bounceOff(invinci5)
    quaffle.bounceOff(invinci6)

  

  if(gameState==="PLAY"){
    if(bg.x<600){
      bg.x=670;
    }
    if(keyDown(37)){
      wizard.x=wizard.x-12
    }
    if(keyDown(39)){
      wizard.x=wizard.x+12
    }
  
    if(wizard.isTouching(bludger1)|| wizard.isTouching(bludger2) || wizard.isTouching(quaffle)){
      wizard.x=100
      wizard.y=360
      collisionSound.play();
     
      m5=createElement('h1');
      m5.position(500,120)
      m5.html("OOPS! BE CAREFUL!")
      m5.style('background','black')
      m5.style('color','red')
    
      touches++
    } else if(wizard.x>410){
      m6=createElement('h1');
      m6.position(500,120)
      m6.html("GREAT GOING WIZ!!")
      m6.style('background','black')
      m6.style('color','green')
  
        
    }
  
    if(wizard.isTouching(snitch)){
      m8=createElement('h1');
      m8.position(1000,200)
      m8.html("CONGRATULATIONS YOU WINN!")
      m8.style('background','gold')
      m8.style('color','maroon')
      victorySound.play();
    }
   
  }
  drawSprites();
  }

 