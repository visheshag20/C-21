var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(70,570,200,30)
    block1.shapeColor = "pink";
    block2 = createSprite(295,570,200,30)
    block2.shapeColor = "yellow";
    block3 = createSprite(515,570,200,30)
    block3.shapeColor = "blue";
    block4 = createSprite(740,570,200,30)
    block4.shapeColor = "green";

    //create box sprite and give velocity
    box = createSprite(random (520,750),100,40,40)
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 9;
    
    edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1) && box.bounceOff(block1)){
        box.shapeColor="pink";
        music.play();
    }

    if(box.isTouching(block2) && box.bounceOff(block2)){
        box.shapeColor="yellow";
       
    }
    
    if(box.isTouching(block3)){
        box.shapeColor="blue";
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }

    if(box.isTouching(block4) && box.bounceOff(block4)){
        box.shapeColor="green";
    
    }

    drawSprites();
}
