import assert from "node:assert";

console.log("\nES6 features\n- - - - - - - - - - -");

(function testArrayDestructuring() {
  console.log("Array destructuring");

  const [name, lastname] = ["John", "Doe"];

  assert.strictEqual(name, "John");
  assert.strictEqual(lastname, "Doe");
})();
