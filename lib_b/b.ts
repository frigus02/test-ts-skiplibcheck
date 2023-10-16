export class B {
  constructor(public b: string) {}
}

declare global {
  namespace lib {
    var bees: B[];
  }
}
