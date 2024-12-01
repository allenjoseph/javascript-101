import assert from "node:assert";

(function testObjectDestructuring() {
  console.log("Object destructuring");

  const { name, lastname } = { name: "John", lastname: "Doe" };

  assert.strictEqual(name, "John");
  assert.strictEqual(lastname, "Doe");
})();
