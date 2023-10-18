<template lang="html">
  <footer class="footer">
    <div class="container">
      <div class="grid grid-cols-12 gap-4 text-sm">
        <div class="block col-span-12 sm:col-span-6 md:col-span-7 mb-8 sm:mb-0">
          <router-link :to="{ name: 'index' }">
            <img :src="logo.logo_white" alt="Sköna Logo">
          </router-link>
        </div>
        <nav class="footer-menu col-span-6 sm:col-span-3 md:col-span-2 text-base">
          <ul>
            <li v-for="item in footerData.primary_menu" :key="item.title" class="footer-menu-item">
              <router-link :to="item.url">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
        <nav class="footer-menu col-span-6 sm:col-span-3 md:col-span-2">
          <ul>
            <li v-for="item in footerData.external_links" :key="item.title" class="footer-menu-item">
              <router-link :to="item.url">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        class="subfooter flex flex-col sm:grid sm:grid-cols-12 sm:gap-4">
        <template v-for="(contact, key) in footerData.contact_info">
          <div
            :key="key"
            class="sm:col-span-4 lg:col-span-3 opacity-50 mt-8 sm:mt-0">
            <div>{{ contact.adress_street }}</div>
            <div>{{ contact.adress_city }}</div>
            <div>{{ contact.phone }} | {{ contact.email }}</div>
          </div>
        </template>
        <div class="sm:col-start-10 sm:col-span-3 order-first sm:order-none">
          <ul class="flex">
            <li v-for="link in footerData.social_links" :key="link.title" class="mr-5">
              <a class="block w-5 h-5" :href="link.url" target="_blank">
                <img class="social-icon" :src="link.acf.menu_icon" :alt="link.title">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </dIv>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'SkonaFoter',
  computed: {
    ...mapState(['footerData', 'logo'])
  }
};
</script>

<style lang="scss" scoped>
.footer {
  @apply text-white bg-almost-500 pt-mobile-x-lg sm:pt-tablet-x-lg lg:pt-desktop-x-lg pb-mobile-md sm:pb-tablet-md lg:pb-desktop-md;
}

.footer-menu {
  &-item {
    @apply mb-mobile-sm sm:mb-tablet-sm last:mb-0;
    a {
      @apply uppercase opacity-50 hover:opacity-100 text-p-all-small font-medium leading-4 transition-opacity duration-200 inline-block;
      letter-spacing: 1px;
    }
  }
}

.subfooter {
  @apply mt-mobile-xx-lg
  sm:mt-tablet-xx-lg
  lg:mt-desktop-xx-lg
  pt-mobile-md
  sm:pt-tablet-md
  lg:pt-desktop-md
  text-p-all-small;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  line-height: 20px;
}
.social-icon {
  @apply opacity-50 hover:opacity-80 h-full w-full object-cover;
}
</style>