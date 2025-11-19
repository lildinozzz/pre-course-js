describe("Task 2: Round number using Math.round", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 8", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith(8);
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use Math.round function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/Math\.round/);
  });
});

