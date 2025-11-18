describe("Task 1: AND operator - working hours", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output message when hour is 10 (working hour)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 10;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это рабочий час");
  });

  test("should output message when hour is 9 (edge case - start)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 9;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это рабочий час");
  });

  test("should output message when hour is 18 (edge case - end)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 18;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это рабочий час");
  });

  test("should not output message when hour is 8 (before work)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 8;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  test("should not output message when hour is 19 (after work)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 19;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });

  test("should use AND operator (&&)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/&&/);
  });

  test("should check if hour is between 9 and 18 inclusive", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/hour\s*>=\s*9|9\s*<=\s*hour/);
    expect(code).toMatch(/hour\s*<=\s*18|18\s*>=\s*hour/);
  });
});

