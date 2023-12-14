<template>
  <div
    :class="{
      danger: isDanger,
      success: isSuccess,
      'search-mode': isSearch,
      required: required,
      clearable: clearable,
      visible: visible,
      [`size--${size}`]: size,
    }"
    class="input-component"
    v-bind="styleAttrs"
  >
    <!-- 라벨 -->
    <label
      v-if="isFocus && hasLabel"
      :for="`input-${name}`"
    >
      <slot name="title"></slot>
    </label>

    <!-- 박스 -->
    <div>
      <!-- 인풋 박스 -->
      <div>
        <!-- 1. 인풋 -->
        <input
          v-bind="inputBindings"
          :value="inputValue"
          :disabled="disabled"
          :aria-label="$attrs.placeholder?.toString()"
          :class="{
            'is-danger': isDanger,
          }"
          ref="inputElement"
          :id="`input-${name}`"
          @input="handleInput"
        />

        <!-- 2. overlay (timer) -->
        <slot name="overlay"></slot>

        <!-- 3. 우측 아이콘 영역 -->
        <slot name="button">
          <div class="fb__input__icon">
            <!-- clear 버튼 -->
            <Button
              v-show="clearable && 0 < modelValueTextLength"
              icon="clear"
              icon-only
              @click.stop="handleInputClear()"
            >
              <span class="blind">clear</span>
            </Button>

            <!-- 비밀번호 보기 버튼 -->
            <Button
              v-if="inputType === 'password' && visible"
              :class="{
                show: controlType !== inputType,
              }"
              icon="visible"
              icon-only
              @click.stop="handleInputVisible()"
            ></Button>
          </div>
        </slot>

        <!-- 4. 검색 버튼 -->
        <Button
          v-if="isSearch"
          type="button"
          icon="search"
          case="function"
          icon-only
          @click.stop="handleSearch(($event.target as HTMLInputElement).value)"
        >
          <span class="blind">search</span>
        </Button>
      </div>

      <!-- 글자수 카운터 -->
      <template v-if="useLengthCount && maxlength && !disabled">
        <!-- TODO: 카운트 컴포넌트 -->
        <div class="input-component__count">0/0</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  import inputComposables, { inputEmits, inputProps } from '@/composables/elements/input';
  import Button from '@/components/mobile/elements/button.vue';

  const emit = defineEmits(inputEmits);
  const props = defineProps(inputProps);

  const {
    styleAttrs,
    inputBindings,
    isDanger,
    isSuccess,
    isFocus,

    inputElement,

    modelValueTextLength,
    getExposeProperties,
    handleInputClear,
    handleSearch,
    handleInputVisible,

    // field
    inputValue,
    handleInput,
    inputType,
    controlType,
  } = inputComposables(emit, props);
</script>

<style lang="scss" scoped>
  @import '@/styles/mobile/components/elements/input.scss';
</style>
