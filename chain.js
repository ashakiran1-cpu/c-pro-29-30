

class Chain{
    constructor(body1,pointB){
        var option={
            bodyA:body1,
            pointB:pointB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.chain);

    }
    attach(body){
        this.chain.bodyA = body;
    }
    fly(){
        this.chain.bodyA=null;
    }
    display(){
        if(this.chain.bodyA){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)}

    }
}