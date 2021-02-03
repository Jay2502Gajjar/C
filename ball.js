class ball{

	constructor(x,y,radius)
	{
	 
		var options = {

			isStatic:false
		}

		this.ball01 = Bodies.circle(x,y,radius,options);  
		this.r = radius
	    World.add(world,this.ball01)


	}


	display()
	{
		var pos = this.ball01.position
		ellipseMode(CENTER);
	    //fill("white")
        circle(pos.x,pos.y,this.r)

	}

}