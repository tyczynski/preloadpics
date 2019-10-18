import output from './partials/output';
import input from './partials/input';

export default {
  input,
  output: Object.assign(output, {
    file: 'lib/preloadpics.esm.js',
    format: 'esm',
  }),
};
