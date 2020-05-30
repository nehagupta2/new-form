class Box {
  constructor(x, y) {
    var options = {
      'restitution': 0.01,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40;
    this.points = 255;
    Matter.Body.setMass(this.body, 4);
    // this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display() {
    //console.log(this.body.speed);
    if (this.body.speed < 13) {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      stroke(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else {
      World.remove(world, this.body);
      this.points = this.points - 100;
    }

  }

  score() {
    if (this.points < 0 && this.points > -1005) {
      score += 1;
    }
  }


};
