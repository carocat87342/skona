<template lang="html">
  <div class="slider-container">
    <!-- For only images on slider -->
    <swiper v-if="type === 'image-slider'" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in sliderItems" :key="index">
        <img class="swiper-image" :src="item.image" alt="">
      </swiper-slide>
    </swiper>
    <!-- For only one line text on slider -->
    <swiper v-if="type === 'text-slider'" ref="swiperTop" class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in sliderItems" :key="index">
        <h2 class="lg:text-h2-desk sm:text-h2-tab text-h2-mob lg:leading-h2-desk sm:leading-h2-tab leading-h2-mob mb-desktop-x-sm floatTitle" :class="from">
          {{ item.acf.quote }}
        </h2>
      </swiper-slide>
    </swiper>
    <div class="slider-pagination sm:mt-desktop-sm mt-mobile-sm">
      <!-- Slider navigation -->
      <div class="slider-buttons order-2 sm:order-1">
        <div slot="button-prev" class="swiper-button-prev slide-button" />
        <div class="count">
          {{ slideIndex }}/{{ sliderItems.length }}
        </div>
        <div slot="button-next" class="swiper-button-next slide-button" />
      </div>
      <!-- Slider progress-bar navigation -->
      <div :class="animateClass + ` `+ progressBarActiveClass" class="mb-4 sm:mb-0 swiper-progress-bar col-span-12 lg:col-span-8 sm:col-span-6 order-1 sm:order-2">
        <span class="slide_progress-bar" />
      </div>
      <!-- Slider bottom right text -->
      <swiper ref="swiperQuoteSpeaker" class="swiper slider-pagination-text order-3 sm:order-3" :options="swiperOptionQuoteSpeaker">
        <swiper-slide v-for="(item,index) in sliderItems" :key="index">
          <!-- For only quotes slider -->
          <div v-if="type === 'text-slider'" class="quote-speaker">
            <span class="quoteSpeakerText text-p-all leading-p-all floatSpeakerText" :class="from">{{ item.acf.attribution }}</span>
          </div>
          <!-- For only image slider -->
          <div v-if="type === 'image-slider'" class="quote-speaker">
            <nuxt-link :to="{ name: 'blog' }">
              <span class="quoteSpeakerText text-p-all-small leading-p-all-small floatSpeakerText" :class="from">See our posts</span>
            </nuxt-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText.js';

export default {
  name: 'SwiperSlider',
  title: 'Swiper Slider',
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['sliderItems', 'type', 'from'],
  data() {
    const that = this;
    return {
      slideIndex: 1,
      animateClass: '',
      progressBarActiveClass: 'active',
      quoteSpeaker: '',
      // Bottom slider
      swiperOptionQuoteSpeaker: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [
              0,
              0,
              -400
            ]
          },
          next: {
            translate: [
              '100%',
              0,
              0
            ]
          }
        },
        speed: 500,
        loop: true,
        watchSlidesProgress: false,
        pagination: false,
        on: {
          slideChangeTransitionStart() {
            const elm = document.querySelectorAll(`.quoteSpeakerText.${that.from}`)[this.realIndex];
            // const revert = false;
            // const split = new SplitText(elm, {
            //   type: 'lines',
            //   linesClass: 'lineParent'
            // });
            const splitParent = new SplitText(elm.getElementsByClassName('lineParent'), {
              type: 'lines',
              charsClass: 'lineChild'
            });
            gsap.set(splitParent.lines, {
              y: '100%'
            });
            // gsap.to(splitParent.lines, {
            //   stagger: {
            //     each: 0.4,
            //     ease: 'power4.easeInOut',
            //     x: 0
            //   },
            //   onComplete() {
            //     if (revert === true) {
            //       split.revert();
            //       splitParent.revert();
            //     }
            //   },
            //   duration: '.05',
            //   delay: '.5'
            // });
          }
        }
      },
      // Top slider
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        effect: 'creative',
        creativeEffect: {
          prev: {
            shadow: true,
            translate: [
              0,
              0,
              -400
            ]
          },
          next: {
            translate: [
              '100%',
              0,
              0
            ]
          }
        },
        speed: 500,
        loop: false,
        watchSlidesProgress: true,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        on: {
          init() {
            that.animateClass = '';
            that.progressBarActiveClass = '';
            that.animateClass = 'animate';
            that.progressBarActiveClass = 'active';
          },
          slideChangeTransitionStart() {
            that.slideIndex = (this.realIndex + 1);
            that.animateClass = '';
            if (that.type === 'text-slider') {
              const elm = document.querySelectorAll(`.${that.from}`)[this.realIndex];
              const revert = false;
              const split = new SplitText(elm, {
                type: 'lines',
                linesClass: 'lineParent'
              });

              const splitParent = new SplitText(elm.getElementsByClassName('lineParent'), {
                type: 'lines',
                charsClass: 'lineChild'
              });

              // const tl = new TimelineMax({ repeat: 2 });

              // $('.box').each(function(index, element) {
              //   tl.to(element, 1, { x: 200, opacity: 1 })
              //     .to(element, 1, { x: 400, opacity: 0, ease: Power2.easeIn }, '+=1');
              // });

              // const tl = gsap.timeline();
              // tl.fromTo('.an-el-header', { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 0.6 })
              //   .fromTo('.an-el-container', { opacity: 0, y: 150 }, { opacity: 1, y: 0, duration: 0.6 }, '0')
              //   .from('.an-el-shape-1', { scale: 0, transformOrigin: '0 0', duration: 0.6 }, '-=0.7')
              //   .from('.an-el-shape-2', { scale: 0, transformOrigin: '100% 100%', duration: 0.6 }, '-=0.7');

              gsap.set(splitParent.lines, {
                y: '100%',
                x: 0
              });

              gsap.from(splitParent.lines,
                {
                  duration: 0.5,
                  delay: '.5',
                  opacity: 0,
                  xPercent: 100,
                  // yPercent: 100,
                  // transformOrigin: '100% 100%',
                  stagger: 0.1
                  // onComplete() {
                  //   if (revert === true) {
                  //     split.revert();
                  //     splitParent.revert();
                  //   }
                  // }
                });

              gsap.to(splitParent.lines, {
                stagger: {
                  each: 0.1,
                  ease: 'power4.easeInOut',
                  y: 0,
                  x: '100%'
                },
                onComplete() {
                  if (revert === true) {
                    split.revert();
                    splitParent.revert();
                  }
                },
                // xPercent: 0,
                duration: '.05',
                delay: '.05'
              });
            }
          },
          slideChangeTransitionEnd() {
            that.animateClass = 'animate';
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-progress-bar {
  position: relative;
  width: calc(100% - 190px);
  display: block;
  z-index: 1;
  height: 2px;
  background: #979797;
  margin-right: 13px;
  @include mobile {
    width: 100%;
    margin-right: 0;
  }

  .slide_progress-bar {
    // position: absolute;
    height: 2px;
    background: rgba(52, 52, 52, 0.3);
    width: auto;
    clear: both;
    opacity: 0;
    bottom: 45px;
    left: 0;
    right: 0;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
      background: #343434;
      height: 100%;
      width: 0;
      content: "";
    }
  }
  &.active {
    .slide_progress-bar {
      opacity: 1;
    }
  }
  &.animate {
    .slide_progress-bar {
      &:after {
        transition: width linear;
        transition-delay: unset;
        width: 100%;
        transition-duration: 5s;
      }
    }
  }
}

.slider-pagination {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .slider-buttons {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 48px;
        margin-right: 13px;
        .slide-button {
            position: unset;
            width: 7px;
            height: 7px;
            margin-top: 0;
            &:after {
                font-size: 12px;
                color: #343434;
            }
        }
        .count {
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            letter-spacing: 1px;
            text-transform: uppercase;
            color: #343434;
        }
    }
    .slider-pagination-text {
      margin-right: 0;
        span {
            display: block;
            font-weight: 400;
            text-transform: uppercase;
            color: #343434;
        }
    }
}
.life-at-skona {
  .slider-pagination-text {
      width: 117px;
  }
  .swiper-progress-bar {
    width: calc(100% - 191px);
    @include mobile {
      width: 100%;
    }
  }

  .slider-container {
    @include desktop-tablet {
      max-width: 465px;
    }
  }
  .swiper-image {
    @include mobile {
      width: 100%;
    }
  }
}
.quotes-container {
  .slider-container {
    max-width: 780px;
    margin: auto;
  }
  .slider-pagination-text {
      width: 266px;
  }
  .slider-pagination {
    margin-top: 42px;
    .slider-buttons {
        .slide-button {
            &:after {
                color: #ffffff;
            }
        }
        .count {
            color: #ffffff;
        }
    }
    .slider-pagination-text {
        span {
            color: #ffffff;
            text-transform: unset;
        }
    }
  }
  .swiper-progress-bar {
    background: #979797;
    width: calc(100% - 340px);
    @include mobile {
      width: 100%;
    }
    .slide_progress-bar {
      background: rgba(255, 255, 255, 0.4);
      &:after {
        background: #ffffff;
      }
    }
  }
}
#announcement-bar {
  .slider-container {
    width: 100%;
    @include mobile {
      padding-right: 85px;
    }
  }
  h2 {
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 0;
    font-family: museo-sans, sans-serif;
    color: #ffffff;
    text-align: center;
    @include mobile {
      text-align: left;
    }
  }
  .slider-pagination {
    display: none;
  }
}
</style>