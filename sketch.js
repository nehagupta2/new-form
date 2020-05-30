const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var ground, base1, base2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11,
    box12, box13, box14, box15, box16, box17, box18, box19, box20, box21,
    box22, box23, box24, box25, box25, box27, box28, box29, box30, box31,
    box32, box33;
var boxes;
var rock1;
var rocks = [];
var score = 0;
var rockNo;
var bg;

function preload(){
    bg = loadImage("bg.png");
}

function setup() {
    canvas = createCanvas(800, 600);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(width / 2, height, width, 20);
   
    var x1 = 600, y1 = 230;
    var y2 = height - 30;
   
    base1 = new Ground(x1, y1 + 30, 200, 20);
   
    box1 = new Box(x1, y1)
    box2 = new Box(x1 - 30, y1)
    box3 = new Box(x1 - 60, y1)
    box4 = new Box(x1 + 30, y1)
    box5 = new Box(x1 + 60, y1)
    box6 = new Box(x1, y1 - 40)
    box7 = new Box(x1 - 30, y1 - 40)
    box8 = new Box(x1 + 30, y1 - 40)
    box9 = new Box(x1, y1 - 80);
    box10 = new Box(x1, y2);
    box11 = new Box(x1 - 30, y2);
    box12 = new Box(x1 - 60, y2);
    box13 = new Box(x1 - 90, y2);
    box14 = new Box(x1 - 120, y2);
    box15 = new Box(x1 + 30, y2)
    box15 = new Box(x1 + 60, y2);
    box16 = new Box(x1 + 90, y2);
    box17 = new Box(x1 + 120, y2);
    box18 = new Box(x1, y2 - 40);
    box19 = new Box(x1 - 30, y2 - 40);
    box20 = new Box(x1 - 60, y2 - 40);
    box21 = new Box(x1 - 90, y2 - 40);
    box22 = new Box(x1 + 30, y2 - 40);
    box23 = new Box(x1 + 60, y2 - 40);
    box24 = new Box(x1 + 90, y2 - 40);
    box25 = new Box(x1, y2 - 80);
    box26 = new Box(x1 - 30, y2 - 80);
    box27 = new Box(x1 - 60, y2 - 80);
    box28 = new Box(x1 + 30, y2 - 80);
    box29 = new Box(x1 + 60, y2 - 80);
    box30 = new Box(x1, y2 - 120);
    box31 = new Box(x1 - 30, y2 - 120);
    box32 = new Box(x1 + 30, y2 - 120);
    box33 = new Box(x1, y2 - 150);

    rock1 = new Rock(200, 200, 20,20);
    rocks.push(rock1);
    slingshotPosition = createVector(200, 200)
    
    slingshot = new SlingShot(rock1.body, { x: slingshotPosition.x, y: slingshotPosition.y });
    
    boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14,
        box15, box16, box17, box18, box19, box20, box21, box22, box23, box24,
        box25, box26, box27, box28, box29, box30, box31, box32, box33]

}

function draw() {
    rockNo = 6 - rocks.length;
    
    canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    
    background(bg);
    noStroke();
    textSize(35)
    fill("white")

    text("Score : " + score, width - 300, 50);
    text("Chances left : " + rockNo, width - 700, 50)

    Engine.update(engine);
    ground.display();
    base1.display();
    for (var box of boxes) {
        if (box !== undefined) {
            box.display();
            box.score();
        }
    }
    for (var rock of rocks) {
        if (rock !== undefined) {
            rock.display();
        }

    }

    slingshot.display();

    if (score >= 300) {
        push()
        rectMode(CENTER)
        fill(0)
        rect(width / 2, height / 2, 400, 150);
        fill(255)
        textSize(50);
        text("You Win", width / 2 - 90, height / 2 + 20);
        pop()
    }

    if (rockNo < 1) {
        push()
        rectMode(CENTER)
        fill(0)
        rect(width / 2, height / 2, 400, 150);
        fill(255)
        textSize(50);
        text("You Lose", width / 2 - 100, height / 2 + 20);
        pop()
    }

    if(score >= 300 && rockNo < 1){
        push()
        rectMode(CENTER)
        fill(0)
        rect(width / 2, height / 2, 400, 150);
        fill(255)
        textSize(50);
        text("You Lose", width / 2 - 100, height / 2 + 20);
        pop()
    }

}

function mouseDragged() {
    Matter.Body.setPosition(slingshot.getBody(), { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
    // for (var rock of rocks) {
    //     alert("ok");

    // if (rock.body.position.x === slingshotPosition.x && rock.body.position.y === slingshotPosition.y)

    //     }
    if (rockNo >= 0) {
        setTimeout(newRock, 500);
    }
}

function newRock() {
    slingshot.attach(createRock());
}

function createRock() {

    var newRock = new Rock(slingshotPosition.x, slingshotPosition.y, Math.round(random(50, 60)));
    rocks.push(newRock);
    return (newRock.body)
}