# fxhash-p5-rollup

Boilerplate for creating p5js sketches on the [fxhash](https://www.fxhash.xyz/) platform

## Get Started

The quicket way to get going:

```
npx degit dasDaniel/fxhash-p5-rollup my-project-name
cd my-project-name
npm i
npm run dev
```

## Features

- `p5js` in web-use form
- `rollup` for bundling
- dev and production builds
- minified production build with `terser`
- dev server setup with live reload

## Notes

- Use `window.setup` instead of `setup` (and other p5js structure method) to maintain names after minimization/obfuscation) to ensure that function name remains same and accessible.

- If you are using git to archive your project, you might want to keep the contents of the `dist/` directory. One way of doing that is by removing the entry from `.gitignore` 

## Setup

install the dependencies

`npm install`

## Development server

`npm run dev`

## Production

Generates a minified js bundle in `dist/` directory, ready for creating a zip file from it.

`npm run build`
