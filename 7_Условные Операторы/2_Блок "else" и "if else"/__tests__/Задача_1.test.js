describe("Task 1: Teenager age check with else if", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output correct message for age 13", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const age = \d+;/, "const age = 13;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("Геннадию 13 лет")
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("тинейджером")
    );
  });

  test("should output correct message for age 19", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const age = \d+;/, "const age = 19;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("Геннадию 19 лет")
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringContaining("тинейджером")
    );
  });

  test("should output correct message for age less than 13", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const age = \d+;/, "const age = 10;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith("Геннадий весьма юн.");
  });

  test("should output correct message for age greater than 19", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const modifiedCode = code.replace(/const age = \d+;/, "const age = 25;");
    
    jest.resetModules();
    consoleLogSpy.mockClear();
    
    eval(modifiedCode);
    
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Геннадий возмужал. Тинейджером его точно не назовёшь."
    );
  });

  test("should use if-else if-else structure", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/if\s*\(/);
    expect(code).toMatch(/else\s+if\s*\(/);
    expect(code).toMatch(/else\s*{/);
  });

  test("should fix the condition to include 13 and 19", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/age\s*>=\s*13|13\s*<=\s*age/);
    expect(code).toMatch(/age\s*<=\s*19|age\s*<\s*20|19\s*>=\s*age|20\s*>\s*age/);
  });
});

