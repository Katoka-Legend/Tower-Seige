class Ball{
    constructor(x,y,radius){
        var options = {
            'restitiution':0.8,
            'friction':0.2,
            'density':0.8,
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill(176, 219, 83);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}