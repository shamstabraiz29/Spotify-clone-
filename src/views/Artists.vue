<template>
  <main>
    <MainSection :showSeeAll="false">
      <SongsCard
        v-for="(artist, index) in artists"
        :key="index"
        :img="artist.img"
        :artistName="artist.name"
        :artistDescription="artist.description"
      />
    </MainSection>
  </main>
</template>

<script setup>
import MainSection from '@/components/MainSection.vue'
import SongsCard from '@/components/cards/SongsCard.vue'

const artists = [
  {
    name: 'Atif Aslam',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88',
  },
  {
    name: 'Ali Zafar',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273453e292ec04853335c32e0b4',
  },
  {
    name: 'Nusrat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
  },
  {
    name: 'Shreya Ghoshal',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62',
  },
  {
    name: 'Atif Aslam',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88',
  },
  {
    name: 'Rahat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36',
  },
  {
    name: 'Nusrat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
  },
  {
    name: 'Shreya Ghoshal',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62',
  },
  {
    name: 'Rahat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36',
  },
  {
    name: 'Nusrat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
  },
  {
    name: 'Atif Aslam',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d00001e02aad3f4b601ae8763b3fc4e88',
  },
  {
    name: 'Ali Zafar',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273453e292ec04853335c32e0b4',
  },
  {
    name: 'Rahat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36',
  },
  {
    name: 'Nusrat Fateh Ali Khan',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
  },
  {
    name: 'Shreya Ghoshal',
    description: 'Artist',
    img: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62',
  },
]
</script>

<style scoped lang="scss"></style>
