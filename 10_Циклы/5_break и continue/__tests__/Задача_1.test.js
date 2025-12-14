describe("Task 1: Print numbers 1-100, skip 13, 18, 45", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should call console.log 97 times (100 numbers - 3 skipped)", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(97);
  });

  test("should output numbers from 1 to 100", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    
    // Проверяем, что есть число 1 и 100
    expect(calls).toContain(1);
    expect(calls).toContain(100);
  });

  test("should NOT output number 13", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    expect(calls).not.toContain(13);
  });

  test("should NOT output number 18", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    expect(calls).not.toContain(18);
  });

  test("should NOT output number 45", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    expect(calls).not.toContain(45);
  });

  test("should output numbers in correct order", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    
    // Проверяем несколько последовательных чисел
    const index12 = calls.indexOf(12);
    const index14 = calls.indexOf(14);
    expect(index14).toBe(index12 + 1); // 12 потом 14 (пропускаем 13)
    
    const index17 = calls.indexOf(17);
    const index19 = calls.indexOf(19);
    expect(index19).toBe(index17 + 1); // 17 потом 19 (пропускаем 18)
    
    const index44 = calls.indexOf(44);
    const index46 = calls.indexOf(46);
    expect(index46).toBe(index44 + 1); // 44 потом 46 (пропускаем 45)
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use continue statement", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/continue/);
  });
});

