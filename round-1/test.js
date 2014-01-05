module( "Test Game Of Life", {
    setup: function() {
        // Создаем экземпляр игры
        this.game = new GameOfLife();
    }
});
test("test set and get", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(0, 0);
    // Узнаем как у нас клеточка поживает
    var status = this.game.getCell(0, 0);
    // Проверяем полученный статус
    ok(status === true, "Оно шевелится!");
});
test("test next step", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(0, 0);
    // Переходим на следующий шаг
    this.game.nextStep();
    // Узнаем как у нас клеточка поживает
    var status = this.game.getCell(0, 0);
    // Проверяем полученный статус
    ok(status === false, "Оно шевелилось, но умерло :с");
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
    this.game.nextStep();
    // Узнаем как поживает наш квадрат
    ok(
        (this.game.getCell(0, 0) &&
         this.game.getCell(0, 1) &&
         this.game.getCell(1, 0) &&
         this.game.getCell(1, 1)),
        "Оно жило и будет жить!"
    );
});