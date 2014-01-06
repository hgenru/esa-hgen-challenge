function GameOfLife()
{
	this.Cells = [];
	this.p = 0;

	this.setCell = function(x,y)
	{
		this.Cells[this.p] = [x,y];
		this.p = this.p + 1;
	}

	this.getCell = function(x,y)
	{
		
		for (var i=0; i<this.p; i++)
		{
			if ((this.Cells[i][0]===x)&&(this.Cells[i][1]===y)) 
				{
					return true;
				};
		};	
		return false;
	}

	this.isAlive = function(x,y)
	{
		/*
		var t=0;
		for (var i=0; i<this.p; i++)
		{
			if ((this.Cells[i].x>x-2)&&((this.Cells[i].x<x+2)&&
				(this.Cells[i].y>y-2)&&((this.Cells[i].y<y+2)) 
				{
					t++;
				}
		}
		if ((t=2) || (t=3)) {return true} else {return false}; */
	}
}