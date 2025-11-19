describe("Task 1: Find minimum and round it", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 2", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith(2);
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use Math.min and Math.round functions", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/Math\.min/);
    expect(code).toMatch(/Math\.round/);
  });
});

