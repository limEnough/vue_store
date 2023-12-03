<template>
  <component :is="currentComponent"></component>
</template>

<script setup lang="ts">
  import middlewareComposable from '@/composables/views/middleware';

  const { currentComponent } = middlewareComposable();
</script>