describe("Task 1: areAllPositive function", () => {
  let areAllPositive;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    areAllPositive = new Function(`${code}; return areAllPositive;`)();
  });

  test("should return true for all positive numbers", () => {
    expect(areAllPositive([1, 2, 3, 4, 5])).toBe(true);
  });

  test("should return true for array with zero and positive numbers", () => {
    expect(areAllPositive([0, 1, 2, 3])).toBe(true);
  });

  test("should return false if array contains negative number", () => {
    expect(areAllPositive([1, 2, -3, 4])).toBe(false);
  });

  test("should return false for all negative numbers", () => {
    expect(areAllPositive([-1, -2, -3])).toBe(false);
  });

  test("should return true for array with single positive number", () => {
    expect(areAllPositive([5])).toBe(true);
  });

  test("should return false for array with single negative number", () => {
    expect(areAllPositive([-5])).toBe(false);
  });

  test("should return true for empty array", () => {
    expect(areAllPositive([])).toBe(true);
  });

  test("should return false for mixed positive and negative", () => {
    expect(areAllPositive([10, 20, -1, 30])).toBe(false);
  });

  test("should define function named areAllPositive", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+areAllPositive|const\s+areAllPositive\s*=|let\s+areAllPositive\s*=/);
  });

  test("should use every or some method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const usesEvery = /\.every\(/.test(code);
    const usesSome = /\.some\(/.test(code);
    expect(usesEvery || usesSome).toBe(true);
  });
});

