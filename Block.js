class Block{
    constructor(x,y,w,h){

        var op = {'restitiution':1,'friction':1.0,'density':1.0,isStatic:false}
        this.body = Bodies.rectangle(x,y,w,h,op)
        World.add(world,this.body)
        this.width = w
        this.height = h
        this.Visibility = 255
        this.image=loadImage('polygon.png')


    }

    display(){
        
        if(this.body.speed < 6){
            // rectMode(CENTER)
            // rect(this.body.position.x,this.body.position.y,this.width,this.height)
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height   )
           }
        else{
            push();
            tint(255,this.Visibility);
            this.Visibility = this.Visibility - 5;
            image(this.image, this.body.position.x, this.body.position.y,50,50);
            pop();
            World.remove(world, this.body);
           }
        
             
    }
    score(){
        if(this.Visibility < 0 && this.Visibility > -105){
            points++
        }
    }
        
}
