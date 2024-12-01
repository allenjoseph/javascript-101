import assert from "node:assert";

(function testTemplateStrings() {
  console.log("Template strings");

  const currentYear = new Date().getFullYear();

  const normalString = "We are in " + currentYear + ".";

  const templateString = `We are in ${currentYear}.`;

  assert.strictEqual(normalString, templateString);
})();
