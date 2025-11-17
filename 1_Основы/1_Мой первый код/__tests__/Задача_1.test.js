describe("Task 1: Output greeting", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "Привет, Мир!"', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith("Привет, Мир!");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should consider the case of the letters", () => {
    require("../Задача_1");
    const output = consoleLogSpy.mock.calls[0][0];
    expect(output).toBe("Привет, Мир!");
    expect(output).not.toBe("привет, Мир!");
    expect(output).not.toBe("привет, мир!");
  });
});
