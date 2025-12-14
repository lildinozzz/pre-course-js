describe("Task 2: isAnagram function", () => {
  let isAnagram;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    isAnagram = new Function(`${code}; return isAnagram;`)();
  });

  test("should return true for 'кот' and 'ток'", () => {
    expect(isAnagram('кот', 'ток')).toBe(true);
  });

  test("should return false for 'кот' and 'кит'", () => {
    expect(isAnagram('кот', 'кит')).toBe(false);
  });

  test("should return true for 'удар' and 'руда'", () => {
    expect(isAnagram('удар', 'руда')).toBe(true);
  });

  test("should return true for 'listen' and 'silent'", () => {
    expect(isAnagram('listen', 'silent')).toBe(true);
  });

  test("should return false for different length strings", () => {
    expect(isAnagram('hello', 'helloworld')).toBe(false);
  });

  test("should return true for same strings", () => {
    expect(isAnagram('test', 'test')).toBe(true);
  });

  test("should return true for 'abc' and 'bca'", () => {
    expect(isAnagram('abc', 'bca')).toBe(true);
  });

  test("should return false for 'abc' and 'def'", () => {
    expect(isAnagram('abc', 'def')).toBe(false);
  });

  test("should return true for empty strings", () => {
    expect(isAnagram('', '')).toBe(true);
  });

  test("should return true for 'анаграмма' and 'амаграман'", () => {
    expect(isAnagram('анаграмма', 'амаграман')).toBe(true);
  });

  test("should define function named isAnagram", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+isAnagram|const\s+isAnagram\s*=|let\s+isAnagram\s*=/);
  });

  test("should use split method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.split\(/);
  });

  test("should use sort method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.sort\(/);
  });

  test("should use join method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.join\(/);
  });
});

