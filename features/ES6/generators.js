import assert from "node:assert";

(function testGenerators() {
  console.log("Generators");

  function* iterateRGBColors() {
    yield "red";
    yield "green";
    return "blue";
  }

  const RGBColors = iterateRGBColors();

  let color = RGBColors.next();
  assert.strictEqual(color.value, "red");
  assert.strictEqual(color.done, false);

  color = RGBColors.next();
  assert.strictEqual(color.value, "green");
  assert.strictEqual(color.done, false);

  color = RGBColors.next();
  assert.strictEqual(color.value, "blue");
  assert.strictEqual(color.done, true);
})();
