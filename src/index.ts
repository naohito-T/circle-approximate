import './sass/style.scss';
import { drawFigure } from './util';

window.addEventListener('DOMContentLoaded', () => {
  const apothem = 100; // 辺心距離
  const n = 16; // 何角形まで作成するか
  const polys = document.querySelector('.regular-polygons'); // 要素

  for (let sides = 3; sides <= n; ++sides) {
    drawFigure(polys, apothem, sides);
  }
});
