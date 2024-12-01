import assert from "node:assert";

(function testRestParameters() {
  console.log("Rest parameters");

  function countParams(...params) {
    return params.length;
  }

  assert.strictEqual(countParams("a", "b", "c"), 3);
})();
