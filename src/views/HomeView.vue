<template>
  <main>
    <MainSection link="artists" :isWrapEnabled="false">
      <SongsCard
        v-for="(artist, index) in artists"
        :key="index"
        :img="artist.img"
        :artistName="artist.name"
        :artistDescription="artist.description"
      />
    </MainSection>
    <MainSection link="albums" sectionTitle="Popular albums and singles" :isWrapEnabled="false">
      <SongsCard
        v-for="(album, index) in albums"
        :key="index"
        :img="album.img"
        :artistName="album.name"
        :artistDescription="album.description"
        :rounded="false"
      />
    </MainSection>
    <MainSection link="radio" sectionTitle="Popular radio" :isWrapEnabled="false">
      <SongsCard
        v-for="(artist, index) in artists"
        :key="index"
        :img="artist.img"
        :artistName="artist.name"
        :artistDescription="artist.description"
        :rounded="false"
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

const albums = [
  {
    name: 'Coke Studio Season 14',
    description: 'Various Artists',
    img: 'https://i.scdn.co/image/ab67616d00001e0272a77d038887cdc425f5ee55',
  },
  {
    name: 'Doorie',
    description: 'Atif Aslam',
    img: 'https://i.scdn.co/image/ab67616d0000b27310ab3f7ae5fd77a23c6a7322',
  },
  {
    name: 'Jhoom',
    description: 'Ali Zafar',
    img: 'https://i.scdn.co/image/ab67616d00001e02f9ea670afa6ad3f5cc553f20',
  },
  {
    name: 'Back 2 Love',
    description: 'Rahat Fateh Ali Khan',
    img: 'https://i.scdn.co/image/ab67616d00001e0200c7fb9784fa0cbc02f567a6',
  },
  {
    name: 'King of Qawwali',
    description: 'Nusrat Fateh Ali Khan',
    img: 'https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58',
  },
]
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
