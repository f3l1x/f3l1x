import { NuxtOptions } from '@nuxt/types';
import { $content } from "@nuxt/content";
import { linker } from "~/lib/utils/linker";
import ENV from "./env.config";

// Base config
const config = {
  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-dev
  // dev: process.env.NODE_ENV !== 'production',

  // https://nuxtjs.org/guides/configuration-glossary/configuration-target
  target: 'static',

  // https://nuxtjs.org/guides/configuration-glossary/configuration-ssr
  ssr: true,

  // https://nuxtjs.org/guides/configuration-glossary/configuration-components
  components: false,

  // https://nuxtjs.org/guides/configuration-glossary/configuration-head
  head: {
    title: 'Milan Felix Šulc - engineering for living',
    titleTemplate: ENV.APP_DEV ? "[DEV] | %s" : "%s",
    meta: [
      { charset: 'utf-8' },
      { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'author', name: 'author', content: 'NX1' },
      { hid: 'googlebot', name: 'googlebot', content: ENV.APP_DEV ? 'nosnippet,noarchive' : 'snippet,archive' },
      { hid: 'robots', name: 'robots', content: ENV.APP_DEV ? 'noindex,nofollow' : 'index,follow' },
      { hid: 'theme-color', name: 'theme-color', content: '#4299e1' },
      { hid: 'description', name: 'description', content: 'I am Milan Šulc and I engineering for living.' },
      { hid: 'keywords', name: 'keywords', content: 'milan šulc, f3l1x, developer, php, nette, nette framework, javascript, typescript, vue, contributte' },
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'shortcut icon', href: '/favicon.png' },
    ]
  },

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/feed'
  ],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-plugins
  plugins: [
    { src: '~/plugins/vue.ts' },
    { src: '~/plugins/init.ts', mode: 'client' },
  ],

  // https://nuxtjs.org/guides/configuration-glossary/configuration-build
  build: {},

  // https://nuxtjs.org/guides/configuration-glossary/configuration-modules#buildmodules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-loading
  loading: {
    color: '#48bb78',
    failedColor: '#f97316',
    height: '5px',
    throttle: 20
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
  router: {
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'error-404',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue')
    //   });
    // }
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-generate
  generate: {
    dir: "dist",
    fallback: 'fallback.html',
  },

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-hooks
  hooks: {
    'content:file:beforeInsert': item => {
      item.stats = require('reading-time')(item.text);
      item.datetime = require('dayjs')(item.date).format();
      item.group = require('dayjs')(item.date).format('YYYY');
    }
  },

  // https://axios.nuxtjs.org/options/
  axios: {
    loading: true,
    debug: ENV.AXIOS_DEV,
  },

  // https://content.nuxtjs.org/
  content: {
    liveEdit: false,
  },

  // https://sitemap.nuxtjs.org/
  sitemap: [
    {
      hostname: ENV.APP_URL,
      path: '/sitemap.xml',
      gzip: true,
      exclude: [],
      async routes() {
        const routes = [];

        const articles = await $content('/articles', { deep: true })
          .sortBy('datetime', 'desc')
          .fetch() as any[];

        for (const article of articles) {
          routes.push(linker(article, 'article'));
        }

        return routes;
      }
    }
  ],

  // https://github.com/nuxt-community/feed-module
  feed: [
    {
      path: '/blog/feed.xml',
      async create(feed: any) {
        feed.options = {
          title: 'Felix DevBlog',
          description: 'I am Milan Šulc and I engineering for living',
          link: `${ENV.APP_URL}/blog/feed.xml`,
        };

        const articles = await $content('/articles', { deep: true })
          .sortBy('datetime', 'desc')
          .fetch() as any[];

        for (const article of articles) {
          const url = `${ENV.APP_URL}${linker(article, 'article')}`;

          feed.addItem({
            title: article.title,
            id: url,
            link: url,
            published: new Date(article.date),
            description: article.description,
            category: article.tags.map((tag: any) => ({ name: tag })),
          });
        }
      },
      cacheTime: 60 * 60 * 24,
      type: 'rss2',
    }
  ],

  // https://tailwindcss.nuxtjs.org/
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
    viewer: false,
  },

  // https://nuxtjs.org/guide/runtime-config
  publicRuntimeConfig: {
    APP_URL: ENV.APP_URL,
    IMAGEKIT_URL: ENV.IMAGEKIT_URL,
  }
} as Partial<NuxtOptions>;

// Production config
if (ENV.APP_PROD) {
  // https://google-analytics.nuxtjs.org
  config.buildModules!.push('@nuxtjs/google-analytics');
  (config.publicRuntimeConfig as any)['googleAnalytics'] = {
    id: 'UA-28123999-1'
  };

  // UA-28123999-1
  // 985f01401b527b16e809a765beb0c127c3d8f50e
  // https://github.com/f00b4r/nuxt-smartlook
  config.modules!.push('nuxt-smartlook');
  config.smartlook = {
    id: "be0504981ed612259f1b65116dfdb02df7fdc5b6",
    // enabled: process.env.NODE_ENV === 'production',
  }

  // 985f01401b527b16e809a765beb0c127c3d8f50e
  // https://github.com/f00b4r/nuxt-smartlook
  config.modules!.push('nuxt-smartlook');
  config.smartlook = {
    id: "be0504981ed612259f1b65116dfdb02df7fdc5b6",
    // enabled: process.env.NODE_ENV === 'production',
  }

  // https://sentry.nuxtjs.org/options/
  config.modules!.push('@nuxtjs/sentry');
  config.sentry = {
    dsn: ENV.SENTRY_DSN,
    // disabled: process.env.NODE_ENV !== 'production',
  }
}

export default config;
