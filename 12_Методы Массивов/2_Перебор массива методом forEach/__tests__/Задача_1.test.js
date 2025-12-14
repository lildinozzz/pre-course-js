describe("Task 1: Create odds array using forEach", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output array of odd numbers", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result).toEqual([1, 33, 201, 113]);
  });

  test("should contain only odd numbers", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    result.forEach(num => {
      expect(num % 2).toBe(1);
    });
  });

  test("should have 4 elements", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result.length).toBe(4);
  });

  test("should not contain even numbers", () => {
    require("../Задача_1");
    const result = consoleLogSpy.mock.calls[0][0];
    expect(result).not.toContain(44);
    expect(result).not.toContain(90);
    expect(result).not.toContain(56);
    expect(result).not.toContain(30);
    expect(result).not.toContain(888);
  });

  test("should use forEach method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.forEach\(/);
  });

  test("should have odds variable", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/odds/);
  });
});

