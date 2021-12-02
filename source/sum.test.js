const sum = require("./sum.js");

test("sum(a, b)", () => {
  expect(sum(1, 2)).toBe(3);
});
