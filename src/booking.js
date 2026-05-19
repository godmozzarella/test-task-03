export function initBooking(form, modal) {
  if (!form || !modal) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    modal.hidden = false;
    form.reset();
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-modal-close]')) modal.hidden = true;
  });
}
