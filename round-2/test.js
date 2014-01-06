module( "Test Game Of Life 2", {
    setup: function() {
        // Создаем экземпляр игры
        this.game = new GameOfLife();
    }
});
test("test set and get", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(10000, -10000);
    // Узнаем как у нас клеточка поживает
    var status = this.game.getCell(10000, -10000);
    // Проверяем полученный статус
    ok(status === true, "Оно шевелится по всей вселенной!");
});