const countChar = require("./count-letters");

test("countChar function exists", () => {
  expect(typeof countChar).toBe("function");
});

test("countChar has two parameters", () => {
  expect(countChar.length).toBe(2);
});

test("countChar has null parameter(s)", () => {
  expect(countChar(null, "a")).toBe(-1);
});

test("countChar character parameter has length more than 1", () => {
  expect(countChar("toto", "to")).toBe(-1);
});

test("countChar a in a empty string", () => {
  expect(countChar("", "a")).toBe(0);
});

test("countChar b in the string 'bbacbaaa' should return 3", () => {
  expect(countChar("bbacbaaa", "b")).toBe(3);
});

test("countChar a in the string 'aaaaabbbaa' should return 7", () => {
  expect(countChar("aaaaabbbaa", "a")).toBe(7);
});