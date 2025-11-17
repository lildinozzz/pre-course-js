/**
 * Тесты для Задачи 3
 */
const task3 = require('../Задача_3');

describe('Задача 3: Мотивирующее сообщение', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Создаем шпион для console.log
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Восстанавливаем оригинальный console.log
    consoleLogSpy.mockRestore();
  });

  test('должна вывести "Я стану лучшим разработчиком!"', () => {
    task3();
    expect(consoleLogSpy).toHaveBeenCalledWith('Я стану лучшим разработчиком!');
  });

  test('должна вызвать console.log ровно один раз', () => {
    task3();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test('сообщение должно заканчиваться восклицательным знаком', () => {
    task3();
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toMatch(/!$/);
  });

  test('сообщение должно содержать все слова в правильном порядке', () => {
    task3();
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toContain('Я');
    expect(output).toContain('стану');
    expect(output).toContain('лучшим');
    expect(output).toContain('разработчиком');
  });
});

