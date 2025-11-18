describe("Task 1: OR operator - non-working hours", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output message when hour is 7 (before 9)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 7;");

    jest.resetModules();
    consoleLogSpy.mockClear();

    eval(modifiedCode);

    expect(consoleLogSpy).toHaveBeenCalledWith("Это нерабочий час");
  });

  test("should output message when hour is 20 (after 18)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 20;");

    jest.resetModules();
    consoleLogSpy.mockClear();

    eval(modifiedCode);

    expect(consoleLogSpy).toHaveBeenCalledWith("Это нерабочий час");
  });

  test("should not output message when hour is 10 (working hour)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 10;");

    jest.resetModules();
    consoleLogSpy.mockClear();

    eval(modifiedCode);

    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  test("should use OR operator (||)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\|\|/);
  });

  test("should check if hour is less than 9 or greater than 18", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/hour\s*<\s*9|9\s*>\s*hour/);
    expect(code).toMatch(/hour\s*>\s*18|18\s*<\s*hour/);
  });

  test("should not output message when hour is 9 (edge case)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 9;");

    jest.resetModules();
    consoleLogSpy.mockClear();

    eval(modifiedCode);

    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  test("should output message when hour is 19 (edge case)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 19;");

    jest.resetModules();
    consoleLogSpy.mockClear();

    eval(modifiedCode);

    expect(consoleLogSpy).toHaveBeenCalledWith("Это нерабочий час");
  });
});
