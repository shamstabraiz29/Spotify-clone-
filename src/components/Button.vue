<template>
  <button :class="['base-button', variant]" :style="{ padding, fontSize }" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'default',
    },
    padding: {
      type: String,
      default: '0.8rem 1.5rem',
    },
    fontSize: {
      type: String,
      default: '1rem',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border: 1px solid transparent;
  font-weight: 700;

  &.default {
    background-color: transparent;
    color: #b0b0b0;
    border: none;

    &:hover {
      color: white;
    }
  }

  &.primary {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: #eaeaea;
    }
  }
}
</style>
