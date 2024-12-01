import assert from "node:assert";

(function testObjectLiterals() {
  console.log("Enhanced Object literals");

  const addition = (a, b) => a + b;

  const subtractionKey = "substraction";

  const objectLiteral = {
    addition,
    [subtractionKey]: (a, b) => a - b,
    multiply(a, b) {
      return a * b;
    },
  };

  assert.strictEqual(objectLiteral.addition(3, 2), 5);
  assert.strictEqual(objectLiteral.substraction(3, 2), 1);
  assert.strictEqual(objectLiteral.multiply(3, 2), 6);
})();
