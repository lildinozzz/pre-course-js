describe("Task 2: Create sum function", () => {
  let sum;

  beforeAll(() => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    sum = new Function(`${code}; return sum;`)();
  });

  test("should declare sum function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+sum\s*\(/);
  });

  test("sum(2, 3) should return 5", () => {
    expect(sum(2, 3)).toBe(5);
  });

  test("sum(10, 15) should return 25", () => {
    expect(sum(10, 15)).toBe(25);
  });

  test("sum(-5, 5) should return 0", () => {
    expect(sum(-5, 5)).toBe(0);
  });

  test("sum(0, 0) should return 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
});
