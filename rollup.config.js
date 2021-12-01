import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

const production = !process.env.ROLLUP_WATCH;
const dest = production ? "dist/" : "dev/";

const plugins = [
  del({ targets: dest, runOnce: true }),
  copy({
    targets: [{ src: "public/*", dest: dest }],
  }),
];

if (production) {
  plugins.push(terser({ mangle: true }));
} else {
  plugins.push(serve({ contentBase: "./dev" })); // index.html should be in root of project
  plugins.push(livereload({ delay: 500 }));
}

export default [
  {
    input: "./src/index.js",
    output: {
      sourcemap: false,
      format: "iife",
      dir: dest,
    },
    plugins,
  },
];
