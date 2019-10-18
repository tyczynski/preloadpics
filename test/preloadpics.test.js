import preloadpics from '../src';

describe('preloadpics', () => {
  test('should be a function', () => {
    expect(preloadpics).toBeInstanceOf(Function);
  });

  test('should return a promise', () => {
    expect(preloadpics([])).toBeInstanceOf(Promise);
  });
});
