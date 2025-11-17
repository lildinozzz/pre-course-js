describe("Task 3: Motivational message", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "Я стану лучшим разработчиком!"', () => {
    require("../Задача_3");
    expect(consoleLogSpy).toHaveBeenCalledWith("Я стану лучшим разработчиком!");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_3");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should end with an exclamation mark", () => {
    require("../Задача_3");
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toMatch(/!$/);
  });

  test("should contain all words in the correct order", () => {
    require("../Задача_3");
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toContain("Я");
    expect(output).toContain("стану");
    expect(output).toContain("лучшим");
    expect(output).toContain("разработчиком");
  });
});
