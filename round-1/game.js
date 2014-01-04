function GameOfLife()
{
	this.Cells = [];
	this.M = 20;
	this.N = 20;
	for (var i = 0; i < m; i++)
		{
			mas[i] = [];
			for (var j = 0; j < n; j++)
				{
					mas[i][j] = false;
				}
		}
	function setCell(x,y)
	{
		this.Cells[x][y] = true;
	}
	function getCell(x,y)
	{
		if (this.Cells[x][y] === true) then return true else return false;
	}
}