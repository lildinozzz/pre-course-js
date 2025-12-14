describe("Task 1: Reverse string using loop", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test("should reverse 'hello' to 'olleh'", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );

    // Выполняем код и тестируем функцию
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("hello")).toBe("olleh");
  });

  test("should reverse 'javascript' to 'tpircsavaj'", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("javascript")).toBe("tpircsavaj");
  });

  test("should reverse 'abc' to 'cba'", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("abc")).toBe("cba");
  });

  test("should handle single character", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("a")).toBe("a");
  });

  test("should handle empty string", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("")).toBe("");
  });

  test("should handle strings with spaces", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("hello world")).toBe("dlrow olleh");
  });

  test("should handle Russian characters", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const reverseFunc = eval(`${code}; reverse`);
    expect(reverseFunc("привет")).toBe("тевирп");
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use reverse iteration (i-- or decrement)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/i\-\-|i\s*\-\=\s*1|i\s*\=\s*i\s*\-\s*1/);
  });

  test("should define function named reverse", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(
      /function\s+reverse|const\s+reverse\s*=|let\s+reverse\s*=/
    );
  });
});
