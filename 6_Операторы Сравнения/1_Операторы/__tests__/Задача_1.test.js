describe("Task 1: Fix comparison operators", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("first comparison should output false", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, false);
  });

  test("second comparison should output true", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, true);
  });

  test("third comparison should output true", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, true);
  });

  test("should call console.log exactly three times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });

  test("should use comparison operators", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/[=!<>]{1,3}/);
  });

  test("should fix the operators to get correct results", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls;
    expect(calls[0][0]).toBe(false);
    expect(calls[1][0]).toBe(true);
    expect(calls[2][0]).toBe(true);
  });
});
