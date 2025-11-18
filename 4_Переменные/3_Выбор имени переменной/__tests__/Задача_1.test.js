describe("Task 1: Choose better variable names", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "name" as better name for first variable', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "name");
  });

  test('should output "age" as better name for second variable', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "age");
  });

  test("should call console.log exactly two times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });
});
