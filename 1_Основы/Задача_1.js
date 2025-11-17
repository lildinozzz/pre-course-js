/**
 * Задача 1: Вывод приветствия
 * Выводит в консоль сообщение "Привет, Мир!"
 */
function task1() {
  console.log("Привет, Мир!");
}

// Экспортируем функцию для тестирования
if (typeof module !== "undefined" && module.exports) {
  module.exports = task1;
}

// Запускаем функцию, если файл выполняется напрямую
if (require.main === module) {
  task1();
}
