describe("Task 3: Value of expression √5 - 9", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should print value of √5 - 9", () => {
    require("../Задача_3.js");
    const expectedValue = Math.sqrt(5) - 9;
    expect(consoleLogSpy).toHaveBeenCalledWith(expectedValue);
  });
});
