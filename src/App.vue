<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
  import appComposable from '@/composables/app';

  appComposable();
</script>

<style lang="scss">
  @import '@/styles/base/fonts.scss';
  @import '@/styles/base/variables.scss';
</style>
