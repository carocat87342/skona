<template lang="html">
  <div class="header-wrapper z-20">
    <announcement-bar
      v-if="hasAnnouncementBar"
      @hide="hiddenAnnouncementBar" />

    <div class="header-inner">
      <header
        id="header"
        :class="['theme-' + theme, { 'is-sticky': isSticky }]">
        <container>
          <NuxtLink to="/" class="logo an-el-header">
            <img
              :src="logoSrc"
              class="logo"
              alt="Sköna Logo">
          </NuxtLink>

          <div class="wrapper">
            <NuxtLink to="/contact" class="button text-p-all-small leading-p-all-small an-el-header">
              Contact
            </NuxtLink>

            <button
              class="hamburger an-el-header"
              @click="toggleNav">
              <span />
              <span />
            </button>
          </div>
          <template v-if="hasCertain">
            <transition name="slide-fade">
              <nav class="nav">
                <div class="container">
                  <div class="sub-container">
                    <div class="column">
                      <ul class="menu">
                        <template v-for="(item, key) in primaryMenu.firstHalf">
                          <li :key="key" class="text-animated-oneme lg:text-h2-desk sm:text-h2-tab text-h2-mob lg:leading-h2-desk sm:leading-h2-tab leading-h2-mob" @click="closeNav">
                            <NuxtLink :to="item.url">
                              {{ item.title }}
                              <span class="__ticket-bg" />
                            </NuxtLink>
                          </li>
                        </template>
                      </ul>
                    </div>
                  </div>

                  <div class="sub-container">
                    <div class="column">
                      <ul class="menu">
                        <template v-for="(item, key) in primaryMenu.secondHalf">
                          <li :key="key" class="text-animated-oneme lg:text-h2-desk sm:text-h2-tab text-h2-mob lg:leading-h2-desk sm:leading-h2-tab leading-h2-mob" @click="closeNav">
                            <NuxtLink :to="item.url">
                              {{ item.title }}
                              <span class="__ticket-bg" />
                            </NuxtLink>
                          </li>
                        </template>
                      </ul>
                      <hr class="__dividerDesktop text-animated-oneme-side">
                      <div class="links">
                        <ul>
                          <template v-for="(item, key) in links">
                            <li :key="key" class="text-animated-oneme-side text-p-all-small  leading-p-all-small" @click="closeNav">
                              <a :href="item.url" target="_blank">{{ item.title }}</a>
                            </li>
                          </template>
                        </ul>

                        <ul>
                          <template v-for="(item, key) in socialLinks">
                            <li :key="key" class="text-animated-oneme-side text-p-all-small  leading-p-all-small" @click="closeNav">
                              <a
                                :href="item.url"
                                target="_blank"
                                rel="nofollow noopener">{{ item.title }}</a>
                            </li>
                          </template>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </transition>
          </template>
        </container>
      </header>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  props: {
    theme: {
      type: String,
      required: false,
      enum: ['dark', 'light'],
      default: 'dark'
    },
    hasAnnouncementBar: {
      type: [Boolean, String],
      required: false,
      default: false
    }
  },
  data() {
    return {
      isSticky: false,
      headerOffset: 0
    };
  },
  computed: {
    ...mapState(['hasNavOpen', 'headerData', 'footerData', 'logo']),
    ...mapGetters(['primaryMenu', 'links', 'socialLinks']),
    logoSrc() {
      return this.theme === 'light' && !this.isSticky ? this.logo.logo_white : this.logo.logo_dark;
    }
  },
  watch: {
    hasNavOpen() {
      if (this.hasNavOpen) {
        document.body.classList.remove('has-nav-close-clean');

        document.body.classList.remove('has-nav-close');
        document.body.classList.add('has-nav-open');
        // this.animationTextMenu()
      } else {
        document.body.classList.remove('has-nav-open');
        document.body.classList.add('has-nav-close');

        const interval = setInterval(function() {
          const el = document.getElementsByClassName('has-nav-close')[0];
          el.classList.add('has-nav-close-clean');

          clearInterval(interval);
        }, 500);
        // this.animationTextMenu()
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.stickyHeader);

    if (this.hasAnnouncementBar) {
      this.headerOffset =
        document.getElementById('header').offsetTop +
        document.getElementById('announcement-bar').offsetHeight;
    } else {
      this.headerOffset = document.getElementById('header').offsetTop;
    }

    // listern to animate bg menu text
    const animatedOneme = document.getElementsByClassName('text-animated-oneme');

    for (let i = 0; i < animatedOneme.length; i++) {
      if (animatedOneme[i]) {
        animatedOneme[i].addEventListener(
          'mouseover',
          function() {
            // console.log(animatedOneme[i])

            const ticketBg = animatedOneme[i].querySelector('.__ticket-bg');
            ticketBg.classList.remove('__ticket-bg-onmouseleave');
            ticketBg.classList.add('__ticket-bg-onmouseover');
          },
          false
        );
      }
    }

    // mouse leave
    for (let i = 0; i < animatedOneme.length; i++) {
      animatedOneme[i].addEventListener(
        'mouseleave',
        function() {
          // console.log(animatedOneme[i])

          const ticketBg = animatedOneme[i].querySelector('.__ticket-bg');
          ticketBg.classList.remove('__ticket-bg-onmouseover');
          ticketBg.classList.add('__ticket-bg-onmouseleave');

          setInterval(function() {
            ticketBg.classList.remove('__ticket-bg-onmouseleave');
          }, 500);
        },
        false
      );
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.stickyHeader);
  },
  methods: {
    ...mapActions(['toggleNav', 'closeNav']),
    hasCertain() {
      return window.querySelectorAll('.nav').length > 0;
    },
    stickyHeader() {
      this.isSticky = window.pageYOffset > this.headerOffset;
    },
    hiddenAnnouncementBar() {
      this.headerOffset = document.getElementById('header').offsetTop;
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
  position: relative;

  .header-inner {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
}

#header {
  z-index: 99;
  position: absolute;
  left: 0;
  padding: 20px 0;
  width: 100%;

  &.is-sticky {
    position: fixed;
    top: 0;
    background-color: $white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    padding: 20px 0;
  }

  @include desktop-tablet {
    top: 15px;
    padding: 30px 0;
  }

  @include mobile {
    top: 11px;
  }

  .logo {
    @include mobile {
      max-width: 70px;
    }
  }

  > .container {
    @apply flex items-center justify-between;
  }

  .wrapper {
    @apply flex items-center;
  }

  // hamburger
  .hamburger {
    z-index: 5;
    display: block;
    position: relative;
    width: 29px;
    height: 13px;

    &:not(:first-child) {
      margin-left: 26px;
    }

    span {
      position: absolute;
      left: 0;
      height: 4px;
      transform-origin: center;
      transition: transform 0.2s ease-in-out;

      body.has-nav-open & {
        top: 50%;
        left: 50%;
        width: 23px;
        background-color: $white !important;
      }

      &:nth-child(1) {
        top: 0;
        width: 29px;

        body.has-nav-open & {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }

      &:nth-child(2) {
        top: 9px;
        width: 20px;

        body.has-nav-open & {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
  }

  &.theme-dark,
  &.theme-light.is-sticky {
    & .hamburger span {
      background-color: $almost-default;
    }
  }

  &.theme-light .hamburger span {
    background-color: $white;
  }

  // button
  .button {
    position: relative;
    padding: 0 7px 0 14px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;

    @include mobile {
      display: none;
    }

    &:not(:first-child) {
      margin-left: 26px;
    }

    &:before {
      z-index: -1;
      position: absolute;
      bottom: -4px;
      right: 0;
      width: 100%;
      height: 13px;
      // border-bottom-left-radius: 10px;
      // background-color: $oh-baby-200;
      background-image: url('/shapes/cta-oh-baby-highlight.svg');
      content: '';
      transition: all  0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
    }
    &:hover {
      &:before {
        width: 1%;
      }
    }
  }

  &.theme-dark,
  &.theme-light.is-sticky {
    & .button {
      color: $almost-default;
    }
  }

  &.theme-light .button {
    color: $white;
  }

  /* nav */
  .nav {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $almost-default;
    overflow: auto;
    overscroll-behavior: contain;

    body.has-nav-open & {
      display: block;
      animation: slideInRight 0.3s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
    }

    body.has-nav-close & {
      display: block;
      animation: slideOutRight 0.5s, easeOutInQuint cubic-bezier(0.83, 0, 0.17, 1);
    }
    body.has-nav-close-clean & {
      display: none;
    }
    .container {
      @apply flex flex-col sm:flex-row sm:justify-around min-h-full py-mobile-xx-lg sm:py-tablet-xx-lg lg:py-desktop-xx-lg;
    }

    .sub-container {
      position: relative;
      overflow: hidden;
      // border: 1px red solid;
      padding-left: 20px;
      padding-right: 20px;
    }
    .column {
      &:not(:first-child) {
        @include mobile {
          margin-top: 15px;
        }
      }
    }

    // menu
    .menu {
      @apply font-kepler-std-display text-white font-bold;

      li:not(:first-child) {
        @include desktop-tablet {
          margin-top: 20px;
        }

        @include mobile {
          margin-top: 15px;
        }
      }

      a {
        position: relative;

        &:before {
          z-index: -1;
          position: absolute;
          right: -13px;
          bottom: -3px;
          width: 0;
          height: 37px;
          opacity: 1;
          //background-image: url('/shapes/cta-primary-highlight.svg');
          background-repeat: no-repeat;
          transition: width 0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
          content: '';

          @include tablet-mobile {
            display: none;
          }
        }

        &:hover:before {
          width: calc(100% + 1px);
        }
      }
    }

    /* links */
    .links {
      @apply flex;
      ul {
        &:not(:first-child) {
          @include desktop-tablet {
            margin-left: 85px;
          }

          @include mobile {
            margin-left: 48px;
          }
        }

        li:not(:first-child) {
          margin-top: 30px;
        }

        a {
          text-transform: uppercase;
          color: rgba($white, 0.5);
          transition: color 0.2s ease-in-out;

          &:hover {
            color: $white;
          }
        }
      }
    }
  }
}

@keyframes slideInRight {
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

.slideInRight {
  animation-name: slideInRight;
}

@keyframes slideOutRight {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
}

.slideOutRight {
  animation-name: slideOutRight;
}

.slide-fade-enter-active {
  // transition: all .3s ease;
  animation: slideInRight 500ms;
}
.slide-fade-leave-active {
  // transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  animation: slideOutRight 500ms;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  // transform: translateX(10px);
  // opacity: 0;
}

// Keyframe animation
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    top: 100px;
  }
  75% {
    opacity: 0.5;
    top: 0;
  }
  100% {
    opacity: 1;
  }
}
$total-items: 5; //number of elements

// Set delay per List Item
@for $i from 1 through $total-items {
  .text-animated-oneme:nth-child(#{$i}) {
    animation-delay: 0.06s * $i;
  }
}
.text-animated-oneme {
  position: relative;
  animation: fadeIn 0.4s, easeInOutQuint cubic-bezier(0.83, 0, 0.17, 1);
  animation-fill-mode: both;
}

// hover
.__ticket-bg {
  background-image: url('/shapes/nav-li-hover.svg');
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: cover;
  opacity: 1;
  position: absolute;
  left: -240px;
  top: 0;
  width: 120%;
  max-width: 220px;
  height: 22px;
  margin-top: 18px;
  z-index: -10;

  @include desktop-tablet {
    left: -250px;
    height: 37px;
    margin-top: 25px;
    width: 130%;
  }
}
.__ticket-bg-onmouseover {
  opacity: 1;
  position: absolute;
  left: -10px;
  transition: all 400ms ease-in-out;

  @include desktop-tablet {
    left: -20px;
  }
}

.__ticket-bg-onmouseleave {
  opacity: 1;
  position: absolute;
  left: 300px;
  transition: all 400ms ease-in-out;
}

.__dividerDesktop {
  @apply block bg-white opacity-50 sm:w-[125%] my-mobile-md sm:my-tablet-md lg:my-desktop-md;
}

$total-items-side: 9;

// Set delay per List Item
@for $i from 1 through $total-items-side {
  .text-animated-oneme-side:nth-child(#{$i}) {
    animation-delay: 0.15s * $i;
  }
}
</style>