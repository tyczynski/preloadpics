/*!
 * @package preloadpics
 * @version v1.0.0
 * @author Przemysław Tyczyński | https://tyczynski.pl
 * @license MIT
 */
/**
 * @param {String} source
 * @return {Promise}
 */
function createImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = source;
  });
}

/**
 * @param {String[]} sources
 * @return {Promise}
 */
function preloadpics(sources = []) {
  const promises = [];

  for (let i = 0; i < sources.length; i += 1) {
    const source = sources[i];
    promises.push(createImage(source));
  }

  return Promise.all(promises);
}

export default preloadpics;
