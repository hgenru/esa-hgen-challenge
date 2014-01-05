function GameOfLife()
{
	this.Cells = [];
	M = 4;
	N = 4;
	for (var i = 0; i < M; i++)
		{
			this.Cells[i] = [];
			for (var j = 0; j < N; j++)
				{
					this.Cells[i][j] = false;
				}
		}

	this.CheckCell = function(x,y)
	{
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

		var t=0;
		for (var i = x-1; i <= x+1; i++)
		{
			for (var j = y-1; j <= y+1; j++)
				{
					//console.log(x,y,i,j,thorX(i),thorY(j),t);
					if (this.Cells[thorX(i)][thorY(j)] === true) {t++}
				}
		}
		if (this.Cells[x][y] === true) {t--}
		//console.log(x,y,t);
		if (t === 3) {this.Cells[thorX(x)][thorY(y)]=true} else if (t !== 2) {this.Cells[thorX(x)][thorY(y)]=false}
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
		for (var i = 0; i < M; i++)
		{
			for (var j = 0; j < N; j++)
				{
					this.CheckCell(i,j);
				}
			//console.log(this.Cells[i]);
		}
	}
}