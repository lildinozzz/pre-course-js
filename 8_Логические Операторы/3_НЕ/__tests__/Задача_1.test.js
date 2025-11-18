describe("Task 1: NOT operator - work schedule", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 'Это рабочий час' when hour is 10", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 10;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это рабочий час");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output 'Это обеденный перерыв' when hour is 13", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 13;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это обеденный перерыв");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output 'Это нерабочее время' when hour is 18", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 18;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это нерабочее время");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output 'Это рабочий час' when hour is 9 (start of work)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 9;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это рабочий час");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output 'Это рабочий час' when hour is 14 (after lunch)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 14;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это рабочий час");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output 'Это нерабочее время' when hour is 7 (before work)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 7;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это нерабочее время");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output 'Это нерабочее время' when hour is 20 (after work)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 20;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это нерабочее время");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use NOT operator (!)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/!/);
  });

  test("should use AND operator (&&)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/&&/);
  });

  test("should have if-else if-else structure", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/if\s*\(/);
    expect(code).toMatch(/else\s+if\s*\(/);
    expect(code).toMatch(/else\s*{/);
  });

  test("should output exactly one message for any hour", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    
    for (let testHour = 0; testHour <= 23; testHour++) {
      const modifiedCode = code.replace(/const hour = \d+;/, `const hour = ${testHour};`);
      
      jest.resetModules();
      consoleLogSpy.mockClear();
      
      eval(modifiedCode);
      
      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    }
  });

  test("should correctly handle lunch break hour 13", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const hour = \d+;/, "const hour = 13;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Это обеденный перерыв");
    expect(consoleLogSpy).not.toHaveBeenCalledWith("Это рабочий час");
    expect(consoleLogSpy).not.toHaveBeenCalledWith("Это нерабочее время");
  });
});

