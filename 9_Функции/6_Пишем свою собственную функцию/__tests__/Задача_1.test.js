describe("Task 1: Create function that prints multiplication row", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should call console.log 9 times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(9);
  });

  test("should output '1 2 3 4 5 6 7 8 9' nine times", () => {
    require("../Задача_1");
    for (let i = 1; i <= 9; i++) {
      expect(consoleLogSpy).toHaveBeenNthCalledWith(i, "1 2 3 4 5 6 7 8 9");
    }
  });

  test("should declare a function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+\w+\s*\(/);
  });
});

