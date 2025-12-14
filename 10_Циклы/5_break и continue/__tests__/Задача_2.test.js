describe("Task 2: Print first word from string", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output 'Javascript' for 'Javascript не так уж сложен'", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith("Javascript");
  });

  test("should output 'Раз' for 'Раз два три'", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith("Раз");
  });

  test("should call console.log exactly 2 times", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
  });

  test("should output first words in correct order", () => {
    require("../Задача_2");
    const calls = consoleLogSpy.mock.calls;
    expect(calls[0][0]).toBe("Javascript");
    expect(calls[1][0]).toBe("Раз");
  });

  test("should define function named printFirstWord", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+printFirstWord|const\s+printFirstWord\s*=|let\s+printFirstWord\s*=/);
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should use break statement", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/break/);
  });

  test("should check for space character", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    // Проверяем, что есть проверка на пробел
    expect(code).toMatch(/[===|!==]\s*['"]?\s['"]?|['"]?\s['"]?\s*[===|!==]/);
  });

  test("function should work with any string", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    
    // Создаем изолированную версию функции для тестирования
    consoleLogSpy.mockClear();
    const printFirstWord = new Function(`${code}; return printFirstWord;`)();
    
    printFirstWord("Hello world");
    expect(consoleLogSpy).toHaveBeenCalledWith("Hello");
  });

  test("function should handle string with single word (no spaces)", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    
    consoleLogSpy.mockClear();
    const printFirstWord = new Function(`${code}; return printFirstWord;`)();
    
    printFirstWord("Javascript");
    expect(consoleLogSpy).toHaveBeenCalledWith("Javascript");
  });
});

