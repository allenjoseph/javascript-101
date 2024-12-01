import assert from "node:assert";

(function testInternationalization() {
  console.log("Internationalization");

  const l10nUSD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const l10nPEN = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  assert.strictEqual(l10nUSD.format(1000), "$1,000.00");
  assert.strictEqual(l10nPEN.format(1000), "£1,000.00");

  const l10nEN = new Intl.DateTimeFormat("en-US");
  const l10nES = new Intl.DateTimeFormat("es-ES");

  assert.strictEqual(l10nEN.format(new Date("2023-12-01")), "12/1/2023");
  assert.strictEqual(l10nES.format(new Date("2023-12-01")), "1/12/2023");
})();
