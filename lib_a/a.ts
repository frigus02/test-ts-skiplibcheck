export class A {
  constructor(public a: string) {}
}

declare global {
  var lib: 'a';
}
