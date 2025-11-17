describe('Task 1: Print string "Кот и слон"', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should print "Кот и слон"', () => {
    require("../Задача_1.js");
    expect(consoleLogSpy).toHaveBeenCalledWith("Кот и слон");
  });
});
