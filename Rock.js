class Rock {
    constructor(x, y) {
        var options = {
            friction: 20,
            mass: 100
        }
        this.body = Bodies.circle(x, y, 30, options)
        this.radius = 30;
        this.image = loadImage("rock.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 70, 70);
        pop();
    }
}