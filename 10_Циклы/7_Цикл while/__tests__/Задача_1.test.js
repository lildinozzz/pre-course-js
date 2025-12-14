describe("Task 1: Print squares less than 100 using while", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output squares: 1, 4, 9, 16, 25, 36, 49, 64, 81", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(4);
    expect(consoleLogSpy).toHaveBeenCalledWith(9);
    expect(consoleLogSpy).toHaveBeenCalledWith(16);
    expect(consoleLogSpy).toHaveBeenCalledWith(25);
    expect(consoleLogSpy).toHaveBeenCalledWith(36);
    expect(consoleLogSpy).toHaveBeenCalledWith(49);
    expect(consoleLogSpy).toHaveBeenCalledWith(64);
    expect(consoleLogSpy).toHaveBeenCalledWith(81);
  });

  test("should call console.log exactly 9 times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(9);
  });

  test("should NOT output 100 or higher", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    calls.forEach(value => {
      expect(value).toBeLessThan(100);
    });
  });

  test("should output squares in correct order", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls.map(call => call[0]);
    expect(calls).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81]);
  });

  test("should use while loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/while\s*\(/);
  });
});

