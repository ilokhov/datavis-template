import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import { uglify } from "rollup-plugin-uglify";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "js/main.js",
  output: {
    name: "datavis",
    file: "js/bundle.js",
    format: "iife",
    sourcemap: !production && true
  },
  plugins: [
    resolve(),
    commonjs(),
    production && buble(),
    production && uglify()
  ]
};
