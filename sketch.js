var gameState = "level"


var playButton, playImg, play2, play2Img, press, pressImg, welcome, welcomeImg;
var ground, cliff, ground2, cliff2, ground3, wall1, wall2, wall3;
var bob, bob_Idle;
var help, helpImg, bob2, bob2Img, reach, reachImg, the, theImg, top2, topImg;
var hatch, button, buttonWords, bWImg;
var Rwall1, Rwall2, Rwall3, Rwall4, Rwall5, Rwall6, Rwall7, Rwall8, Rwall9, Rwall10, Rwall11, Rwall12, Rwall13, Rwall14, Rwall15, Rwall16, Rwall17, Rwall18, Rwall19, Rwall20, Rwall21, Rwall22, Rwall23, Rwall24, Rwall25, Rwall26;

function preload(){
  bob_Idle = loadAnimation("bob.png")

  //level 1
  welcomeImg = loadImage("welcome.png");
  playImg = loadImage("play.png");
  play2Img = loadImage("play2.png");
  pressImg = loadImage("press.png");

  //level 2
  helpImg = loadImage("help.png");
  bob2Img = loadImage("bob2.png");
  reachImg = loadImage("reach.png");
  theImg = loadImage("the.png");
  topImg = loadImage("top.png");

  bWImg = loadImage("bWImg.png")
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-60);

  //level 1
  welcome = createSprite(780, 200, 50, 50)
  welcome.addImage("hello", welcomeImg);
  welcome.scale = 9.0

  playButton = createSprite(750, 650, 50, 50)
  playButton.addImage("play", playImg);
  playButton.scale = 12.0

  play2 = createSprite(1050, 353, 50, 50)
  play2.addImage("play2", play2Img);
  play2.scale = 12.0

  press = createSprite(700, 400, 50, 50)
  press.addImage("press", pressImg);
  press.scale = 12.0

  //level 2
  ground = createSprite(750, 760, 1000, 100)
  ground.shapeColor = "orange"
  ground.visible = false;

  cliff = createSprite(1300, 600, 450, 500)
  cliff.shapeColor = "tan"
  cliff.visible = false;

  ground2 = createSprite(1300, 380, 450, 60)
  ground2.shapeColor = "green"
  ground2.visible = false;

  cliff2 = createSprite(200, 600, 450, 500)
  cliff2.shapeColor = "tan"
  cliff2.visible = false;

  ground3 = createSprite(200, 380, 450, 60)
  ground3.shapeColor = "green"
  ground3.visible = false;

  //fake stairs
  bob = createSprite(50, 400, 30, 50)
  bob.addAnimation("idle", bob_Idle);
  bob.visible = false;

  help = createSprite(250, 200, 30, 50)
  help.addImage("help", helpImg);
  help.scale = 10.0
  help.visible = false;

  bob2 = createSprite(520, 200, 30, 50)
  bob2.addImage("bob2", bob2Img);
  bob2.scale = 10.0
  bob2.visible = false;

  reach = createSprite(850, 180, 30, 50)
  reach.addImage("reach", reachImg);
  reach.scale = 10.0
  reach.visible = false;

  the = createSprite(1150, 200, 30, 50)
  the.addImage("the", theImg);
  the.scale = 10.0
  the.visible = false;

  top2 = createSprite(650, 300, 30, 50)
  top2.addImage("top", topImg);
  top2.scale = 10.0
  top2.visible = false;

  //secret
  buttonWords = createSprite(1300, 590, 150, 50)
  buttonWords.addImage("button", bWImg);
  buttonWords.scale = 0.7
  buttonWords.visible = false

  button = createSprite(1300, 920, 30, 20);
  button.visible = false

  hatch = createSprite(1300, 600, 200, 100)
  hatch.shapeColor = "tan"
  hatch.visible = false

  //walls
  wall1 = createSprite(5, 400, 30, 800)
  wall1.visible = false;

  wall2 = createSprite(1520, 200, 30, 400)
  wall2.visible = false;

  wall3 = createSprite(800, 10, 1600, 30)
  wall3.visible = false;

  //level3
  Rwall1 = createSprite(965, 200, 510, 20)
  Rwall1.shapeColor ="#7022F9";   //indigo
  //Rwall1.visible = false;

  Rwall2 = createSprite(230, 450, 20, 350)
  Rwall2.shapeColor = "red";
  //Rwall2.visible = false;

  Rwall3 = createSprite(670, 630, 900, 20)
  Rwall3.shapeColor = "orange";
  //Rwall3.visible = false;

  Rwall4 = createSprite(1210, 335, 20, 250)
  Rwall4.shapeColor = "#9621FB";   //violet 
  //Rwall4.visible = false;

  //fake wall
  Rwall5 = createSprite(1210, 490, 20, 60)
  Rwall5.shapeColor = "#9639FB";
  //Rwall5.visible = false;

  Rwall6 = createSprite(1210, 570, 20, 100)
  Rwall6.shapeColor = "#9621FB";
  //Rwall6.visible = false;

  Rwall7 = createSprite(1130, 450, 20, 340)
  Rwall7.shapeColor = "#9621FB";
  //Rwall7.visible = false;

  Rwall8 = createSprite(1170, 630, 100, 20)
  Rwall8.shapeColor = "#9621FB";
  //Rwall8.visible = false;

  Rwall9 = createSprite(1050, 425, 20, 290)
  Rwall9.shapeColor = "#7022F9";
  //Rwall9.visible = false;

  Rwall10 = createSprite(990, 560, 100, 20)
  Rwall10.shapeColor = "orange";
  //Rwall10.visible = false;

  Rwall11 = createSprite(950, 600, 20, 60)
  Rwall11.shapeColor = "orange";
  //Rwall11.visible = false;

  Rwall12 = createSprite(800, 270, 150, 20)
  Rwall12.shapeColor = "#342DEF";
  //Rwall12.visible = false;

  Rwall13 = createSprite(720, 245, 20, 70)
  Rwall13.shapeColor = "#342DEF";
  //Rwall13.visible = false;

  Rwall14 = createSprite(950, 385, 20, 210)
  Rwall14.shapeColor = "#342DEF";
  //Rwall14.visible = false;

  Rwall15 = createSprite(800, 350, 280, 20)
  Rwall15.shapeColor = "#342DEF";
  //Rwall15.visible = false;

  Rwall16 = createSprite(651, 310, 20, 100)
  Rwall16.shapeColor = "#342DEF";
  //Rwall16.visible = false;

  Rwall17 = createSprite(445, 270, 280, 20)
  Rwall17.shapeColor = "#31FC31";
  //Rwall17.visible = false;

  Rwall18 = createSprite(315, 370, 20, 350)
  Rwall18.shapeColor = "red";
  //Rwall18.visible = false;

  Rwall19 = createSprite(272, 200, 105, 20)
  Rwall19.shapeColor = "red";
  //Rwall19.visible = false;

  Rwall20 = createSprite(520, 350, 241, 20)
  Rwall20.shapeColor = "#31FC31";
  //Rwall20.visible = false;

  Rwall21 = createSprite(518, 200, 386, 20)
  Rwall21.shapeColor = "#342DEF";
  //Rwall21.visible = false;

  Rwall22 = createSprite(510, 430, 370, 20)
  Rwall22.shapeColor = "#31FC31";
  //Rwall22.visible = false;

  Rwall23 = createSprite(800, 470, 20, 100)
  Rwall23.shapeColor = "yellow";
  //Rwall23.visible = false;

  Rwall24 = createSprite(590, 510, 400, 20)
  Rwall24.shapeColor = "yellow";
  //Rwall24.visible = false;

  Rwall25 = createSprite(400, 570, 20, 100)
  Rwall25.shapeColor = "orange";
  //Rwall25.visible = false;

  Rwall26 = createSprite(875, 480, 130, 20)
  Rwall26.shapeColor = "#342DEF";
  //Rwall26.visible = false;

  //#9621FB //violet
  //#7022F9 //indigo
  //#342DEF //blue
  //#31FC31 //green
}

function draw() {

  //collider
  //button.debug = true

  if(gameState = "level2"){

  help.setCollider("rectangle", -1.0, -5, 25, 7, 0);
  bob2.setCollider("rectangle", -0.1, -4, 20, 6, 0);
  reach.setCollider("rectangle", -0.5, -3, 33, 5, 0);
  the.setCollider("rectangle", -0.001, -4, 20, 6, 0)
  top2.setCollider("rectangle", -0.001, -5, 25, 7, 0)
  bob.setCollider("rectangle", 0, 0, 30, 70, 0)
  play2.setCollider("rectangle", 0.7, -5.6, 27, 5, 0);

  background("lightblue");

  //bob move
 if(keyDown("up") && bob.y >= 300) {
    bob.velocityY = -12
  }
  
  bob.velocityY = bob.velocityY + 0.8

  if(keyDown(RIGHT_ARROW)) {
    bob.velocityX = 5;
  }

  if(keyWentUp(RIGHT_ARROW)) {
    bob.velocityX = 0;
  }

  if(keyDown(LEFT_ARROW)) {
    bob.velocityX = -5;
  }

  if(keyWentUp(LEFT_ARROW)) {
    bob.velocityX = 0;
  }

  if(keyDown(DOWN_ARROW)) {
    bob.velocityX = 5;
  }

  if(keyWentUp(DOWN_ARROW)) {
    bob.velocityX = 0;
  }


  if(mousePressedOver(reach)){
    reach.x = 750
    reach.y = 400;
  }

  if(mousePressedOver(hatch)){
    hatch.destroy();
    button.x = 1300
    button.y = 620
  }

  if(mousePressedOver(button)){
    button.destroy();
    bob.x = 1300
    bob.y = 300
  }

  
}

  
  bob.collide(ground2);
  bob.collide(cliff);

  bob.collide(wall1);
  bob.collide(wall3);

  bob.collide(reach);
  bob.collide(cliff2);
  bob.collide(ground3);

  if(mousePressedOver(play2)){
    gameState = "level3"
    level2();
  }

  if(bob.isTouching(ground))  {
    bob.x = 50
    bob.y = 300
  }

  //if(bob.isTouching()  ||  )  {

  //}
console.log("   x  " + mouseX)
console.log("   y " + mouseY)

  drawSprites();
}

    function level2(){
      welcome.destroy();
      press.destroy();
      playButton.destroy();
      play2.destroy();

      bob.visible = true;
      cliff.visible = true;
      ground2.visible = true;
      ground.visible = true;
      cliff2.visible = true
      ground3.visible = true

      help.visible = true;
      bob2.visible = true;
      reach.visible = true;
      the.visible = true;
      top2.visible = true;

      buttonWords.visible = true
      button.visible = true
      hatch.visible = true
    }

    function level3(){
      ground.destroy();
      cliff.destroy();
      ground2.destroy();
      bob.destroy();
      help.destroy();
      bob2.destroy();
      reach.destroy();
      the.destroy();
      top2.destroy();
      buttonWords.destroy();
      button.destroy();
      hatch.destroy();
      wall1.destroy();
      wall2.destroy();
      wall3.destroy();
    }