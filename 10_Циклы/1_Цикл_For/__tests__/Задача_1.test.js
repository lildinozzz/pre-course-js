describe("Task 1: Output practice days using for loop", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "Новый день практики!" message', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Новый день практики!");
  });

  test("should call console.log exactly 45 times (3 phases * 3 weeks * 5 days)", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(45);
  });

  test('all 45 calls should output "Новый день практики!"', () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls;
    calls.forEach((call) => {
      expect(call[0]).toBe("Новый день практики!");
    });
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });
});
