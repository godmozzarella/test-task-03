import { initSlider } from './slider.js';
import { initAccordion } from './accordion.js';
import { initBooking } from './booking.js';
initSlider(document.querySelector('[data-slider]'));
initAccordion(document.querySelector('[data-accordion]'));
initBooking(document.querySelector('[data-booking]'), document.querySelector('[data-modal]'));
