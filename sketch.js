var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  //box.shapeColor = color(230, 230, 250);
  box.shapeColor = color("red");

}

function draw() {

   background(30);
   
   if (keyIsDown(RIGHT_ARROW)){
    background("red");
  }

    if (keyIsDown(LEFT_ARROW)){
      background("green");
  }
 
    if (keyIsDown(UP_ARROW)){
      background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)){
    background("blue");
  }

  drawSprites();
}

