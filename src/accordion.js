export function initAccordion(root) {
  if (!root) return;
  root.addEventListener('click', (e) => {
    const head = e.target.closest('.accordion__head');
    if (!head) return;
    const body = head.nextElementSibling;
    const open = head.getAttribute('aria-expanded') === 'true';
    head.setAttribute('aria-expanded', String(!open));
    body.hidden = open;
    const indicator = head.querySelectorAll('p')[1];
    if (indicator) indicator.textContent = open ? '+' : '-';
  });
}
