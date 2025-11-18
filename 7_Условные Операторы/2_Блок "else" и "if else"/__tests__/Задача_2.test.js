describe("Task 2: Quadratic equation roots count", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output correct message when discriminant is negative (no roots)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(
      /const a = \d+;\s*const b = \d+;\s*const c = \d+;/,
      "const a = 1; const b = 1; const c = 1;"
    );
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Нет корней");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output correct message when discriminant is zero (one root)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(
      /const a = \d+;\s*const b = \d+;\s*const c = \d+;/,
      "const a = 1; const b = 2; const c = 1;"
    );
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Один корень");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output correct message when discriminant is positive (two roots)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(
      /const a = \d+;\s*const b = \d+;\s*const c = \d+;/,
      "const a = 1; const b = 5; const c = 1;"
    );
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Два различных корня");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use if-else if-else structure", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/if\s*\(/);
    expect(code).toMatch(/else/);
  });

  test("should check discriminant value", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/discriminant\s*[<>=]/);
  });

  test("should wrap console.log statements in conditions", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    const ifBlocks = code.match(/if[\s\S]*?{[\s\S]*?console\.log/g);
    expect(ifBlocks).toBeTruthy();
  });

  test("should output only one message based on discriminant", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });
});

