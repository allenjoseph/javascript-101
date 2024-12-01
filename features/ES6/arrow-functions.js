import assert from "node:assert";

(function testArrowFunctions() {
  console.log("Arrow functions");

  const traditionalFunction = function double(num) {
    return num * 2;
  };

  const anonymousFunction = function (num) {
    return num * 2;
  };

  const arrowFunction = (num) => {
    return num * 2;
  };

  const compactArrowFunction = (num) => num * 2;

  assert.strictEqual(traditionalFunction(2), anonymousFunction(2));
  assert.strictEqual(anonymousFunction(2), arrowFunction(2));
  assert.strictEqual(arrowFunction(2), compactArrowFunction(2));
})();
