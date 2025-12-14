describe("Task 1: Sum of divisors (excluding the number itself)", () => {
  let sumDivisors;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    // Используем Function constructor вместо eval
    sumDivisors = new Function(`${code}; return sumDivisors;`)();
  });

  test("should return 16 for n = 12 (1+2+3+4+6)", () => {
    expect(sumDivisors(12)).toBe(16);
  });

  test("should return 1 for n = 2 (only divisor is 1)", () => {
    expect(sumDivisors(2)).toBe(1);
  });

  test("should return 1 for prime number n = 7", () => {
    expect(sumDivisors(7)).toBe(1);
  });

  test("should return 8 for n = 10 (1+2+5)", () => {
    expect(sumDivisors(10)).toBe(8);
  });

  test("should return 15 for n = 16 (1+2+4+8)", () => {
    expect(sumDivisors(16)).toBe(15);
  });

  test("should return 117 for n = 100", () => {
    expect(sumDivisors(100)).toBe(117);
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should define function named sumDivisors", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+sumDivisors|const\s+sumDivisors\s*=|let\s+sumDivisors\s*=/);
  });

  test("should use modulo operator %", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/%/);
  });
});
