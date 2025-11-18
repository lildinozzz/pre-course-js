describe("Task 1: Construct word from characters (immutability)", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "elbrus"', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("elbrus");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use bracket notation to extract characters", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\[.*\]/);
  });

  test("should use dynamic indices with length property", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.length/);
  });

  test("should construct the word correctly (penultimate + 6th + 4th + last + 1st + 5th)", () => {
    require("../Задача_1");
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toBe("elbrus");
  });

  test("should use concatenation or interpolation", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\+|`/);
  });
});
