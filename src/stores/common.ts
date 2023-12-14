import { ref } from 'vue';
import { defineStore } from 'pinia';
import { DEVICE, type Device } from '@/constants/device-constants';
import type { Lang } from '@/constants/i18n-constants';

interface State {
  device: Device;
  lang: Lang;
}

export const useCommonStore = defineStore('common', () => {
  // #region device
  const device = ref<Device>(DEVICE.MOBILE);

  const setDevice = (deviceType: Device) => {
    device.value = deviceType;
  };
  // #endregion

  const lang = ref<Lang>('ko');

  return {
    // #region device
    device,
    setDevice,
    // #endregion

    lang,
  };
});

export type { State as CommonState };
