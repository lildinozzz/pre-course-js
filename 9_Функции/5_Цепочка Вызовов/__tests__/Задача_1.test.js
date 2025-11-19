describe("Task 1: Chain methods on string", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 'ОЧУ УЧИТЬ JAVASCRIPT'", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("ОЧУ УЧИТЬ JAVASCRIPT");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use trim, toUpperCase, and slice methods", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/trim/);
    expect(code).toMatch(/toUpperCase/);
    expect(code).toMatch(/slice/);
  });
});

