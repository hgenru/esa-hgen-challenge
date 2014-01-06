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
		//console.log(x,y);
		for (var i=0; i<this.p; i++)
		{
			//console.log(this.Cells[i][0],this.Cells[i][1]);
			if ((this.Cells[i][0]===x)&&(this.Cells[i][1]===y)) 
				{
					return true;
				};
		};	
		return false;
	}

	this.isAlive = function(x,y)
	{
		var t=0;
		for (var i=0; i<this.p; i++)
		{
			if ((this.Cells[i][0]>x-2)&&(this.Cells[i][0]<x+2)&&
				(this.Cells[i][1]>y-2)&&(this.Cells[i][1]<y+2)) 
				{
					t++;
				}
		}
		if ((t=2) || (t=3)) {return true} else {return false}; 
	}

	this.nextStep = function()
	{
		var nsCells = [];
		var nsp=0;
		for (var i=0; i<this.p; i++)
		{

			if (this.isAlive(this.Cells[i][0],this.Cells[i][1]))
			{
				nsCells[nsp] = this.Cells[i];
				nsp++;
			}
		}		
		this.Cells.length = 0;
		this.p=nsp;
		for (var i=0; i<nsp; i++)
		{
				this.Cells[i] = nsCells[i];
				//console.log(this.Cells[i][0],this.Cells[i][1],this.getCell(this.Cells[i][0],this.Cells[i][1]));
		} 
	}

}