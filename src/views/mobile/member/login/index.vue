<template>
  <div class="login">
    <Input
      v-model="userEmail"
      :use-length-count="false"
      placeholder="EMAIL"
      is-card-type
    >
      <template #title> EMAIL </template>
    </Input>

    <Input
      v-model="userPassword"
      :use-length-count="false"
      placeholder="PASSWORD"
      type="password"
      visible
      is-card-type
    >
      <template #title> PASSWORD </template>
    </Input>
  </div>
</template>

<script setup lang="ts">
  import loginComposable from '@/composables/views/member/login';
  import Input from '@/components/mobile/elements/input.vue';

  const { userEmail, userPassword } = loginComposable();
</script>

<style lang="scss" scoped></style>
