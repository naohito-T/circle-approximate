export const drawFigure = (
  polys: Element | null,
  apothem: number,
  n: number
) => {
  const pi_over_n = Math.PI / n, // 3.14 / 3 ~ 16
    theta = 2 * pi_over_n, // 多くの角度を表す記号。
    circumradius = apothem / Math.cos(pi_over_n),
    cx = circumradius,
    cy = circumradius,
    figureSize = 2 * circumradius,
    ns = 'http://www.w3.org/2000/svg';

  const figure = document.createElement('figure'); // 要素作成

  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('width', figureSize + 'px');
  svg.setAttribute('height', figureSize + 'px');

  const polygon = document.createElementNS(ns, 'polygon');
  polygon.classList.add('polygon');

  let p, angle;
  for (let i = 0; i < n; i++) {
    angle = i * theta - Math.PI / 2 - theta / 2;

    p = svg.createSVGPoint();

    p.x = cx + circumradius * Math.cos(angle);
    p.y = cy - circumradius * Math.sin(angle);

    polygon.points.appendItem(p);
  }

  svg.appendChild(polygon);

  var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.classList.add('inscribed-circle');
  circle.setAttribute('cx', cx + 'px');
  circle.setAttribute('cy', cy + 'px');
  circle.setAttribute('r', apothem + 'px');
  svg.appendChild(circle);
  figure.appendChild(svg);

  var caption = document.createElement('figcaption');
  caption.innerHTML = 'n = ' + n;
  figure.appendChild(caption);

  polys?.appendChild(figure);
};
