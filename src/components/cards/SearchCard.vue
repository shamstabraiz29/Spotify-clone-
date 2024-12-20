<template>
  <div class="search-card" :style="{ backgroundColor: bgColor }">
    <h4 class="heading">{{ title }}</h4>
    <div class="image-container" v-if="imageSrc">
      <img :src="imageSrc" :alt="title" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: '#e20074',
  },
})
</script>

<style scoped lang="scss">
.search-card {
  width: 270px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
  }
  .heading {
    font-weight: 700;
    font-size: 24px;
    color: white;
    z-index: 1;
  }

  .image-container {
    position: absolute;
    bottom: -7px;
    right: -11px;
    transform: rotate(15deg);
    z-index: 0;

    img {
      width: 120px;
      height: 120px;
      border-radius: 5px;
    }
  }
}
</style>
