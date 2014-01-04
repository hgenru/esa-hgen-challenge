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
test("test set and get", function() {
    // Пытаемся зародить жизнь
    this.game.setCell(0, 0);
    // Переходим на следующий шаг
    this.game.nextStep();
    // Узнаем как у нас клеточка поживает
    var status = this.game.getCell(0, 0);
    // Проверяем полученный статус
    ok(status === false, "Оно шевелилось, но умерло :с");
});