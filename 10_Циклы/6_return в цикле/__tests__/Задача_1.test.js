describe("Task 1: Check if number is prime", () => {
  let isPrime;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    isPrime = new Function(`${code}; return isPrime;`)();
  });

  test("should return true for prime number 2", () => {
    expect(isPrime(2)).toBe(true);
  });

  test("should return true for prime number 3", () => {
    expect(isPrime(3)).toBe(true);
  });

  test("should return true for prime number 5", () => {
    expect(isPrime(5)).toBe(true);
  });

  test("should return true for prime number 7", () => {
    expect(isPrime(7)).toBe(true);
  });

  test("should return true for prime number 11", () => {
    expect(isPrime(11)).toBe(true);
  });

  test("should return true for prime number 13", () => {
    expect(isPrime(13)).toBe(true);
  });

  test("should return true for prime number 17", () => {
    expect(isPrime(17)).toBe(true);
  });

  test("should return true for prime number 97", () => {
    expect(isPrime(97)).toBe(true);
  });

  test("should return false for composite number 4", () => {
    expect(isPrime(4)).toBe(false);
  });

  test("should return false for composite number 6", () => {
    expect(isPrime(6)).toBe(false);
  });

  test("should return false for composite number 8", () => {
    expect(isPrime(8)).toBe(false);
  });

  test("should return false for composite number 9", () => {
    expect(isPrime(9)).toBe(false);
  });

  test("should return false for composite number 10", () => {
    expect(isPrime(10)).toBe(false);
  });

  test("should return false for composite number 100", () => {
    expect(isPrime(100)).toBe(false);
  });

  test("should return false for 1 (not prime by definition)", () => {
    expect(isPrime(1)).toBe(false);
  });

  test("should define function named isPrime", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+isPrime|const\s+isPrime\s*=|let\s+isPrime\s*=/);
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use return statement in loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/return/);
  });

  test("should use modulo operator %", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/%/);
  });
});

