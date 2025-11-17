describe("Task 2: Output three words", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output three words: Code, Bug, Feature", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "Код");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Баг");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, "Фича");
  });

  test("should call console.log exactly three times", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });

  test("should output the words in the correct order", () => {
    require("../Задача_2");
    const calls = consoleLogSpy.mock.calls;
    expect(calls[0][0]).toBe("Код");
    expect(calls[1][0]).toBe("Баг");
    expect(calls[2][0]).toBe("Фича");
  });

  test("each word should be outputted as a separate console.log call", () => {
    require("../Задача_2");
    const calls = consoleLogSpy.mock.calls;
    calls.forEach((call) => {
      expect(call.length).toBe(1);
      expect(typeof call[0]).toBe("string");
    });
  });
});
