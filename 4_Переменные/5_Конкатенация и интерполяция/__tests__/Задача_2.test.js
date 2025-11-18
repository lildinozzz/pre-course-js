describe("Task 2: String interpolation", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "Текущее время: 12:15"', () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith("Текущее время: 12:15");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use template literals (backticks)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/`.*\${.*}.*`/);
  });

  test("should declare variables hours and minutes", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+hours|let\s+hours|var\s+hours/);
    expect(code).toMatch(/const\s+minutes|let\s+minutes|var\s+minutes/);
  });
});

