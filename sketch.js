const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var batman;
var umbrella;
var thunder;
var thunder1, thunder2, thunder3, thunder4;
var maxDrops = 100;

function preload(){
    
    thunder1.loadImage("sprites/1.png");
    thunder2.loadImage("sprites/2.png");
    thunder3.loadImage("sprites/3.png");
    thunder4.loadImage("sprites/4.png");
}

function setup(){
   createCanvas(600, 300);

    umbrella = new umbrella(200, 500);

    for(var i=0; i<maxDrops; i++) {
        drops.push(new Drops(random(0, 400), random(0, 400)));
    }
}

function draw(){
    Engine.update(engine);
    background("black");

    rand = Math.round(random(1,4));
    if(frameCount%80===0) {
        thunderCreatedFrame=frameCount
        thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
        switch(rand) {
            case 1:thunder.addImage(thunder1);
            break;
            case 2:thunder.addImage(thunder2);
            break;
            case 3:thunder.addImage(thunder3);
            break;
            case 4:thunder.addImage(thunder4);
            break;

        }
        thunder.scale = random(0.3, 0.6);
    }



    if(keyDown(LEFT_ARROW)) {
        batman.x = batman.x-3;
    }

    if(keyDown(RIGHT_ARROW)) {
        batman.x = batman.x+3;
    }

    umbrella.display();

    drawSprites();
}

