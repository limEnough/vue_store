import { type Router, createMemoryHistory, createWebHistory, createRouter as vueCreateRouter } from 'vue-router';
import { isCSR } from '@/utils';
import appConfig from '@/configs/app.config';
import type { Device } from '@/constants/device-constants';
import { MAIN_PAGE_NAMES, MEMBER_PAGE_NAMES } from '@/constants/path-constants';
import { getRoutes } from './routes';

const createHistory = import.meta.env.SSR ? createMemoryHistory : createWebHistory;

function createRouter() {
  const router = vueCreateRouter({
    history: createHistory(),
    routes: [],
  });

  return router;
}

// 디바이스 별 파일 매칭
const addRoutesByDevice = async (deviceType: Device, router: Router) => {
  try {
    const routes = await getRoutes(deviceType);
    routes.forEach((route) => router.addRoute(route));
  } catch (error) {
    return console.error(error);
  }
};
export { createRouter, addRoutesByDevice };

// TODO: 라우트 이동 전 옵션 설정
export const addOnRouter = () => {
  const { NonUserAccessibleNames, UserAccessibleNames } = appConfig.routerAccess;
};
