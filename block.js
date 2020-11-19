class Block{
    constructor(x,y,w,h){
        var option={
            restitution:0,
            isStatic:false,
            density:0.4
        }
        this.visibility=255;
        this.block=Bodies.rectangle(x,y,w,h,option);
        this.width=w;
        this.height=h;
        this.color=rgb(random(0,255),random(0.255),random(0,255))
        World.add(world,this.block)
    }

    display(){
        if(this.block.speed<5){
        var pos=this.block.position;
        var angle=this.block.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(0);
        fill(this.color);
        rect(0,0,this.width,this.height);
        pop();
    }
    else
    {
        World.remove(world,this.block)
        push()
        this.visibility=this.visibility-5
        pop();
    }
}
}