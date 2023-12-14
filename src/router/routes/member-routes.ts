import { type RouteRecordRaw } from 'vue-router';
import type { Device } from '@/constants/device-constants';
import { PAGE_CODE_DEPTH1, PAGE_CODE_DEPTH2 } from '@/constants/page-code-constants';
import { MEMBER_PAGE_NAMES } from '@/constants/path-constants';

const getMainRoutes = (deviceType: Device): RouteRecordRaw[] => {
  return [
    {
      path: '/member',
      name: MEMBER_PAGE_NAMES['member'],
      redirect: '/member/login',
      meta: {
        pageTitle: '로그인',
        pageCode: PAGE_CODE_DEPTH1['MEMBER'],
      },
      children: [
        {
          path: '/member/login',
          name: MEMBER_PAGE_NAMES['member-login'],
          component: () => import(`../../views/${deviceType}/middleware.vue`),
          meta: {
            component: {
              index: () => import(`../../views/${deviceType}/member/login/index.vue`),
            },
            pageTitle: '로그인',
            pageCode: PAGE_CODE_DEPTH2['LOGIN'],
          },
        },
      ],
    },
  ];
};

export default getMainRoutes;
