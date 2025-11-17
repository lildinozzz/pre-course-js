describe("Task 2: Remainder of 15 divided by 4", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should print remainder of 15 divided by 4", () => {
    require("../Задача_2.js");
    expect(consoleLogSpy).toHaveBeenCalledWith(3);
  });
});
