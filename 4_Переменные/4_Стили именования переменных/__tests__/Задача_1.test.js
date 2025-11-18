describe("Task 1: Convert variable names to different naming styles", () => {
  let consoleLogSpy;

  beforeEach(() => {
    jest.resetModules();
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should output "firstName" (camelCase)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, "firstName");
  });

  test('should output "lastName" (camelCase)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(2, "lastName");
  });

  test('should output "AGE" (UPPER_SNAKE_CASE)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(3, "AGE");
  });

  test('should output "MOBILE_PHONE" (UPPER_SNAKE_CASE)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(4, "MOBILE_PHONE");
  });

  test('should output "user_email" (snake_case)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(5, "user_email");
  });

  test('should output "DateOfBirth" (PascalCase)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(6, "DateOfBirth");
  });

  test('should output "Address" (PascalCase)', () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenNthCalledWith(7, "Address");
  });

  test("should call console.log exactly seven times", () => {
    require("../Задача_1");
    expect(consoleLogSpy).toHaveBeenCalledTimes(7);
  });
});

