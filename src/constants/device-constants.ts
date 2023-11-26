export const DEVICE = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
} as const;

export type Device = (typeof DEVICE)[keyof typeof DEVICE];
