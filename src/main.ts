import { createSSRApp } from 'vue';
import VueLazyLoad from 'vue-lazyload';
import createCustomI18n from '@/plugins/custom-i18n';
// dayjs
import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import updateLocale from 'dayjs/plugin/updateLocale';
import { createPinia } from 'pinia';
import App from './App.vue';
import { addRoutesByDevice, createRouter } from './router/index';
import { useCommonStore } from './stores/common';

export async function createApp() {
  const app = createSSRApp(App);
  const pinia = createPinia();
  const router = createRouter();

  // #region pinia 설정
  const isSSR = import.meta.env.SSR;

  if (!isSSR) {
    console.log('csr일 경우 pinia state hydrate');
  }

  const commonStore = useCommonStore(pinia);
  // #endregion

  // #region i18n 설정
  const i18nDayjs = (await import(`./libraries/dayjs/i18n/${commonStore.lang}.ts`)).default();

  const i18n = await createCustomI18n({
    lang: commonStore.lang,
  });
  // #endregion

  // 디바이스에 따라 동적으로 라우트 추가
  await addRoutesByDevice(commonStore.device, router);

  dayjs.extend(localizedFormat);
  dayjs.extend(localeData);
  dayjs.extend(updateLocale);
  dayjs.updateLocale(commonStore.lang, i18nDayjs);
  dayjs.locale(commonStore.lang);

  app.use(pinia);
  app.use(router);
  app.use(i18n);
  app.use(VueLazyLoad);

  return {
    app,
    router,
    pinia,
  };
}
