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
	function setCell(x,y)
	{
		this.Cells[x][y] = true;
	}
	function getCell(x,y)
	{
		if (this.Cells[x][y] === true) {return true} else {return false};
	}
}