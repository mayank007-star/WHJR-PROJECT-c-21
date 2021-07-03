var canvas;
var music;
var block1,block2,block3,block4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
 block1 = createSprite(0,580,360,30);
 block1.shapeColor = "red";
 block2 = createSprite(295,580,200,30);
 block2.shapeColor = "green";
 block3 = createSprite(500,580,200,30);
 block3.shapeColor = "yellow";
 block4 = createSprite(700,580,200,30);
 block4.shapeColor = "blue";

 ball = createSprite(random(20,750),200,40,40);
 ball.shapeColor = "white";
 ball.velocityX = 10;
 ball.velocityY = 10;


    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Edges = createEdgeSprites();
    ball.bounceOff(Edges);
 if(ball.isTouching(block1)&& ball.bounceOff(block1)){
     ball.shapeColor = "red";
 }
 if(ball.isTouching(block2)&& ball.bounceOff(block2)){
    ball.shapeColor = "green";
}
if(ball.isTouching(block3)&& ball.bounceOff(block3)){
    ball.shapeColor = "yellow";
}
if(ball.isTouching(block4)&& ball.bounceOff(block4)){
    ball.shapeColor = "blue";
}



    drawSprites();




    //add condition to check if box touching surface and make it box
}
