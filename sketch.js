var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  // if (bounceOff(movingRect,fixedRect)){
  //     movingRect.velocityX = movingRect.velocityX * (-1)
  //     fixedRect.velocityX = fixedRect.velocityX * (-1);
  // }
  if (bounceOff(movingRect,fixedRect)){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  // bounceOff();
  drawSprites();
}

function bounceOff(r1,r2){
  // if (r1.x - r2.x < r2.width/2 + r1.width/2
  //   && r2.x - r1.x < r2.width/2 + r1.width/2) 
  // r1.velocityX = r1.velocityX * (-1);
  // r2.velocityX = r2.velocityX * (-1);{
  //   return true
  // }

if (r1.y - r2.y < r2.height/2 + r1.height/2
  && r2.y - r1.y < r2.height/2 + r1.height/2){
  r1.velocityY = r1.velocityY * (-1);
  r2.velocityY = r2.velocityY * (-1);{
    return false
  }
}
}