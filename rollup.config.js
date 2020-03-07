import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'js/main.js',
    output: {
        name: 'datavis',
        file: 'js/bundle.js',
        format: 'iife',
        sourcemap: !production && true
    },
    plugins: [
        resolve(),
        !production &&
            serve({
                contentBase: '',
                port: 4000
            }),
        !production && livereload(),
        production && buble(),
        production && terser()
    ]
};
