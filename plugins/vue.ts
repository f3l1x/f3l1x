import Vue from "vue";
import {Plugin} from '@nuxt/types'
import {dayjs} from "~/lib/3rd/dayjs";
import {createModals, Modals} from "~/lib/ui/modals";
import {normalize as normalizeUrl} from "~/lib/utils/url";
import {linker} from "~/lib/utils/linker";
import {emojify} from "~/lib/utils/emoji";

declare module 'vue/types/vue' {
  interface Vue {
    $modals: Modals
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $modals: Modals,
  }

  interface Context {
    $modals: Modals,
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $modals: Modals,
  }
}

const plugin: Plugin = (ctx, inject) => {
  // Filters
  Vue.filter('truncate', (value: string, limit: number): string => {
    if (value.length > limit) {
      value = value.substring(0, (limit - 3)) + '...';
    }

    return value
  });

  Vue.filter('date', (value: string, format: string = "DD.MM.YYYY"): string => {
    return dayjs(value).format(format);
  });

  Vue.filter('datetime', (value: string, format: string = "DD.MM.YYYY hh:mm"): string => {
    return dayjs(value).format(format);
  });

  Vue.filter('linker', (object: any, type: string): string | undefined => {
    return linker(object, type);
  });

  Vue.filter('dayjs', (): dayjs.Dayjs => {
    return dayjs();
  });

  Vue.filter('emojify', (value: string): string => {
    return emojify(value);
  });

  Vue.filter('imagekit', (uri: string, options: any): string => {
    const url = new URL(normalizeUrl(ctx.$config.IMAGEKIT_URL, uri));

    if (options) {
      const tr = [];
      if (options.width) {
        tr.push(`w-${options.width}`);
      }
      if (options.height) {
        tr.push(`h-${options.height}`);
      }
      if (tr.length > 0) {
        url.searchParams.append("tr", tr.join(","));
      }
    }

    return url.toString();
  });

  // Nuxt $[key]
  inject('modals', createModals(ctx));
};

export default plugin;
