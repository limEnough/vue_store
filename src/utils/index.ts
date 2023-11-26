// #region 환경 관련 유틸
export const isSSR = () => import.meta.env.SSR;
export const isCSR = () => !isSSR();
// #endregion