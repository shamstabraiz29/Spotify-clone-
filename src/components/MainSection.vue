<template>
  <div class="section">
    <div class="header">
      <a :href="link" class="heading">{{ sectionTitle }}</a>
      <div v-if="showSeeAll">
        <a :href="link" class="see-all">See all</a>
      </div>
    </div>
    <div class="artist-main" :class="{ 'flex-wrap': isWrapEnabled }">
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  sectionTitle: {
    type: String,
    default: 'Popular artists',
  },
  link: {
    type: String,
    default: '/',
  },
  showSeeAll: {
    type: Boolean,
    default: true,
  },
  isWrapEnabled: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.section {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;

    .see-all {
      font-size: 14px;
      font-weight: 700;
      text-decoration: none;
      color: #b0b0b0;
    }

    .heading {
      font-size: 24px;
      font-weight: 600;
      color: white;
      text-decoration: none;
    }
  }

  .artist-main {
    display: flex;
    align-items: center;
    gap: 10px;
    overflow-x: scroll;
    &.flex-wrap {
      flex-wrap: wrap;
    }
  }
}
</style>
