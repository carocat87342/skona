<template>
  <div v-if="!gotit" class="cookie-disclaimer fixed w-full py-5 bottom-0 bg-karl font-kepler-std-display text-big-blue z-50">
    <div class="container mx-auto">
      <div class="flex justify-between w-full">
        <div class="message w-1/">
          <p>
            <span class="text-2xl font-bold pr-3"> Did someone mention cookies?</span>
            <span>We use cookies to ensure that we give you the best experience on our website. You can find more info <nuxt-link class="underline" to="/">here.</nuxt-link> </span>
          </p>
        </div>
        <div>
          <cta-btn class="btn-big-blue" @click="gotit = true">
            Got it
          </cta-btn>
        </div>
        <div />
      </div>
    </div>
  </div>
</template>

<script>
import CtaBtn from '~/components/UI/CtaBtn';

export default {
  name: 'CookieDisclaimer',
  components: {
    CtaBtn
  },
  data: () => ({
    gotit: false
  })
};
</script>

<style scoped lang="scss">
.cookie-disclaimer{
  background-image: url("/shapes/cookie-disclaimer.svg");
  background-repeat: no-repeat;
  background-position: top left;
}

</style>