<template>
  <div id="banner-cta-block" class="banner-cta-block -mt-2 mb-44 ml-auto relative" @mouseleave="mouseLeave" @mouseover="mouseOver">
    <a href="/" class="w-full flex md:ml-16 ml-0 uppercase whitespace-nowrap">
      <div class="cta-line w-2/3 relative mt-3 h-0.5" />
      <img src="/icons/rectangle.svg" class="mr-2 cta-icon mt-0.5 -ml-2.5">See all case studies
    </a>
  </div>
</template>

<script>
export default {
  name: 'SkonaCTA',
  methods: {

  }
};
</script>

<style scoped lang="scss">

.banner-cta-block {
.cta-line {
  background: #343434;
  z-index: 1;
  transition: background 0.3s ease-out;

&:before {
   content: "";
   width: 75%;
   height: 100%;
   right: 0;
   position: absolute;
   z-index: -1;
   opacity: 0;
   transition: opacity 0.3s ease-out;
 }
}
}

</style>