import assert from "node:assert";

(function testDefaultParams() {
  console.log("Default params");

  const multiply = (a, b = 1) => {
    return a * b;
  };

  assert.strictEqual(multiply(5), 5);
})();
