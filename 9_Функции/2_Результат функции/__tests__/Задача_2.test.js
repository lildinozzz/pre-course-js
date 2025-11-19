describe("Task 2: Round down number using Math.floor", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 5642", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith(5642);
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use Math.floor function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/Math\.floor/);
  });
});

