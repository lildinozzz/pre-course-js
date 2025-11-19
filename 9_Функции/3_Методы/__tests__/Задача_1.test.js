describe("Task 1: Find position of word using indexOf", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 11 (position of 'просто')", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledWith(11);
  });

  test("should call console.log exactly one time", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use indexOf method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/indexOf/);
  });
});

