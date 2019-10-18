# preloadpics [![npm version](https://badge.fury.io/js/preloadpics.svg)](https://badge.fury.io/js/preloadpics)

Lightweight library for preloading images with callback.

## Usage

```js
preloadpics(
  // array with urls
  sources,
);
```

## Example

```js
import preloadpics from 'preloadpics';

preloadpics([
  'https://images.unsplash.com/photo-1569099377939-569bbac3c4df?ixlib=rb-1.2.1',
  'https://images.unsplash.com/photo-1569133237946-091ca2397418?ixlib=rb-1.2.1',
  'https://images.unsplash.com/photo-1569099377939-569bbac3c4df?ixlib=rb-1.2.1',
]).then(results => console.log('finished')); // results => array with `load` and `error` events of the `Image` object.
```

## License

[MIT](LICENSE) © [Przemysław Tyczyński](https://tyczynski.pl)
