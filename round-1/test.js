test("Test game of life", function() {
    // Создаем экземпляр игры
    var g = new GameOfLife();
    // Пытаемся зародить жизнь
    g.setCell(0, 0);
    // Узнаем как у нас клеточка поживает
    var status = g.getCell(0, 0);
    // Проверяем полученный статус
    ok(status === true, "Оно шевелится!");
});