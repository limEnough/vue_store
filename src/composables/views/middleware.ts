import { type Component, defineAsyncComponent, shallowRef, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default function middlewareComposable() {
  const router = useRouter();
  const route = useRoute();

  const currentComponent = shallowRef<string | Component>('div');

  const initComponent = () => {
    const indexComponent = router.currentRoute.value.meta.component?.index?.();

    const themeComponent = defineAsyncComponent({
      loader: () => indexComponent,
      // errorComponent
    });

    if (indexComponent) currentComponent.value = themeComponent;
  };

  const init = () => {
    initComponent();

    watch(
      () => route.name,
      () => {
        initComponent();
      },
    );
  };

  init();

  return {
    currentComponent,
  };
}
