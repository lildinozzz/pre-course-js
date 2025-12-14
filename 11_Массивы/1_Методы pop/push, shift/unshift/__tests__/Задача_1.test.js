describe("Task 1: Manage books array with push/pop/shift/unshift", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output array length of 3", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    expect(calls[0]).toBe(3);
  });

  test("should output final array with 3 books", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    const finalArray = calls[1];
    
    expect(finalArray.length).toBe(3);
  });

  test("should have 'Ложная слепота' in the array", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    const finalArray = calls[1];
    
    expect(finalArray).toContain("Ложная слепота");
  });

  test("should have 'История твоей жизни' in the array", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    const finalArray = calls[1];
    
    expect(finalArray).toContain("История твоей жизни");
  });

  test("should NOT contain 'Хоббит' (was removed)", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    const finalArray = calls[1];
    
    expect(finalArray).not.toContain("Хоббит");
  });

  test("should NOT contain 'Сильмариллион' (was removed)", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    const finalArray = calls[1];
    
    expect(finalArray).not.toContain("Сильмариллион");
  });

  test("should contain 'Сами боги'", () => {
    require("../Задача_1");
    const calls = consoleLogSpy.mock.calls[0];
    const finalArray = calls[1];
    
    expect(finalArray).toContain("Сами боги");
  });

  test("should call console.log exactly once", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should use push method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.push\(/);
  });

  test("should use unshift method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.unshift\(/);
  });

  test("should use shift method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.shift\(/);
  });

  test("should use pop or shift to remove Сильмариллион", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    // Должен использовать либо pop либо shift для удаления
    const hasRemoveMethods = (code.match(/\.pop\(/g) || []).length + (code.match(/\.shift\(/g) || []).length >= 2;
    expect(hasRemoveMethods).toBe(true);
  });

  test("should start with empty array const books = []", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_1.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+books\s*=\s*\[\]/);
  });
});
