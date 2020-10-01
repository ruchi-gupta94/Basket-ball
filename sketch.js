var ball, ballImg;
var Pos,PosImg1,PosImg2;
var hoop,hoopImg1,hoopImg2;
var Score=0;

function preload(){
  ballImg = loadImage("ball.png");
  PosImg1 = loadImage("PosImg1.png");
  PosImg2 = loadImage("PosImg2.png");
  hoopImg1 = loadImage("Hoop1.png");
  hoopImg2 = loadImage("Hoop2.png");
  
}
function setup(){
  createCanvas(400,400);
 
  Pos = createSprite(350,300,20,170);
  Pos.addImage("pos1",PosImg1);
  Pos.addImage("pos2",PosImg2);
  Pos.setCollider("rectangle",0,0,10,180);
  //Pos.debug=true
  
  ball = createSprite(365,215,20,20);
  ball.addImage("ball", ballImg);
  ball.scale = 0.6;
  ball.setCollider("rectangle",-20,0,30,10);
  //ball.debug=true
  
  hoop = createSprite(60,180,20,20);
  hoop.addImage("hoop",hoopImg1);
  hoop.addImage("hoop2",hoopImg2);
  hoop.scale = 0.5;
  hoop.velocityY  = -2;
  hoop.setCollider("rectangle",-117,-40,20,160);
  //hoop.debug=true
  
  basket = createSprite(50,180,5,5);
  basket.setCollider("circle",0,0,10);
  basket.visible=false
  //basket.debug=true
 
}
function draw(){
  background(200);
  edges= createEdgeSprites();
  hoop.bounceOff(edges[2]);
  hoop.bounceOff(edges[3]);
  ball.bounceOff(hoop);
  
    basket.y = hoop.y;
     
  if(keyDown("space")){
    Pos.changeAnimation("pos2",PosImg2);
    Pos.scale = 1;
    ball.velocityY = -10;
    ball.velocityX = -9;
  } 
  else if(keyWentUp("space")){
    Pos.changeAnimation("pos1",PosImg1);
    Pos.setCollider("rectangle",0,0,10,180);
    Pos.scale = 1;
  }
  ball.collide( Pos );        
  ball.velocityY  += 0.5;
   
  if(keyWentDown("a")){
    ballReset();                      
  }
  
  
  if(ball.collide(basket)){
     hoop.changeAnimation("hoop2",hoopImg2); 
    Score=Score+1;
  } else {
    hoop.changeAnimation("hoop",hoopImg1);
   
  }
  drawSprites();
   fill(0);
  text("Baskets: " + Score,300,50);
  
}
