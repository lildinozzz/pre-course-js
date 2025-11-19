describe("Task 1: Create printRow function with parameter", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should call console.log 9 times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(9);
  });

  test("should output correct multiplication rows", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "1 2 3 4 5 6 7 8 9");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "2 4 6 8 10 12 14 16 18");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, "3 6 9 12 15 18 21 24 27");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, "4 8 12 16 20 24 28 32 36");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, "5 10 15 20 25 30 35 40 45");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, "6 12 18 24 30 36 42 48 54");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, "7 14 21 28 35 42 49 56 63");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(8, "8 16 24 32 40 48 56 64 72");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(9, "9 18 27 36 45 54 63 72 81");
  });

  test("should declare printRow function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+printRow\s*\(/);
  });
});

