class Rope
{

    constructor(bodyA,pointB)
    {

        var options =
        {   bodyA:bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length:10
        }

       
       this.pointB = pointB

       this.rope1 = Matter.Constraint.create(options)
       World.add(world,this.rope1)

    }



    display()
    {

        abc = this.rope1.bodyA.position
        xyz = this.pointB

        line(abc.x,abc.y,xyz.x,xyz.y)
    }
}