describe("Task 2: Check if number is perfect", () => {
  let isPerfect;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    // Используем Function constructor вместо eval
    isPerfect = new Function(`${code}; return isPerfect;`)();
  });

  test("should return true for 6 (perfect number: 1+2+3=6)", () => {
    expect(isPerfect(6)).toBe(true);
  });

  test("should return true for 28 (perfect number: 1+2+4+7+14=28)", () => {
    expect(isPerfect(28)).toBe(true);
  });

  test("should return false for 12 (not perfect: 1+2+3+4+6=16≠12)", () => {
    expect(isPerfect(12)).toBe(false);
  });

  test("should return false for 10 (not perfect: 1+2+5=8≠10)", () => {
    expect(isPerfect(10)).toBe(false);
  });

  test("should return false for prime number 7", () => {
    expect(isPerfect(7)).toBe(false);
  });

  test("should return false for 1", () => {
    expect(isPerfect(1)).toBe(false);
  });

  test("should return true for 496 (third perfect number)", () => {
    expect(isPerfect(496)).toBe(true);
  });

  test("should define function named isPerfect", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+isPerfect|const\s+isPerfect\s*=|let\s+isPerfect\s*=/);
  });

  test("should use return statement", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/return/);
  });

  test("should use for loop or call sumDivisors function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    const hasForLoop = /for\s*\(/.test(code);
    const callsSumDivisors = /sumDivisors/.test(code);
    expect(hasForLoop || callsSumDivisors).toBe(true);
  });
});
