import assert from "node:assert";

(function testLet() {
  console.log("Let");

  let color = "yellow";
  {
    let color = "black";
  }

  assert.strictEqual(color, "yellow");
})();
