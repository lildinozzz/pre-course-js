describe("Task 1: Create calculateDelivery function with optional parameters", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should call console.log 3 times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });

  test("calculateDelivery(5) should output 40", () => {
    require("../Задача_1");
    // 5 км * 5 у.е. + 15 у.е. (упаковка) = 40
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 40);
  });

  test("calculateDelivery(7, 'standard', true) should output 50", () => {
    require("../Задача_1");
    // 7 км * 5 у.е. + 15 у.е. (упаковка) = 50
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 50);
  });

  test("calculateDelivery(10, 'express', false) should output 65", () => {
    require("../Задача_1");
    // 10 км * 5 у.е. = 50, + 30% = 65
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 65);
  });

  test("should declare calculateDelivery function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+calculateDelivery\s*\(/);
  });
});

