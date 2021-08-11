var astronaut;
function preload()
{

background.loadImage("iss.png", backgroundImg);
  bath.loadAnimation("bath1.png", "bath2.png", bathAni);
brush.loadImage("brush.png", brushImg);
drink.loadAnimation("drink1.png", "drink2.png", drinkAni);
eat.loadAnimation("eat1.png", "eat2.png", eatAni);
gym.loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png",gymAni);
move.loadAnimation("move.png", "move2.png", moveAni);
sleep.loadImage("sleep.png", sleepImg);

}

createEdgeSprite();

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  astronaut = createSprite(400, 200, 5, 7);
  astronaut.scale = 0.4;
  astronaut.setImage(sleepImg);
  text("Hello! Welcome to the astronaut stimulator where you can see what astrounauts do in the ISS. Click on the arrows and buttons - A, S, D, W, F" , 400, 100);
  astronaut.bounceOff(Edges);
  if (key_down(UP_ARROW))
  {
  astronaut.setImage(brushImg);
  }
  if (key_down(DOWN_ARROW))
  {
  astronaut.setAnimation(gymAni);
  }
  if (key_down(LEFT_ARROW))
  {
  astronaut.setImage(bathAni);
  }
  if (key_down(RIGHT_ARROW))
  {
  astronaut.setImage(eatAni);
  }
  if (key_down(A))
  {
  astronaut.setAnimation(moveAni);
    astronaut.velocityX = -10;
  }
  if (key_down(D))
  {
  astronaut.setAnimation(moveAni);
    astronaut.velocityX = 10;
  }
  if (key_down(W))
  {
  astronaut.setAnimation(moveAni);
    astronaut.velocityY = -10;
  }
  if (key_down(S))
  {
  astronaut.setAnimation(moveAni);
    astronaut.velocityX = 10;
  }
  if (key_down(F)){
    astronaut.setImage(drinkAni);
  }
  
  drawSprites();
}


