describe("Task 2: scream function - convert strings to uppercase", () => {
  let scream;

  beforeEach(() => {
    jest.resetModules();
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    scream = new Function(`${code}; return scream;`)();
  });

  test("should convert ['apple', 'banana', 'orange'] to uppercase", () => {
    const result = scream(['apple', 'banana', 'orange']);
    expect(result).toEqual(['APPLE', 'BANANA', 'ORANGE']);
  });

  test("should convert ['hello', 'world'] to uppercase", () => {
    const result = scream(['hello', 'world']);
    expect(result).toEqual(['HELLO', 'WORLD']);
  });

  test("should convert ['привет', 'мир'] to uppercase", () => {
    const result = scream(['привет', 'мир']);
    expect(result).toEqual(['ПРИВЕТ', 'МИР']);
  });

  test("should handle empty array", () => {
    const result = scream([]);
    expect(result).toEqual([]);
  });

  test("should handle single element array", () => {
    const result = scream(['test']);
    expect(result).toEqual(['TEST']);
  });

  test("should return a new array", () => {
    const input = ['apple', 'banana'];
    const result = scream(input);
    expect(result).not.toBe(input);
    expect(input).toEqual(['apple', 'banana']); // original unchanged
  });

  test("should use forEach method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.forEach\(/);
  });

  test("should use toUpperCase method", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/\.toUpperCase\(/);
  });

  test("should define function named scream", () => {
    const code = require("fs").readFileSync(
      require("path").resolve(__dirname, "../Задача_2.js"),
      "utf-8"
    );
    expect(code).toMatch(/function\s+scream|const\s+scream\s*=|let\s+scream\s*=/);
  });
});

