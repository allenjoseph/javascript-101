import assert from "node:assert";

(function testSpreadOperator() {
  console.log("Spread operator");

  const yellow = "yellow";
  const rgbColors = ["red", "green", "blue"];

  const colors = [yellow, ...rgbColors];

  assert.strictEqual(colors.length, 4);
})();
