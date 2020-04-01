export const LANDSCAPE = 'landscape';
export const PORTRAIT = 'portrait';
export const BANNER_H = 'banner-h';
export const BANNER_V = 'banner-v';
export const SQUARED = 'squared';

export let screenFormat = LANDSCAPE;

const BANNER_FACTOR = 4;
const SQUARED_FACTOR = 0.2;

if (window) {
  const { innerHeight: h, innerWidth: w } = window;

  const relation = Math.abs(1 - w / h);
  console.log('relation:', relation);

  if (relation < SQUARED_FACTOR) {
    screenFormat = SQUARED;
  } else if (w / h > 1) {
    // horizontal
    const factor = w / h;

    console.log('h factor:', factor);
    if (factor >= BANNER_FACTOR) {
      screenFormat = BANNER_H;
    } else {
      screenFormat = LANDSCAPE;
    }
  } else {
    // vertical
    const factor = h / w;

    console.log('v factor:', factor);
    if (factor >= BANNER_FACTOR) {
      screenFormat = BANNER_V;
    } else {
      screenFormat = PORTRAIT;
    }
  }
}
