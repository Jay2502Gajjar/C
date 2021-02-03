class ground{

	constructor(x,y,width,height)
	{
	 
		var options = {

			isStatic: true
		}

		this.ground01 = Bodies.rectangle(x,y,width,height,options);  
		this.width = width;
		this.height = height
	    World.add(world,this.ground01)


	}


	display()
	{
		var pos = this.ground01.position
		rectMode(CENTER);
	    fill("white")
        rect(pos.x,pos.y,this.width,this.height)

	}

}