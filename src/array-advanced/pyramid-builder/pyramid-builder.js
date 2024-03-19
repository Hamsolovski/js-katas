/*
Create a function `build` which returns a pyramid of `n` floors, from top to bottom, stored in a string array.

Example :

n = 5 :
[
    "    *    ",
    "   ***   ",
    "  *****  ",
    " ******* ",
    "*********"
]

If `n` is zero or negative, throw a RangeError.
If `n` is null or not a number, throw a TypeError.

*/

// TODO add your code here

function build(bricks) {
  if (bricks === null || isNaN(bricks))
    throw new TypeError();
  else if (bricks <= 0)
    throw new RangeError();
  else {
    let myPyramid = ["*"]
    let myFloor = "*"
    if (bricks > 1) {
      for (let i = 1; i < bricks; i++) {
        myFloor = `*${myFloor}*`;
        for (let i = 0; i < myPyramid.length; i++) {
          myPyramid[i] = " " + myPyramid[i] + " "
        };
        myPyramid.push(myFloor);
      }
    }
    return myPyramid
  }
}

// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof build, "function");
assert.strictEqual(build.length, 1);
assert.deepStrictEqual(build(1), ["*"]);
assert.deepStrictEqual(build(2), [" * ", "***"]);
assert.deepStrictEqual(build(5), [
  "    *    ",
  "   ***   ",
  "  *****  ",
  " ******* ",
  "*********",
]);
assert.throws(() => {
  build(0);
}, RangeError);
assert.throws(() => {
  build(-1);
}, RangeError);
assert.throws(() => {
  build(null);
}, TypeError);
assert.throws(() => {
  build("a");
}, TypeError);
// End of tests
