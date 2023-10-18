import { gsap } from 'gsap';

export default {
  data() {
    return {
      uniqueID: Math.ceil(Math.random() * 100)
    };
  },
  computed: {
    orderClass() {
      return this.imageFirst ? 'card-image-first' : 'card-image-last';
    },
    contentClass() {
      return {
        'cs-content-right': this.contentPosition === 'right',
        'cs-content-bottom': this.contentPosition === 'bottom'
      };
    }
  },
  methods: {
    mouseOver(id) {
      gsap.fromTo('.cs-scope-img' + id, {
        y: 120,
        opacity: '0'
      },
      {
        y: 0,
        opacity: '1',
        duration: 0.4,
        repeat: 0
      });
    },
    mouseLeave(id) {
      gsap.fromTo('.cs-scope-img' + id, {
        y: 0,
        opacity: '1'
      },
      {
        y: 120,
        opacity: '0',
        duration: 0.4,
        repeat: 0
      });
    }
  }
};