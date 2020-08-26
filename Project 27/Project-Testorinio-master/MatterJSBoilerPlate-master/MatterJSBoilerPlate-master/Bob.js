class Ball {
    constructor(x, y, diameter) {
    var options = {
            'isStatic':false,
            'restitution':1.1,
            'friction':5.5,
            'density':0.5,
        }
        this.body = Matter.Bodies.circle(x, y, diameter, options);
        this.width = diameter
        
        World.add(world, this.body);
        }
        display(){
        var pos =this.body.position;
        strokeWeight(4)
        stroke("black")
        ellipseMode(CENTER)
        fill("purple");
        ellipse(pos.x,pos.y,this.diameter)
        }
    }