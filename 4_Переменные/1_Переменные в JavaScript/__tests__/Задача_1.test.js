describe("Task 1: Declare mountain variable", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "Elbrus"', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Elbrus");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should declare variable mountain", () => {
    expect(() => {
      require("../Задача_1");
    }).not.toThrow(ReferenceError);
  });
});
