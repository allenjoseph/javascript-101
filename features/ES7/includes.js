import assert from "node:assert";

(function testIncludes() {
  console.log("Includes");

  const fruits = ["apple", "banana", "mango", "guava"];

  assert.strictEqual(fruits.includes("banana"), true);
  assert.strictEqual(fruits.includes("banana", 2), false);
  assert.strictEqual(fruits.includes("orange"), false);
})();
