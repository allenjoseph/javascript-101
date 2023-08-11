import assert from 'node:assert';
import { User } from '../helpers/classUser.js';

console.log('ES6');

(function testConst() {
  console.log('- Const');

  assert.throws(() => {
    const color = 'yellow';
    {
      color = 'black';
    }
  },
    TypeError,
  );
})();

(function testLet() {
  console.log('- Let');

  let color = 'yellow';
  {
    let color = 'black';
  };

  assert.strictEqual(color, 'yellow');
})();

(function testArrowFunctions() {
  console.log('- Arrow functions');

  const traditionalFunction = function double(num) {
    return num * 2;
  }

  const anonymousFunction = function (num) {
    return num * 2;
  }

  const arrowFunction = (num) => {
    return num * 2;
  }

  const compactArrowFunction = num => num * 2;

  assert.strictEqual(traditionalFunction(2), anonymousFunction(2));
  assert.strictEqual(anonymousFunction(2), arrowFunction(2));
  assert.strictEqual(arrowFunction(2), compactArrowFunction(2));
})();

(function testTemplateStrings() {
  console.log('- Template strings');

  const currentYear = new Date().getFullYear();

  const normalString = 'We are in '+ currentYear + '.';

  const templateString =  `We are in ${currentYear}.`;

  assert.strictEqual(normalString, templateString);
})();

(function testDefaultParams() {
  console.log('- Default params');

  const multiply = (a, b = 1) => {
    return a * b;
  };

  assert.strictEqual(multiply(5), 5);
})();

(function testArrayDestructuring() {
  console.log('- Array destructuring');

  const [name, lastname] = ['John', 'Doe'];

  assert.strictEqual(name, 'John');
  assert.strictEqual(lastname, 'Doe');
})();

(function testObjectDestructuring() {
  console.log('- Object destructuring');

  const { name, lastname} = { name: 'John', lastname: 'Doe'}

  assert.strictEqual(name, 'John');
  assert.strictEqual(lastname, 'Doe');
})();

(function testSpreadOperator() {
  console.log('- Spread operator');

  const yellow = 'yellow';
  const rgbColors = ['red', 'green', 'blue'];

  const colors = [yellow, ...rgbColors];

  assert.strictEqual(colors.length, 4);
})();

(function testRestParameters() {
  console.log('- Rest parameters');

  function countParams(...params) {
    return params.length;
  }

  assert.strictEqual(countParams('a', 'b', 'c'), 3);
})();

(function testObjectLiterals() {
  console.log('- Enhanced Object literals');

  const addition = (a, b) => a + b;

  const subtractionKey = 'substraction';

  const objectLiteral = {
    addition,
    [subtractionKey]: (a, b) => a - b,
    multiply(a, b) { return a * b }
  };

  assert.strictEqual(objectLiteral.addition(3, 2), 5);
  assert.strictEqual(objectLiteral.substraction(3, 2), 1);
  assert.strictEqual(objectLiteral.multiply(3, 2), 6);
})();

(function testPromise() {
  console.log('- Promises');

  const sumPromise = (a, b) => new Promise((resolve, reject) => {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('All params must be numbers.');
    }
  });

  sumPromise(3, 2).then(sum => assert.strictEqual(sum, 5));
  sumPromise(3, '2').catch(error => assert.strictEqual(error, 'All params must be numbers.'));
})();

(function testClasses() {
  console.log('- Classes');

  const user = new User('John', 'Doe');

  assert.strictEqual(user.name, 'John');
  assert.strictEqual(user.lastname, 'Doe');
  assert.strictEqual(user.fullname, 'John Doe');
})();

(function testModules() {
  console.log('- Modules');

  const user = new User('Jane', 'Doe');

  assert.ok(user instanceof User);
  assert.ok('User class was imported from classUser module');

})();

(function testGenerators() {
  console.log('- Generators');

  function* iterateRGBColors() {
    yield 'red';
    yield 'green';
    return 'blue';
  }

  const RGBColors = iterateRGBColors();

  let color = RGBColors.next();
  assert.strictEqual(color.value, 'red');
  assert.strictEqual(color.done, false);

  color = RGBColors.next();
  assert.strictEqual(color.value, 'green')
  assert.strictEqual(color.done, false);

  color = RGBColors.next();
  assert.strictEqual(color.value, 'blue')
  assert.strictEqual(color.done, true);
})();

(function testInternationalization() {
  console.log('- Internationalization');

  const l10nUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const l10nPEN = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' });

  assert.strictEqual(l10nUSD.format(1000), '$1,000.00');
  assert.strictEqual(l10nPEN.format(1000), '£1,000.00');

  const l10nEN = new Intl.DateTimeFormat('en-US');
  const l10nES = new Intl.DateTimeFormat('es-ES');

  assert.strictEqual(l10nEN.format(new Date('2023-12-01')), '12/1/2023');
  assert.strictEqual(l10nES.format(new Date('2023-12-01')), '1/12/2023');
})();
