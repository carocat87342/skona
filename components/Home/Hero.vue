<template lang="html">
  <div id="hero-container" class="relative z-10">
    <div class="container">
      <div class="titleItem">
        <Heading id="skonaTitle" :level="1" class="animtitleItem">
          {{ heroTitle }}
        </Heading>
        <p id="skonaDes1" class="animtitleItem text-subheader sm:mt-2.5">
          {{ heroDescription }}
        </p>
        <p id="skonaDes1" class="animtitleItem text-subheader sm:mt-2.5">
          {{ heroDescription }}
        </p>
      </div>
    </div>
    <!-- SVG animation -->
    <svg
      id="Layer_1"
      version="1.1"
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 1920 1080"
      style="enable-background:new 0 0 1920 1080;"
      xml:space="preserve">
      <path id="lShape" class="st0" d="M0,0v1080c176.9,0,947,0,947,0V0H0z" />
      <circle class="st1" cx="0" cy="1321.1" r="482.3" />
      <path
        id="rCircle"
        class="anim"
        d="M1954.3-471.6v993.8l-556.5,862.6c159.6,105.4,350.9,166.7,556.5,166.7c558.7,0,1011.6-452.9,1011.6-1011.6S2513-471.6,1954.3-471.6z" />
      <path
        id="rsCircle"
        class="anim-over"
        d="M1954.3-471.6v993.8l-556.5,862.6c159.6,105.4,350.9,166.7,556.5,166.7c558.7,0,1011.6-452.9,1011.6-1011.6S2513-471.6,1954.3-471.6z" />
      <circle id="innerCircle" class="st1" cx="1954.3" cy="522.2" r="349" />
      <defs>
        <clipPath id="theClipPath">
          <rect
            id="rect-over"
            x="942.7"
            y="-471.6"
            width="2023.2"
            height="2023.2"
            rx="1011"
            ry="1011" />
        </clipPath>
      </defs>
      <g id="clipPathReveal" clip-path="url(#theClipPath)">
        <image
          id="InnerGif"
          :href="heroImage"
          x="642.7"
          y="-450"
          height="2000"
          width="2000" />
        <circle id="innerCircle" class="st1" cx="1954.3" cy="522.2" r="349" />
      </g>
    </svg>
    <div id="banner-cta-block" class="banner-cta-block w-full">
<!--      <a :href="heroCta.url" :target="heroCta.target" class="w-full flex justify-end items-center">-->
<!--        <div class="cta-line w-full h-px relative bg-almost" />-->
<!--        <img src="/icons/rectangle.svg" class="mr-2 cta-icon -ml-2.5" alt="">-->
<!--        <span class="whitespace-nowrap text-p-all-small uppercase font-bold tracking-1">{{ heroCta.title }}</span>-->
<!--      </a>-->
      <cta-btn type="secondary" :to="heroCta.url" :external="heroCta.target" :target="heroCta.target">
        {{ heroCta.title }}
      </cta-btn>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
import { Power4, Power2 } from 'gsap/gsap-core';

export default {
  name: 'Hero',
  props: {
    heroTitle: {
      type: String,
      required: true
    },
    heroDescription: {
      type: String,
      required: true
    },
    heroImage: {
      type: String,
      required: true
    },
    heroCta: {
      required: false,
      type: Object,
      default: () => ({
        title: '',
        url: '',
        target: ''
      })
    }
  },
  data() {
    return {
      display: 'none'
    };
  },
  mounted() {
    // Create matchMediaList
    const smallMediaQuery = window.matchMedia('(max-width:767px)');
    // mediumMediaQuery = window.matchMedia("(min-width:768px) and (max-width:1199px)"),
    const largeMediaQuery = window.matchMedia('(min-width:768px)');

    // Add the listener to MediaQueryList
    smallMediaQuery.addListener(this.smallListener);
    largeMediaQuery.addListener(this.largeListener);

    // Initialise onload
    this.smallListener(smallMediaQuery);
    this.largeListener(largeMediaQuery);
  },
  methods: {
    smallListener(e) {
      if (e.matches) {
        const tlWipe = gsap.timeline({ paused: true });
        tlWipe
          .add(this.resetAll())
          .to('header .logo', 0, { opacity: 0, y: 10 })
          .to('header .wrapper .button', 0, { opacity: 0, y: 10 })
          .to('header .wrapper .hamburger', 0, { opacity: 0, y: 10 })
          .to('#Aline', 0, { attr: { x2: 0, x1: 1290 } }, 0)
          .to('#Atext', 0, { attr: { x: 1368, y: 1081 } }, 0)
          .to('#Apoly', 0, { x: -200 }, 0)

          .to('#lShape', 0, { css: { y: '-150vh', opacity: 1 } }, 0)
          .to('#lShape', 0.5, { y: 0, ease: Power4.easeIn }, 0)
          .to('.anim', 0.5, { rotation: 150, transformOrigin: '35.5% 50%', opacity: 1, ease: Power4.easeIn }, 0)
          .to('.anim-over', 0.5, { rotation: 150, transformOrigin: '35.5% 50%', opacity: 1, ease: Power4.easeIn }, 0.4)
          .addLabel('go', '1.5')
          .to('#innerCircle', 0.5, { x: 400, y: 400, ease: Power4.easeIn }, 'go-=0.3')
          .to('#lShape', 0.5, { y: '200vh', ease: Power4.easeIn }, 0.5)
          .to('.anim,.anim-over', 0, { opacity: 0 }, 'go')
          .to('header .logo, header .wrapper .button, header .wrapper .hamburger', {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.1,
            ease: Power4.easeIn
          })
          .to('.animtitleItem, .banner-cta-block', 1, { y: '-50px', opacity: 1, stagger: 0.4, ease: Power2.easeOut }, 'go')
          .play();

        const Masktl = gsap.timeline({ paused: true });
        Masktl
          .add(this.resetAll())
          .to('#InnerGif', 0, { visibility: 'visible' }, 1)
          .to('#rect-over', 0.35, { attr: { rx: 0, ry: 0, x: -100, y: 100, ease: Power4.easeIn } }, 1.5)// x:750, y:371,
          .to('#InnerGif', 0.35, { width: 1950, x: -642, y: -120 }, 1.5)
          .to('#AItem', 0.5, { opacity: 1 }, 1.5)
          .play();
      }
    },
    largeListener(e) {
      if (e.matches) {
        const tlWipe = gsap.timeline({ paused: true });
        tlWipe
          .add(this.resetAll())
          .to('header .logo', 0, { opacity: 0, y: 10 })
          .to('header .wrapper .button', 0, { opacity: 0, y: 10 })
          .to('header .wrapper .hamburger', 0, { opacity: 0, y: 10 })
          .to('#lShape', 0, { css: { y: '-150vh', opacity: 1 } }, 0)
          .to('#lShape', 0.5, { y: 0, ease: Power4.easeIn }, 0)
          .to('.anim', 0.5, { rotation: 150, transformOrigin: '35.5% 50%', opacity: 1, ease: Power4.easeIn }, 0)
          .to('.anim-over', 0.5, { rotation: 150, transformOrigin: '35.5% 50%', opacity: 1, ease: Power4.easeIn }, 0.4)
          .addLabel('go', '1.5')
          .to('#innerCircle', 0.5, { x: 400, y: 400, ease: Power4.easeIn }, 'go-=0.3')
          .to('#lShape', 0.5, { y: '200vh', ease: Power4.easeIn }, 0.5)
          .to('.anim,.anim-over', 0, { opacity: 0 }, 'go')
          .to('header .logo, header .wrapper .button, header .wrapper .hamburger', {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.1,
            ease: Power4.easeIn
          })
          .to('.animtitleItem, .banner-cta-block', 1, { y: '-100px', opacity: 1, stagger: 0.4, ease: Power2.easeOut }, 'go')
          .to('#AItem', 0.5, { opacity: 1 }, 1.5)
          .play();

        const Masktl = gsap.timeline({ paused: true });
        Masktl
          .add(this.resetAll())
          .to('#InnerGif', 0, { visibility: 'visible' }, 1)
          .to('#rect-over', 0.35, { attr: { rx: 0, ry: 0, x: 750, y: 371, ease: Power4.easeIn } }, 1.5)
          .to('#InnerGif', 0.35, { width: 1450, y: 50 }, 1.5)// y:200
          .play();
      }
    },
    resetAll() {
      // .exportRoot()
      // .process(0)
      // .clear()

      gsap.set('#Aline,#Atext,#Apoly,#lShape,.anim,.anim-over,#innerCircle,.animtitleItem, #InnerGif,#rect-over,#AItem', { clearProps: 'all' });
      // Clearprops with SVG elements/attributes
      gsap.set('#Aline', { attr: { x2: 750, x1: 1490, clearProps: 'all' } });
      gsap.set('#Atext', { attr: { x: 1540, y: 1076, clearProps: 'all' } });
      gsap.set('#Apoly', { x: 0, clearProps: 'all' });
      gsap.set('#rect-over', { attr: { rx: 1011, ry: 1011, x: 942.7, y: -471.6, clearProps: 'all' } });
      gsap.set('#InnerGif', { width: 2000, x: 642.7, y: -450, clearProps: 'all' });
    },
    mouseOver() {
      gsap.fromTo('#banner-cta-block .cta-line', { width: '50.8%' }, {
        width: '40%',
        duration: 0.3
      });
    },
    mouseLeave() {
      gsap.fromTo('#banner-cta-block .cta-line', { width: '40%' }, {
        width: '50.8%',
        duration: 0.3
      });
    },
    changeDisplay() {
      // gsap.to(document.querySelectorAll('#hero-container')[0], { opacity: 1, duration: 2, stagger: 0.5 })
      // this.display = 'block'
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-cta-block {
  position: absolute;
  width: 60%;
  bottom: -105px;
  max-width: 1234px;
  padding: 0 15px;
  right: 0;
  margin: 10px;
  width: 60%;
  float: right;
  left: auto;

  @include mobile {
    margin-right: 0;
    margin-top: 12px;
    bottom: 29vw;
    padding: 0 30px;
  }
  .cta-line {
    z-index: 1;
    transition: background 0.3s ease-out;
    width: 50.8%;
  }
}
#hero-container {
  width: 100%;
  min-height: 54vw;
  background-size: cover;
  overflow:hidden;
  @include mobile {
    min-height: 145vw;
    margin-top: 70px;
    padding-top: 180px;
  }
}
.st0,
#rCircle {
    fill: #D6D6D4
}

.st1 {
    fill: #FFFFFF;
    z-index: 20
}

.st2 {
    display: none;
    fill: #D6D6D4
}

#rect,
#rsCircle {
    fill: #3cabda
}

#rect-over {
    z-index: 20
}

.st3 {
    fill: none;
}

.st4 {
    font-family: 'Verdana';
    font-size: 24px;
}

.st6 {
    fill: none;
    stroke: #000000;
    stroke-width: 3;
    stroke-miterlimit: 10;
}

#AItem {
    opacity: 0
}

.titleItem {
    position: absolute;
    z-index: 10;
    @include desktop-tablet {
      top: 210px;
    }
    @include xlarge {
      top: 292px;
    }
    @include mobile {
      left: 0;
      top: 95px;
      padding: 0 30px;
    }
}

.animtitleItem {
    opacity: 0;
    // padding-top: 50px;
}

#skonaTitle {
  font-family: KeplerStd;
  color: #343434;
  z-index: 9;
  max-width: 710px;
  @include mobile {
    max-width: 350px;
  }
}

#skonaDes {
  z-index: 9;
  @include desktop-tablet {
    max-width: 260px;
  }
  @include xlarge {
    max-width: 360px;
  }
  @include mobile {
    margin-top: 50vw;
  }
}

#skonaDes1 {
  z-index: 9;
  @include desktop-tablet {
    max-width: 260px;
  }
  @include xlarge {
    max-width: 360px;
  }
  @include mobile {
    margin-top: 50vw;
  }
}

#circle {
    position: absolute;
    top: 40%;
    right: 10%;
    width: 30%;
    height: 30%;
    -webkit-border-radius: 300px;
    -moz-border-radius: 300px;
    border-radius: 300px;
    background: red;
    z-index: 10;
}

.clip-svg {
    -webkit-clip-path: url(#myClip);
    clip-path: url(#myClip);
    display: none;
}

svg {
    position: absolute;
    width: 100%;
    margin: 0;
    padding: 0;
}

image#InnerGif {
    visibility: hidden;
}

#lShape {
    position: relative;
    width: 100%;
    opacity: 0
}

#rect {
    position: relative;
    opacity: 0;
}

#rsCircle {
    opacity: 0
}

.rectangle {
    height: 0;
    width: 100%;
    background-color: grey;
}

.circle {
    height: 500px;
    width: 500px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    bottom: -60%;
    left: -20%
}

#rCircle {
    position: absolute;
    width: 100%;
    height: auto;
    right: 0;
    top: 0vh;
    opacity: 0
}
</style>