describe("Task 1: Addition vs concatenation", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should print sum of numbers 10 and 20", () => {
    require("../Задача_1.js");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 30);
  });

  test("should print concatenation of strings '10' and '20'", () => {
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "1020");
  });

  test("should call console.log twice", () => {
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });
});
