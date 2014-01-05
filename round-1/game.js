function GameOfLife()
{
	this.Cells = [];
	this.M = 20;
	this.N = 20;
	for (var i = 0; i < this.M; i++)
		{
			this.Cells[i] = [];
			for (var j = 0; j < this.N; j++)
				{
					this.Cells[i][j] = false;
				}
		}

	this.CheckCell = function(x,y)
	{
		var t=0;
		for (var i = x-1; i < x+1; i++)
		{
			for (var j = y-1; j < y+1; j++)
				{
					if (i != x && j != y) {t++}
				}
		}
		console.log(this);
		if (t === 3) {this.Cells[x][y]=true} else if (t !== 2) {this.Cells[x][y]=false}
	}

	this.setCell = function (x,y)
	{
		this.Cells[x][y] = true;
	}
	this.getCell = function (x,y)
	{
		if (this.Cells[x][y] === true) {return true} else {return false};
	}
	this.nextStep = function ()
	{
		this.CheckCell(0,0)
	}
}