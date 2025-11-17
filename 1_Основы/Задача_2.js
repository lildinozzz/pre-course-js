/**
 * Задача 2: Вывод трех слов
 * Выводит на экран три слова: Код, Баг, Фича
 * Каждое слово выводится отдельным вызовом console.log()
 */
function task2() {
  console.log("Код");
  console.log("Баг");
  console.log("Фича");
}

// Экспортируем функцию для тестирования
if (typeof module !== "undefined" && module.exports) {
  module.exports = task2;
}

// Запускаем функцию, если файл выполняется напрямую
if (require.main === module) {
  task2();
}
