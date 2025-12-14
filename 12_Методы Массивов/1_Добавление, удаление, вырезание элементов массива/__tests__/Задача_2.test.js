describe("Task 2: Extract elements between two 'x' using slice", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output array [5, 6, 7, 8, 9]", () => {
    require("../Задача_2");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result).toEqual([5, 6, 7, 8, 9]);
  });

  test("should have 5 elements", () => {
    require("../Задача_2");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result.length).toBe(5);
  });

  test("should not contain 'x'", () => {
    require("../Задача_2");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result).not.toContain("x");
  });

  test("should start with 5 and end with 9", () => {
    require("../Задача_2");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result[0]).toBe(5);
    expect(result[result.length - 1]).toBe(9);
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use slice method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.slice\(/);
  });

  test("should find firstXIndex and secondXIndex", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/firstXIndex/);
    expect(code).toMatch(/secondXIndex/);
  });

  test("should have numbersPart constant", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+numbersPart/);
  });
});

