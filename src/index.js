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
export default function preloadpics(sources = []) {
  const promises = [];

  for (let i = 0; i < sources.length; i += 1) {
    const source = sources[i];
    promises.push(createImage(source));
  }

  return Promise.all(promises);
}
