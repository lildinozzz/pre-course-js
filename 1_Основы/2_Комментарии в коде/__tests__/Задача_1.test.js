const fs = require("fs");
const path = require("path");

describe("Task 1: Comments in code", () => {
  let consoleLogSpy;
  let fileContent;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
    const filePath = path.join(__dirname, "..", "Задача_1.js");
    fileContent = fs.readFileSync(filePath, "utf-8");
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("file should contain a comment", () => {
    expect(fileContent).toMatch(/\/\//);
  });

  test("should print the correct message", () => {
    require("../Задача_1.js");
    expect(consoleLogSpy).toHaveBeenCalledWith("Я учусь писать код");
  });
});
