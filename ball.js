class Ball{
    constructor(x,y,r){
        this.body=Bodies.circle(x,y,r,{isStatic:false,density:1.0})
        this.r=r;
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
       rotate(angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop()
    }
}