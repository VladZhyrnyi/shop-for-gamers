import Swiper, {Pagination, Autoplay} from "swiper";

const swiper = new Swiper('.swiper', {
  modules: [Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 3000,
  },
});