import { type RouteRecordRaw } from 'vue-router';
import type { Device } from '@/constants/device-constants';
import { PAGE_CODE_MAIN } from '@/constants/page-code-constants';
import { MAIN_PAGE_NAMES } from '@/constants/path-constants';

const getMainRoutes = (deviceType: Device): RouteRecordRaw[] => {
  return [
    {
      path: '/',
      name: MAIN_PAGE_NAMES['main'],
      component: () => import(`../../views/${deviceType}/middleware.vue`),
      meta: {
        component: {
          index: () => import(`../../views/${deviceType}/main/index.vue`),
        },
        pageTitle: '메인',
        pageCode: PAGE_CODE_MAIN['MAIN'],
      },
    },
  ];
};

export default getMainRoutes;
