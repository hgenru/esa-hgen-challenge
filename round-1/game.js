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
	this.setCell = function (x,y)
	{
		this.Cells[x][y] = true;
	}
	this.getCell = function (x,y)
	{
		if (this.Cells[x][y] === true) {return true} else {return false};
	}
}