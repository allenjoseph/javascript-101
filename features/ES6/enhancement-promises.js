import assert from "node:assert";

(function testPromise() {
  console.log("Promises");

  const sumPromise = (a, b) =>
    new Promise((resolve, reject) => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("All params must be numbers.");
      }
    });

  sumPromise(3, 2).then((sum) => assert.strictEqual(sum, 5));
  sumPromise(3, "2").catch((error) =>
    assert.strictEqual(error, "All params must be numbers.")
  );
})();
