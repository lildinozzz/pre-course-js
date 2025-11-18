describe("Task 1: Distance calculation with constant velocity", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output first distance (19 * 3 = 57)", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 57);
  });

  test("should output second distance (19 * 8 = 152)", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 152);
  });

  test("should call console.log exactly two times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  test("should use const for velocity", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+velocity/);
  });

  test("should use let for time (variable)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/let\s+time/);
  });
});

