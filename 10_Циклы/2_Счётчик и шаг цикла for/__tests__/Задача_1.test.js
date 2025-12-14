describe("Task 1: Output squares of even numbers from 1 to 10", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output squares of even numbers: 4, 16, 36, 64, 100", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith(4);
    expect(consoleLogSpy).toHaveBeenCalledWith(16);
    expect(consoleLogSpy).toHaveBeenCalledWith(36);
    expect(consoleLogSpy).toHaveBeenCalledWith(64);
    expect(consoleLogSpy).toHaveBeenCalledWith(100);
  });

  test("should call console.log exactly 5 times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(5);
  });

  test("should output squares in correct order", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls;
    expect(calls[0][0]).toBe(4);
    expect(calls[1][0]).toBe(16);
    expect(calls[2][0]).toBe(36);
    expect(calls[3][0]).toBe(64);
    expect(calls[4][0]).toBe(100);
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use step i += 2", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/i\s*\+\=\s*2|i\s*\=\s*i\s*\+\s*2/);
  });
});
