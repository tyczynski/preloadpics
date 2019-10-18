import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

import output from './partials/output';
import minify from './partials/minify';
import input from './partials/input';

export default {
  input,
  output: { ...output, file: 'lib/preloadpics.iife.js', format: 'iife' },
  plugins: minify.concat([resolve(), commonjs()]),
};
