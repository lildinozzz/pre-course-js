describe("Task 2: findFirstNumberBetween function", () => {
  let findFirstNumberBetween;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    findFirstNumberBetween = new Function(`${code}; return findFirstNumberBetween;`)();
  });

  test("should return 1 for [5, -10, 1, 22, 8, 7], start=0, end=3", () => {
    expect(findFirstNumberBetween([5, -10, 1, 22, 8, 7], 0, 3)).toBe(1);
  });

  test("should return 5 for [5, -10, 1, 22, 8, 7], start=5, end=10", () => {
    expect(findFirstNumberBetween([5, -10, 1, 22, 8, 7], 5, 10)).toBe(5);
  });

  test("should return 8 for [5, -10, 1, 22, 8, 7], start=8, end=15", () => {
    expect(findFirstNumberBetween([5, -10, 1, 22, 8, 7], 8, 15)).toBe(8);
  });

  test("should return undefined if no number in range", () => {
    expect(findFirstNumberBetween([5, -10, 1, 22, 8, 7], 50, 100)).toBe(undefined);
  });

  test("should return number at boundary (start)", () => {
    expect(findFirstNumberBetween([10, 20, 30], 10, 15)).toBe(10);
  });

  test("should return number at boundary (end)", () => {
    expect(findFirstNumberBetween([5, 15, 25], 10, 15)).toBe(15);
  });

  test("should return first matching number, not any", () => {
    expect(findFirstNumberBetween([100, 200, 5, 10], 0, 50)).toBe(5);
  });

  test("should handle negative ranges", () => {
    expect(findFirstNumberBetween([5, -10, -5, 0, 10], -8, -3)).toBe(-5);
  });

  test("should return undefined for empty array", () => {
    expect(findFirstNumberBetween([], 0, 10)).toBe(undefined);
  });

  test("should define function named findFirstNumberBetween", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+findFirstNumberBetween|const\s+findFirstNumberBetween\s*=|let\s+findFirstNumberBetween\s*=/);
  });

  test("should use find method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.find\(/);
  });
});

