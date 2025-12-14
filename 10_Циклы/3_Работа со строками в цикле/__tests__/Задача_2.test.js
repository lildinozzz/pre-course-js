describe("Task 2: Extract vowels from string", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should output vowels from 'я изучаю программирование'", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledWith("яиуаюоаиоаие");
  });

  test("should call console.log exactly once", () => {
    require("../Задача_2");
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
  });

  test("should output string with only vowels", () => {
    require("../Задача_2");
    const output = consoleLogSpy.mock.calls[0][0];

    const vowels = "аеёиоуыэюя";
    for (let char of output) {
      expect(vowels.includes(char.toLowerCase())).toBe(true);
    }
  });

  test("should use for loop", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/for\s*\(/);
  });

  test("should have string variable str", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/const\s+str|let\s+str|var\s+str/);
  });

  test("should contain the original string 'я изучаю программирование'", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toContain("я изучаю программирование");
  });
});
