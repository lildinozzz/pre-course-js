describe("Task 3: Operations with x and y", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output remainder (3 % 2 = 1)", () => {
    require("../Задача_3");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 1);
  });

  test("should output power (3 ** 2 = 9)", () => {
    require("../Задача_3");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 9);
  });

  test("should output difference (3 - 2 = 1)", () => {
    require("../Задача_3");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, 1);
  });

  test("should call console.log exactly three times", () => {
    require("../Задача_3");
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });

  test("should declare variables x and y", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_3.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+x|let\s+x|var\s+x/);
    expect(code).toMatch(/const\s+y|let\s+y|var\s+y/);
  });
});

