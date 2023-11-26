import type { RouteRecordRaw } from 'vue-router';
import type { Device } from '@/constants/device-constants';

interface RouteModule {
  default: (deviceType: Device) => RouteRecordRaw[]; // default 타입 선언
}

const getRoutes = async (deviceType: Device): Promise<RouteRecordRaw[]> => {
  // 현재 디렉토리에서 '-routes.ts'로 끝나는 모든 파일을 찾기
  const routeModules = import.meta.glob('./**/*-routes.ts');
  const routes: RouteRecordRaw[] = [];

  for (const path in routeModules) {
    // 찾아온 모든 routeModule 파일을 루프
    const module = await routeModules[path]();
    const typedModule = module as RouteModule;

    const getRoutesFunc = typedModule.default;

    const moduleRoutes = getRoutesFunc(deviceType);

    routes.push(...moduleRoutes);
  }

  return routes;
};

export { getRoutes };
