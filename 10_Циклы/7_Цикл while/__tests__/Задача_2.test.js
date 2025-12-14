describe("Task 2: Least common multiple (LCM)", () => {
  let lcm;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    lcm = new Function(`${code}; return lcm;`)();
  });

  test("should return 12 for lcm(3, 4)", () => {
    expect(lcm(3, 4)).toBe(12);
  });

  test("should return 6 for lcm(2, 3)", () => {
    expect(lcm(2, 3)).toBe(6);
  });

  test("should return 20 for lcm(4, 5)", () => {
    expect(lcm(4, 5)).toBe(20);
  });

  test("should return 30 for lcm(5, 6)", () => {
    expect(lcm(5, 6)).toBe(30);
  });

  test("should return 60 for lcm(12, 15)", () => {
    expect(lcm(12, 15)).toBe(60);
  });

  test("should return 24 for lcm(8, 12)", () => {
    expect(lcm(8, 12)).toBe(24);
  });

  test("should return 10 for lcm(10, 5)", () => {
    expect(lcm(10, 5)).toBe(10);
  });

  test("should return 7 for lcm(7, 7)", () => {
    expect(lcm(7, 7)).toBe(7);
  });

  test("should return 42 for lcm(6, 7)", () => {
    expect(lcm(6, 7)).toBe(42);
  });

  test("should work with different order: lcm(4, 3) = lcm(3, 4)", () => {
    expect(lcm(4, 3)).toBe(12);
    expect(lcm(3, 4)).toBe(12);
  });

  test("should define function named lcm", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+lcm|const\s+lcm\s*=|let\s+lcm\s*=/);
  });

  test("should use while loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/while\s*\(/);
  });

  test("should use return statement", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/return/);
  });

  test("should use modulo operator %", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/%/);
  });
});

