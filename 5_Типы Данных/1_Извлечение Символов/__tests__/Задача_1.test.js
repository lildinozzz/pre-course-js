describe("Task 1: Extract last character from string", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output the last character", () => {
    require("../Задача_1");
    const output = consoleLogSpy.mock.calls[0][0];
    expect(typeof output).toBe("string");
    expect(output).toBe("к");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use bracket notation or charAt method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\[|\bcharAt\b/);
  });

  test("should use dynamic index (length - 1) to get last character", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/length\s*-\s*1|\.length\s*-\s*1/);
  });
});
