import { dynamicRoutes } from './services/dynamicRoutes';
import { metaDefault } from './constants';

require('dotenv').config();

// ENVIRONMENT VARIABLES
const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.ENVIRONMENT === 'prod';
const isStage = process.env.ENVIRONMENT === 'dev';

const target = `${process.env.HEADLESS_URL}/wp-json`;
const proxyConf = process.env.PROXY_CONFIG
  ? { target, changeOrigin: true, ...JSON.parse(process.env.PROXY_CONFIG) }
  : { target, changeOrigin: true };
const WEBSITE_URL = process.env.WEBSITE_URL;
const WORDPRESS_API_URL = isDev
  ? process.env.WEBSITE_URL
  : target;

export default {
  target: 'static',
  loading: false,
  router: {
    middleware: ['header'],
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'detect-location',
        path: '/detect-location',
        component: resolve(__dirname, 'components/EmptyComponent.vue')
      });
    }
  },
  head: {
    titleTemplate: '%s | Sköna',
    title: metaDefault.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: metaDefault.title },
      { hid: 'description', name: 'description', content: metaDefault.description },
      { hid: 'robots', name: 'robots', content: 'max-image-preview:large' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@skonatweet' },
      { hid: 'twitter:title', name: 'twitter:title', content: metaDefault.title },
      { hid: 'twitter:description', name: 'twitter:description', content: metaDefault.description },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: metaDefault.image },
      { hid: 'twitter:image:width', name: 'twitter:image:width', content: '1200' },
      { hid: 'twitter:image:height', name: 'twitter:image:height', content: '630' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@skonatweet' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:domain', name: 'twitter:domain', content: WEBSITE_URL },
      { hid: 'og:site_name', name: 'og:site_name', content: metaDefault.title },
      { hid: 'og:locale', name: 'og:locale', content: 'en_US' },
      { hid: 'og:title', property: 'og:title', content: metaDefault.title },
      { hid: 'og:description', property: 'og:description', content: metaDefault.description },
      { hid: 'og:image', property: 'og:image', content: metaDefault.image },
      { hid: 'og:type', property: 'og:type', content: metaDefault.type }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-16x16.png' },
      { rel: 'stylesheet', href: 'https://use.typekit.net/vrv4wuz.css' },
      { rel: 'preconnect', href: '//js.hsforms.net' },
      { rel: 'preconnect', href: 'https://www.bugherd.com' }
    ],
    script: [
      {
        charSet: 'utf-8', type: 'text/javascript', src: '//js.hsforms.net/forms/current.js', defer: true, body: true
      },
      {
        type: 'text/javascript',
        src: 'https://www.bugherd.com/sidebarv2.js?apikey=bxhokrhd3y0azvwl36zpfg',
        async: 'true'
      }
    ]
  },
  generate: {
    crawler: true,
    concurrency: 15,
    routes: dynamicRoutes
  },
  css: [],

  styleResources: {
    scss: ['~/assets/scss/_variables.scss', '~/assets/scss/main.scss']
  },

  plugins: [
    '~/plugins/api',
    '~/plugins/axios',
    { src: '~/plugins/loading', mode: 'client' },
    { src: '~/plugins/loadLayoutData' },
    { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components',
    '~/components/UI',
    '~/components/Layout',
    '~/components/Home',
    '~/components/Work',
    '~/components/Blog',
    '~/components/Blog/Item',
    '~/components/CaseStudy',
    '~/components/Services',
    '~/components/About'
  ],
  // components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
    '@/modules/sitemapRouteGenerator',
    '@/modules/generateStatics'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-precompress',
    ['vue-social-sharing/nuxt', {
      networks: {}
    }]
  ],
  robots: {
    ...(isProd && {
      UserAgent: '*',
      Sitemap: `${WEBSITE_URL}/sitemap.xml`,
      Allow: '*'
    }),
    ...(isStage && {
      UserAgent: '*',
      Disallow: '/'
    })
  },
  sitemap: {
    gzip: false,
    hostname: process.env.WEBSITE_URL,
    xslUrl: '/sitemap.xsl',
    defaults: {
      priority: 0.5,
      lastmod: new Date()
    },
    filter({ routes }) {
      return routes.map((route) => {
        if (route.url === '/') {
          route.priority = 1;
        } else if (route.url === '/about' ||
            route.url === '/blog' ||
            route.url === '/services' ||
            route.url === '/work' ||
            route.url === '/careers' ||
            route.url === '/contact'
        ) {
          route.priority = 0.9;
        } else if (/work\/[-\w]+/.test(route.url) ||
          /careers\/[-\w]+/.test(route.url) ||
           /blog\/[-\w]+/.test(route.url)) {
          route.priority = 0.8;
        }

        return route;
      }).sort((a, b) => b.priority - a.priority);
    }
  },

  proxy: {
    '/skona/v1': proxyConf
  },

  axios: {
    baseURL: WORDPRESS_API_URL
  },

  render: {
    compressor: {
      level: 9,
      threshold: 8192
    }
  },
  build: {
    transpile: ['gsap'],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },

  // add Hubspot form id variables here
  publicRuntimeConfig: {
    WEBSITE_URL,
    WORDPRESS_API_URL,
    HUBSPOT_PORTAL_ID: process.env.HUBSPOT_PORTAL_ID,
    CONTACTSWE_FORM_ID: process.env.CONTACTSWE_FORM_ID,
    CONTACT_FORM_ID: process.env.CONTACT_FORM_ID,
    SUBSCRIPTION_FORM_ID: process.env.SUBSCRIPTION_FORM_ID,
    EU_APPLY_FORM_ID: process.env.EU_APPLY_FORM_ID,
    US_APPLY_FORM_ID: process.env.US_APPLY_FORM_ID
  },
  privateRuntimeConfig: {}
};