var canvas;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  base1 = createSprite(50, 585, 200, 20);
  base1.shapeColor = "blue";
  base2 = createSprite(280, 585, 200, 20);
  base2.shapeColor = "green";
  base3 = createSprite(510, 585, 200, 20);
  base3.shapeColor = "yellow";
  base4 = createSprite(740, 585, 200, 20);
  base4.shapeColor = "pink";

    //create box sprite and give velocity
    ball = ball = createSprite(random(20,750),100, 50,50);
    ball.velocityX = 5 ;
     ball.velocityY = 4 ;
    ball.shapeColor = "white";


}

function draw() {
    background(rgb(0,0,0));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    //create edgeSprite



    //add condition to check if box touching surface and make it box
     if(base1.isTouching(ball) && ball.bounceOff(base1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(base2.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(base3.isTouching(ball) && ball.bounceOff(base3)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(base4.isTouching(ball) && ball.bounceOff(base4)){
        ball.shapeColor = "pink";
        music.play();
        
    }
    drawSprites();
}
