class Umbrella {
    constructor(x, y) {
        var options ={
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("sprites/walking_1.png","sprites/walking_2.png","sprites/walking_3.png","sprites/walking_4.png","sprites/walking_5.png","sprites/walking_6.png","sprites/walking_7.png","sprites/walking_8.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        imageMode(CENTER);
        this.image(this.image, pos.x, pos.y+70, 300, 300);
    }
}