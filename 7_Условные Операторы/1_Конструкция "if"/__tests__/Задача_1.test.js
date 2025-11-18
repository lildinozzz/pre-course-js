describe("Task 1: if statement - number range check", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output message when number is 42', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Число больше нуля, но меньше ста");
  });

  test("should call console.log exactly one time for valid number", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use if statement", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/if\s*\(/);
  });

  test("should check if number is greater than 0 and less than 100", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/number\s*>\s*0|0\s*<\s*number/);
    expect(code).toMatch(/number\s*<\s*100|100\s*>\s*number/);
  });

  test("should have console.log inside if block", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/if.*{[\s\S]*console\.log/);
  });
});

