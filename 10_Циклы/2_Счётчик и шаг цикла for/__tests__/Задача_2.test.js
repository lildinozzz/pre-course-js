describe("Task 2: Output alternating x and y pattern", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should call console.log exactly 10 times (0 to 9)", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(10);
  });

  test("should output correct pattern: x, x, y, x, x, y, x, x, y, x", () => {
    require("../Задача_2");
    const calls = consoleLogSpy.mock.calls;

    expect(calls[0][0]).toBe("0. x");
    expect(calls[1][0]).toBe("1. x");
    expect(calls[2][0]).toBe("2. y");
    expect(calls[3][0]).toBe("3. x");
    expect(calls[4][0]).toBe("4. x");
    expect(calls[5][0]).toBe("5. y");
    expect(calls[6][0]).toBe("6. x");
    expect(calls[7][0]).toBe("7. x");
    expect(calls[8][0]).toBe("8. y");
    expect(calls[9][0]).toBe("9. x");
  });

  test("should have y at positions 2, 5, and 8", () => {
    require("../Задача_2");
    const calls = consoleLogSpy.mock.calls;

    expect(calls[2][0]).toContain("y");
    expect(calls[5][0]).toContain("y");
    expect(calls[8][0]).toContain("y");
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use if statement", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/if\s*\(/);
  });

  test("should use modulo operator %", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/%/);
  });
});
