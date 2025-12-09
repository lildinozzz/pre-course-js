describe("Task 2: Print string with quotes and its length", () => {
  let consoleLogSpy;

  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    require("../Задача_2.js");
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

  test('should print "Кот сказал: "Мяу!""', () => {
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Кот сказал: "Мяу!"');
  });

  test("should print the length of the string (18)", () => {
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, 18);
  });
});
