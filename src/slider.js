import c1 from './images/c1.svg';
import c2 from './images/c2.svg';
import c3 from './images/c3.svg';
import c4 from './images/c4.svg';
import c5 from './images/c5.svg';
import c6 from './images/c6.svg';
import c7 from './images/c7.svg';
import c8 from './images/c8.svg';
import c9 from './images/c9.svg';

const SLIDES = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

const TOTAL = SLIDES.length;

export function initSlider(root) {
  if (!root) return;
  const track = root.querySelector('[data-slider-track]');
  const prev = root.querySelector('[data-slider-prev]');
  const next = root.querySelector('[data-slider-next]');
  const dotsBox = root.querySelector('[data-slider-dots]');

  track.innerHTML = SLIDES.map((src, i) =>
    `<li class="slider__slide"><img class="slider__img" src="${src}" alt="Фото ${i + 1}"></li>`
  ).join('');

  dotsBox.innerHTML = SLIDES.map((_, i) =>
    `<li><button data-dot="${i}" aria-label="Слайд ${i + 1}"></button></li>`
  ).join('');

  let index = 0;
  const visible = () => (window.matchMedia('(max-width: 767px)').matches ? 1 : 3);

  function update() {
    const v = visible();
    const max = Math.max(0, TOTAL - v);
    if (index > max) index = max;
    track.style.transform = `translateX(calc(-${index} * (100% / ${v})))`;
    [...dotsBox.children].forEach((d, i) => d.classList.toggle('is-active', i === index));
    prev.disabled = index === 0;
    next.disabled = index >= max;
  }

  prev.addEventListener('click', () => { index = Math.max(0, index - 1); update(); });
  next.addEventListener('click', () => { index += 1; update(); });
  dotsBox.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-dot]');
    if (!btn) return;
    index = Number(btn.dataset.dot);
    update();
  });
  window.addEventListener('resize', update);
  update();
}
