<template>
  <div>
    <skona-header />
    <div id="error-container" class="relative z-10 flex flex-col">
      <div class="container order-1 pt-0 md:pt-48  w-full">
        <h1
          id="skonaTitle"
          class="mb:order-1 top-[30px] relative lg:text-h1-desk z-10 sm:text-h1-tab text-h1-mob lg:leading-h1-desk sm:leading-h1-tab leading-h1-mob font-black desktop-x-sm"
          v-html="title" />
      </div>
      <div class="container w-full md:order-2 order-3 pt-10 mb-[100px] sm:mb-[120px] lg:mb-[180px]">
        <div class="flex md:justify-between md:flex-row flex-col">
          <p
            id="skonaDes"
            class="md:pr-[30px] lg:pr-0 mb:order-1 order-2 md:w-[40%] mt-5 md:max-w-[400px] lg:text-p-desk sm:text-p-tab text-p-mob lg:leading-p-desk sm:leading-p-tab leading-p-mob">
            But head back to our
            <NuxtLink class="underline" to="/" v-text="'homepage'" />
            or <NuxtLink class="underline" :to="{ name: 'work'}" v-text="'case studies'" />
            to see some of the great work we do. Or if you want to chat, don’t hesitate to
            <NuxtLink class="underline" :to="{ name: 'contact'}" v-text="'contact us'" />.
          </p>
          <div
            class="md:w-[60%] md:order-2 order-1 relative"
            :class="imgMarginTop">
            <img class="bg-img max-w-none w-full md:w-[165%] z-4 relative" v-bind="{ alt, src }">
            <cta-btn
              class="cta-btn w-full mt-3"
              type="secondary"
              :to="{ name: 'index'}">
              Take me home
            </cta-btn>
          </div>
        </div>
      </div>
      <!--      <div class="sm:container w-full min-h-0 lg:min-h-[185px] md:min-h-[50px] lg:mb-[180px] md:mb-[120px] md:order-3 order-2 px-[28px]" />-->
    </div>
  </div>
</template>

<script>

import pageMetadata from '~/mixins/pageMetadata';

export default {
  // you can set a custom layout for the error page error.statusCode === 404
  layout: 'error', // optional
  mixins: [pageMetadata],
  props: {
    error: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    imgMarginTop() {
      return this.notFound
        ? 'mt-[-2.4em] md:mt-[-3em] lg:mt-[-4em]'
        : 'mt-[-2.5em] md:mt-[-3.4em] lg:mt-[-11.4em]';
    },
    src() {
      return this.notFound ? '/img-error-404.jpg' : '/img-error-500.jpg';
    },
    alt() {
      return `error ${this.error.statusCode}`;
    },
    notFound() {
      return this.error.statusCode === 404;
    },
    title() {
      return this.notFound
        ? 'We all get lost sometimes.'
        : 'Oh no! It looks like our server <span class="lg:block inline"> is OOO.</span>';
    }
  },
  async mounted() {
    await this.$store.dispatch('setHeaderAttributes', {
      theme: 'dark'
    });
  }
};
</script>

<style lang="scss" scoped>

#error-container {
  width: 100%;
  background-size: cover;
  overflow: hidden;
  @include tablet-mobile{
    margin-top: 70px;
    padding-top: 20px;
  }

  .bg-img {

    @media only screen and (min-width: 1481px) and (max-width:1721px) {
      width:150%;
    }
    @media only screen and (min-width: 1322px) and (max-width:1480px) {
      width:135%;
    }
    @media only screen and (min-width: 1201px) and (max-width:1321px) {
      width:120%;
    }
    @media only screen and (min-width: 1023px) and (max-width: 1200px) {
      width:134%;
    }
  }

  .cta-btn {
  }
}

#skonaTitle {
  color: #343434;
  z-index: 9;
  max-width: 866px;
  @include mobile {
    //max-width: 330px;
    align-self: flex-start;
  }
}

#skonaDes {
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
}

html {
  @apply font-museo-sans text-base font-light;
}

body {
  &.has-nav-open {
    overflow: hidden;
  }
}

#__layout > div > div {
  &:before {
    display: table;
    clear: both;
    content: "";
  }
}
</style>