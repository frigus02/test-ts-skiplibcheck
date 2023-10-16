interface B {
  b: string;
}

export function getBees(): typeof lib.bees {
  return lib.bees;
}

declare global {
  namespace lib {
    var bees: B[];
  }
}
