// morning challenge

// 1.
// create a new directory called two-objects, cd into it
// inside this directory create an npm project with npm init
// install mocha https://mochajs.org/#installation

// 2.
// pass the mocha tests, run the tests to make sure everything is failing at first, then start writing the code
// the challenge involves writing code in the defaults function 
// you need to pass in two objects, the first of which being an object you return
// the second object is an object that can insert properties into the first object if they don't exist

// an example
// const iceCream = {flavor: "chocolate"};
// defaults(iceCream, {flavor: "vanilla", sprinkles: "lots"});
// sprinkles doesn't exist in the first object therefore we add it
// we then return iceCream with its new property
// => {flavor: "chocolate", sprinkles: "lots"}

const defaults = () => {
  // your code
}

const assert = require('assert');

describe('Defaults', () => {
  it('can insert a default', () => {
    const list = {a: 1, b: 2, c: 3};
    const result = defaults(list, {d: 4});
    const expected = {a: 1, b: 2, c: 3, d: 4};
    assert.deepEqual(result, expected);
  })

  it('does not touch existing keys', () => {
    const list = {a: 1, b: 2, c: 3};
    const result = defaults(list, {c: 5});
    const expected = {a: 1, b: 2, c: 3};
    assert.deepEqual(result, expected);
  })

  it('only sets defaults for undefined keys', () => {
    let list = {a: null, b: false, c: 3};

    // Leave falsy values alone! Only set defaults for undefined.
    let result = defaults(list, {b: 2});
    let expected = {a: null, b: false, c: 3};
    assert.deepEqual(result, expected);

    list = {a: null, b: undefined, c: 3};

    result = defaults(list, {b: 2});
    expected = {a: null, b: 2, c: 3};
    assert.deepEqual(result, expected);
  })
});