import assert from 'node:assert';

console.log('ES7');

(function testExponentiation() {
  console.log('- Exponentiation');

  assert.strictEqual(2 ** 3, Math.pow(2, 3))
})();

(function testIncludes() {
  console.log('- Includes');

  const fruits = ['apple', 'banana', 'mango', 'guava'];

  assert.strictEqual(fruits.includes('banana'), true);
  assert.strictEqual(fruits.includes('banana', 2), false);
  assert.strictEqual(fruits.includes('orange'), false);
})();
