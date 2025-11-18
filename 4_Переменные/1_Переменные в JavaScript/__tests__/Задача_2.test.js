describe("Task 2: Convert Celsius to Fahrenheit", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 77 (25°C = 77°F)", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith(77);
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should declare variable celsius", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+celsius|let\s+celsius|var\s+celsius/);
  });

  test("should declare variable fahrenheit", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+fahrenheit|let\s+fahrenheit|var\s+fahrenheit/);
  });
});

