describe("Task 2: Extract word using slice", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 'просто'", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith("просто");
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use slice method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.slice/);
  });
});

