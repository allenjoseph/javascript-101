import assert from "node:assert";

(function testConst() {
  console.log("Const");

  assert.throws(() => {
    const color = "yellow";
    {
      color = "black";
    }
  }, TypeError);
})();
