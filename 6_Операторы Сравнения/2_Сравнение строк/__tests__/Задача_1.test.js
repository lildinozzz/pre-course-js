describe("Task 1: String comparison", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("first comparison should output false", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, false);
  });

  test("second comparison should output true", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, true);
  });

  test("third comparison should output false", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, false);
  });

  test("fourth comparison should output true", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, true);
  });

  test("should call console.log exactly four times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(4);
  });

  test("should use comparison operators instead of ?", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/[<>=!]{1,3}/);
  });

  test("should compare strings correctly", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls;

    expect(calls[0][0]).toBe(false);

    expect(calls[1][0]).toBe(true);

    expect(calls[2][0]).toBe(false);

    expect(calls[3][0]).toBe(true);
  });
});
