describe("Task 1: Sum of 12 and 34", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should print sum of 12 and 34", () => {
    require("../Задача_1.js");
    expect(consoleLogSpy).toHaveBeenCalledWith(46);
  });
});
