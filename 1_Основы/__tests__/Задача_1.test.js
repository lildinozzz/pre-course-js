/**
 * Тесты для Задачи 1
 */
const task1 = require("../Задача_1");

describe("Задача 1: Вывод приветствия", () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Создаем шпион для console.log
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    // Восстанавливаем оригинальный console.log
    consoleLogSpy.mockRestore();
  });

  test('должна вывести "Привет, Мир!"', () => {
    task1();
    expect(consoleLogSpy).toHaveBeenCalledWith("Привет, Мир!");
  });

  test("должна вызвать console.log ровно один раз", () => {
    task1();
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("должна учитывать регистр букв", () => {
    task1();
    // Проверяем, что первая буква заглавная
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toBe("Привет, Мир!");
    expect(output).not.toBe("привет, Мир!");
    expect(output).not.toBe("привет, мир!");
  });
});
