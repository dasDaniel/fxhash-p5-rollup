import "./p5.min.js";

const config = {
  frameRate: 60,
  noiseSeed: (fxrand() * 100_000) >> 0,

  /** number of items */
  num: (10 + fxrand() * 10) >> 0,

  /** noise scale  */
  noiseScale: 0.5 + fxrand() * 24,
};

window.$fxhashFeatures = {
  ...config,
};

const pos = {
  /** width */
  w: null,
  /** height */
  h: null,
  /** size */
  s: null,
  /** left */
  l: null,
  /** top */
  t: null,
};

function init() {
  pos.w = window.innerWidth;
  pos.h = window.innerHeight;
  pos.s = Math.min(window.innerWidth, window.innerHeight);
  pos.t = (pos.h - pos.s) / 2;
  pos.l = (pos.w - pos.s) / 2;
  createCanvas(pos.w, pos.h);
  frameRate(config.frameRate);
  draw();
}

window.setup = () => {
  init();
  colorMode(HSB, 1);
  noiseSeed(config.noiseSeed);
};

window.windowResized = () => {
  init();
};

window.draw = () => {
  background(0.9, 0.1, 0.125);

  // top left of square
  translate(pos.l, pos.t);

  // center 0,0
  //translate(pos.s / 2 + pos.l, pos.s / 2 + pos.t);

  noFill();
  stroke(0, 0, 1);

  const { num, noiseScale } = config;
  const size = pos.s / num;
  rectMode(CENTER);
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      square(
        (i + 0.5) * size,
        (j + 0.5) * size,
        size * noise(noiseScale * i, noiseScale * j, noiseScale * (i | j))
      );
      square(
        (i + 0.5) * size,
        (j + 0.5) * size,
        size * noise(noiseScale * i, noiseScale * j, noiseScale * (i ^ j))
      );
    }
  }

  noLoop();
};
