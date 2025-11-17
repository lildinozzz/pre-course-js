describe("Task 1: Operation priority", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("expression with correct parentheses should return 8", () => {
    require("../Задача_1.js");
    expect(consoleLogSpy).toHaveBeenCalledWith(8);
  });
});
