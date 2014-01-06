function GameOfLife()
{
	this.Cells = [];
	this.p = 0;
	this.setCell = function(x,y)
	{
		this.Cells[p].x = x;
		this.Cells[p].y = y;
		this.p++;
	}

	this.getCell = function(x,y)
	{
		for (var i=0; i<this.p; i++)
		{
			if ((this.Cells[i].x===x)&&(this.Cells[i].y===y)) 
				{
					return true;
				}
		}	
		return false;
	}

	this.isAlive = function(x,y)
	{
		var t=0;
		for (var i=0; i<this.p; i++)
		{
			if ((this.Cells[i].x>x-2)&&((this.Cells[i].x<x+2)&&
				(this.Cells[i].y>y-2)&&((this.Cells[i].y<y+2)) 
				{
					t++;
				}
		}
		if ((t=2) || (t=3)) {return true} else {return false};
	}
}