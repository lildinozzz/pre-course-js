describe("Task 2: Print string with quotes and its length", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should print "Кот сказал: "Мяу!""', () => {
    require("../Задача_2.js");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Кот сказал: "Мяу!"');
  });

  test("should print the length of the string (18)", () => {
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 18);
  });
});
