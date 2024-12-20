<template>
  <main class="search-section">
    <div>
      <h1 class="heading">Browse all</h1>
    </div>
    <div class="cards">
      <SearchCard
        v-for="(card, index) in cards"
        :key="index"
        :title="card.title"
        :imageSrc="card.imageSrc"
        :bgColor="card.bgColor"
      />
    </div>
  </main>
</template>

<script setup>
import SearchCard from '@/components/cards/SearchCard.vue'

const cards = [
  {
    title: 'Music',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
    bgColor: '#e20074',
  },
  {
    title: 'Live Events',
    imageSrc: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    bgColor: '#1DB954',
  },
  {
    title: '2024',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf3a376f97c4510dd35ef8118b',
    bgColor: '#5353e2',
  },
  {
    title: 'Made for You',
    imageSrc: 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    bgColor: '#FF5733',
  },
  {
    title: 'New Releases',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf194fec0fdc197fb9e4fe8e64',
    bgColor: '#FFC300',
  },
  {
    title: 'Desi',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005cafae8338a83b96acd1ab54416d',
    bgColor: '#C70039',
  },
  {
    title: 'Pop',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825',
    bgColor: '#581845',
  },
  {
    title: 'Summer',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60',
    bgColor: '#3498DB',
  },
  {
    title: 'Hip-Hop',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf5f3752b3234e724f9cd6056f',
    bgColor: '#1ABC9C',
  },
  {
    title: 'Educational',
    imageSrc: 'https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7',
    bgColor: '#9B59B6',
  },
  {
    title: 'Punjabi',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf4f1aa71a9cdcffdf8430c070',
    bgColor: '#E74C3C',
  },
  {
    title: 'Rock',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005cafda4c849095796a9e5d2c4ddb',
    bgColor: '#34495E',
  },
  {
    title: 'Netflix',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005caf51565028ee4188dbee2e4aa5',
    bgColor: '#FF5733',
  },
  {
    title: 'Blues',
    imageSrc: '	https://i.scdn.co/image/ab67fb8200005caf53eb5d52ae9152ce8461b387',
    bgColor: '#581845',
  },
  {
    title: 'Gaming',
    imageSrc: '	https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f',
    bgColor: '#1DB954',
  },
  {
    title: 'Anime',
    imageSrc: 'https://i.scdn.co/image/ab67fb8200005cafef78c123c1bf7d58c6708e89',
    bgColor: '#1ABC9C',
  },
]
</script>

<style scoped lang="scss">
.search-section {
  padding-top: 2rem;
  &:hover {
    cursor: pointer;
  }
  .cards {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .heading {
    font-weight: 700;
    font-size: 24px;
    color: white;
  }
}
</style>
