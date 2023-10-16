# Test skipLibCheck issue

## The issue

Setup:

-   2 different TypeScript libraries declare the same identifier with a
    different (incompatible) type, either using `declare global` or `declare
    module`. Individually both libraries build correctly.

    Here: `a` and `b` both declare a global `lib`.

-   One library (here: `b`) somehow exposes a type inside of the duplicated
    identifier.

    Here: `b` has `function getBees()`, which returns `typeof lib.bees`.

-   Another library brings them together, causing a clash.

    Here: `main` imports from `a` and `b` and calls `getBees()`.

Result (here):

-   The return type of `getBees` degenerates to `any`.

-   If `main` uses `skipLibCheck: true`, this is only noticable when you trigger
    `noImplicityAny`, e.g. via a callback like `.forEach(x =>`.

## Reproduce with this repository

Build the `main` project:

```
$ npm ci
$ ./node_modules/.bin/tsc -b main
```

Change `skipLibCheck` to `false` in main/tsconfig.json and build again. This
time TypeScript explains where the error is coming from.
