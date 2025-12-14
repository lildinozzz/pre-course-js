describe("Task 1: positiveSquares function", () => {
  let positiveSquares;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    positiveSquares = new Function(`${code}; return positiveSquares;`)();
  });

  test("should return [16, 9, 81] for [-2, 4, -5, 3, 9]", () => {
    expect(positiveSquares([-2, 4, -5, 3, 9])).toEqual([16, 9, 81]);
  });

  test("should return [0, 100] for [-10, 0, 10]", () => {
    expect(positiveSquares([-10, 0, 10])).toEqual([0, 100]);
  });

  test("should return [1, 4, 9] for [1, 2, 3]", () => {
    expect(positiveSquares([1, 2, 3])).toEqual([1, 4, 9]);
  });

  test("should return [] for all negative numbers", () => {
    expect(positiveSquares([-1, -2, -3])).toEqual([]);
  });

  test("should return [25] for [-5, 5]", () => {
    expect(positiveSquares([-5, 5])).toEqual([25]);
  });

  test("should handle empty array", () => {
    expect(positiveSquares([])).toEqual([]);
  });

  test("should return [1, 4, 9, 16, 25] for [1, 2, 3, 4, 5]", () => {
    expect(positiveSquares([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
  });

  test("should include zero squared", () => {
    expect(positiveSquares([0])).toEqual([0]);
  });

  test("should define function named positiveSquares", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+positiveSquares|const\s+positiveSquares\s*=|let\s+positiveSquares\s*=/);
  });

  test("should use filter or map method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    const usesFilter = /\.filter\(/.test(code);
    const usesMap = /\.map\(/.test(code);
    expect(usesFilter || usesMap).toBe(true);
  });
});

