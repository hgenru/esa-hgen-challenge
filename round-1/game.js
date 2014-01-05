function GameOfLife()
{
	this.Cells = [];
	this.tCells = [];
	M = 6;
	N = 6;
	for (var i = 0; i < M; i++)
		{
			this.Cells[i] = [];
			for (var j = 0; j < N; j++)
				{
					this.Cells[i][j] = false;
				}
		}
	function thorX(x)
		{
			if (x<0) {return(x+M)}
			if (x>=M) {return(x-M)}
			return x
		}
	function thorY(y)
		{
			if (y<0) {return y+N}
			if (y>=N) {return y-N}
			return y
		}
	this.CheckCell = function(x,y)
	{
		var t=0;
		for (var i = x-1; i <= x+1; i++)
		{
			for (var j = y-1; j <= y+1; j++)
				{
					//console.log(x,y,i,j,t,this.tCells[thorX(i)][thorY(j)]);
					if (this.tCells[thorX(i)][thorY(j)] === true) {t++}
				}
		}
		if (this.tCells[x][y] === true) {t--}
		//console.log(x,y,thorX(x),thorY(y),t);
		if (t === 3) {this.setCell(x,y)} else if (t !== 2) {this.dellCell(x,y)}
	}
    this.dellCell = function (x,y)
	{
		this.Cells[thorX(x)][thorY(y)] = false;
	}
	this.setCell = function (x,y)
	{
		this.Cells[thorX(x)][thorY(y)] = true;
	}
	this.getCell = function (x,y)
	{
		if (this.Cells[thorX(x)][thorY(y)] === true) {return true} else {return false};
	}
	this.nextStep = function ()
	{
		//console.log("!");
		for (var i = 0; i < M; i++)
		{
			this.tCells[i] = [];
			for (var j = 0; j < N; j++)
				{
					this.tCells[i][j] = this.Cells[i][j];
				}
		}

		for (var i = 0; i < M; i++)
		{
			//console.log("Do",this.tCells[i]);
			for (var j = 0; j < N; j++)
				{
					this.CheckCell(i,j);
				}
			//console.log("Po",this.Cells[i]);
		}
	}
}