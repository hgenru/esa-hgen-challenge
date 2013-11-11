test( "Test game of life", function() {
    var g = new GameOfLife();
    g.setCell(0, 0);
    ok(g.getCell === true, "Клетка живет!" );
});