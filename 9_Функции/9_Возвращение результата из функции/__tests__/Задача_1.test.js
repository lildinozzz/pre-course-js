describe("Task 1: Create compareStrings function", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should call console.log 3 times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
  });

  test("compareStrings('JavaScript', 'Java') should return 'JavaScript'", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "JavaScript");
  });

  test("compareStrings('Java', 'Ruby') should return 'Строки равны по длине'", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "Строки равны по длине");
  });

  test("compareStrings('Rust', 'Python') should return 'Python'", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, "Python");
  });

  test("should declare compareStrings function", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+compareStrings\s*\(/);
  });
});

