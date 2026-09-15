const myFunctions = require("./sample-functions.js");

test("divides two positive numbers", () => {
	expect(myFunctions.div(12, 3)).toBe(4);
});

test("divides negative numbers", () => {
	expect(myFunctions.div(-10, 2)).toBe(-5);
});

test("finds a number in text", () => {
	expect(myFunctions.containsNumbers("hello7")).toBe(true);
});

test("returns false when text has no numbers", () => {
	expect(myFunctions.containsNumbers("hello")).toBe(false);
});

test("returns false for text containing spaces but no numbers", () => {
	expect(myFunctions.containsNumbers("hello world")).toBe(false);
});