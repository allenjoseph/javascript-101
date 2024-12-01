import assert from "node:assert";

console.log("\nES6 features\n- - - - - - - - - - -");

(function testExponentiation() {
  console.log("Exponentiation");

  assert.strictEqual(2 ** 3, Math.pow(2, 3));
})();
