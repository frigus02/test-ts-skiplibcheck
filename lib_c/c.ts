import {B} from '../lib_b/b.js';

export class C {
  b = new B('b');

  getBees(): typeof lib.bees {
    return lib.bees;
  }
}
