class box{

	constructor(x,y,width,height)
	{
	 
		var options = {

			isStatic: false
		}

		this.box01 = Bodies.rectangle(x,y,width,height,options);  
		this.width = width;
		this.height = height
	    World.add(world,this.box01)


	}


	display()
	{
		var pos = this.box01.position
		rectMode(CENTER);
	    fill("red")
        rect(pos.x,pos.y,this.width,this.height)

	}

}