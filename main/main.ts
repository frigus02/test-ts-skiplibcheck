import {A} from '../lib_a/a.js';
import {C} from '../lib_c/c.js';

console.log(new A('a'));

// getBees() returns `any` because the type is broken

// not caught here
console.log(new C().getBees()[0].b);

// caught by noImplicityAny here but `any` could have propagated through more TS
// projects before that.
new C().getBees().forEach(x => {
  console.log(x);
});
