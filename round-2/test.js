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
test("test cell life", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(10, -10);
    // Да будет свет!
    this.game.nextStep();
    // Узнаем как у нас клеточка поживает
    var status = this.game.getCell(10, -10);
    // Проверяем полученный статус
    ok(status === false, "Оно шевелилось и умерло!");
});
test("test square", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(0, 0);
    this.game.setCell(0, 1);
    this.game.setCell(1, 0);
    this.game.setCell(1, 1);
    // Переходим на следующий шаг
    this.game.nextStep();
    // Переходим еще на шаг для надежности
    ok(
        (this.game.getCell(0, 0) &&
         this.game.getCell(0, 1) &&
         this.game.getCell(1, 0) &&
         this.game.getCell(1, 1)),
        "Оно жило и будет жить!"
    );
});
test("test stick", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(0, 1);
    this.game.setCell(0, 0);
    this.game.setCell(0, -1);
    // Переходим на следующий шаг
    this.game.nextStep();
    // Узнаем как поживает наша палочка
    ok(
        (this.game.getCell(1, 0) &&
         this.game.getCell(0, 0) &&
         this.game.getCell(-1, 0)),
        "Смотрите, у Вас завелась какая-то палочка!"
    );
    // Переходим на следующий шаг
    this.game.nextStep();
    // Узнаем как поживает наша палочка
    ok(
        (this.game.getCell(1, 0) &&
         this.game.getCell(0, 0) &&
         this.game.getCell(-1, 0)) == false,
        "Да она еще и люто бешенно вертится!"
    );
});