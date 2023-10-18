import Vue from 'vue';
import VueAwesomeSwiper, { directive } from 'vue-awesome-swiper';

// import custom style
import 'swiper/css/swiper.css';
// import '@/assets/css/swiper.css'

export default {
  directives: {
    swiper: directive
  }
};

Vue.use(VueAwesomeSwiper);