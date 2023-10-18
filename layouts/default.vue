<template>
  <div>
    <Loader />
    <!-- Page header theme: 'dark' -->
    <skona-header v-bind="{ ...headerAttributes }" />
    <Nuxt />
    <skona-footer />
    <!--    <cookie-disclaimer />-->
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['headerAttributes'])
  }
};
</script>
<style lang="scss">
#__layout > div > div {
  &:before {
    display: table;
    clear: both;
    content: "";
  }
}
</style>