class Chain{
    constructor(b1, b2){
        var options ={
            bodyA:b1,
            bodyB:b2,
            stiffness:0.2,
            length:80
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display(){

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        strokeWeight(3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}