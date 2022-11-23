import Swiper, {Pagination, Autoplay} from "swiper";

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    // Добавил кликабельность для аксессуаров
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});