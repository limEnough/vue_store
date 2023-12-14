// #region 컴포넌트 공통
export interface CustomEmit<T> {
  (event: T): void;
  (event: T, ...args: any): void;
  (event: any): void;
  (event: any, ...args: any): void;
}
// #endregion
