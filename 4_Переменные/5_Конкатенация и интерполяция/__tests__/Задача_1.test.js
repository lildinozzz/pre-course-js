describe("Task 1: String concatenation", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "Москва, Россия"', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Москва, Россия");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use concatenation (+ operator)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\+/);
  });

  test("should declare variables city and country", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+city|let\s+city|var\s+city/);
    expect(code).toMatch(/const\s+country|let\s+country|var\s+country/);
  });
});

