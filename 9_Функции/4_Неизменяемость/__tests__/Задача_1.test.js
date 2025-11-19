describe("Task 1: Convert to string and slice", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output '5642.71' first and '.71' second", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "5642.71");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, ".71");
  });

  test("should call console.log exactly two times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  test("should use toString method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/toString/);
  });
});

