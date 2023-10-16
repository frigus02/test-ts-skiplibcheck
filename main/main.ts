import {A} from '../lib_a/a.js';
import {getBees} from '../lib_b/b.js';

console.log(new A());

// getBees() returns `any` because the type is broken

// not caught here
console.log(getBees()[0].b);

// caught by noImplicityAny here but `any` could have propagated through more TS
// projects before that.
getBees().forEach(x => {
  console.log(x);
});
