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
		var v=false;
		for (var i=0; i<this.p; i++)
		{
			if ((this.Cells[i][0]>x-2)&&(this.Cells[i][0]<x+2)&&
				(this.Cells[i][1]>y-2)&&(this.Cells[i][1]<y+2)) 
				{
					t++;
				}
			if ((this.Cells[i][0]===x)&&(this.Cells[i][1]===y)) 
				{
					v=true;
					t--;
				}
		};
		//console.log(t,v);
		if (((t===2)&&(v===true))||(t===3)){return true}else{return false}; 
	}

	this.nextStep = function()
	{
		var nsCells = [];
		var nsp=0;
		for (var k=0; k<this.p; k++)
		{
			for (var i=this.Cells[k][0]-1; i<this.Cells[k][0]+2; i++)
				for (var j=this.Cells[k][1]-1; j<this.Cells[k][1]+2; j++)
				{
					if (this.isAlive(i,j))
					{
						//console.log("nsp=",nsp,this.isAlive(i,j));
						nsCells[nsp] = [i,j];
						nsp++;
					}
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