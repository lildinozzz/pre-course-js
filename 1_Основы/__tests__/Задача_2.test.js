/**
 * Тесты для Задачи 2
 */
const task2 = require('../Задача_2');

describe('Задача 2: Вывод трех слов', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Создаем шпион для console.log
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Восстанавливаем оригинальный console.log
    consoleLogSpy.mockRestore();
  });

  test('должна вывести три слова: Код, Баг, Фича', () => {
    task2();
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Код');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 'Баг');
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 'Фича');
  });

  test('должна вызвать console.log ровно три раза', () => {
    task2();
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });

  test('слова должны выводиться в правильном порядке', () => {
    task2();
    const calls = consoleLogSpy.mock.calls;
    expect(calls[0][0]).toBe('Код');
    expect(calls[1][0]).toBe('Баг');
    expect(calls[2][0]).toBe('Фича');
  });

  test('каждое слово должно выводиться отдельным вызовом console.log', () => {
    task2();
    // Проверяем, что каждый вызов содержит только одно слово
    const calls = consoleLogSpy.mock.calls;
    calls.forEach((call) => {
      expect(call.length).toBe(1);
      expect(typeof call[0]).toBe('string');
    });
  });
});

