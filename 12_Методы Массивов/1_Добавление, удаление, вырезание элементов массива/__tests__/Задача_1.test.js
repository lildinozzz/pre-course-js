describe("Task 1: Remove 'x' from yArray using splice", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output array without 'x'", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result).not.toContain("x");
  });

  test("should have 11 elements (12 - 1)", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result.length).toBe(11);
  });

  test("should contain only 'y' elements", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    result.forEach(element => {
      expect(element).toBe("y");
    });
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use splice method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.splice\(/);
  });

  test("should find xIndex", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/xIndex/);
  });
});

