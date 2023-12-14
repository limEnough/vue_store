<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
  import appComposable from '@/composables/app';

  appComposable();
</script>
