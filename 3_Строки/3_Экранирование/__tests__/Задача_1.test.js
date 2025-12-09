describe("Task 1: Escaping quotes and backslashes", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should print text with quotes and backslashes in one console.log", () => {
    require("../Задача_1.js");

    const expectedText = `Она спросила: "В какой папке лежит проект?"\nОн ответил: "В папке 'C:\\Users\\Elbrus\\MyProject'"`;

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(expectedText);
  });
});
