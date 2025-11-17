describe("Task 2: Concatenate words into sentence", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should print "Мне нравится учить JS"', () => {
    require("../Задача_2.js");
    expect(consoleLogSpy).toHaveBeenCalledWith("Мне нравится учить JS");
  });
});
