<template>
  <main class="podcasts-section">
    <div>
      <h1 class="heading">Podcasts</h1>
    </div>
    <div>
      <div class="title">
        <h4>Categories</h4>
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
    </div>
  </main>
</template>

<script setup>
import SearchCard from '@/components/cards/SearchCard.vue'

const cards = [
  {
    title: 'Documentary',
    imageSrc: '	https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    bgColor: '#e20074',
  },
  {
    title: 'Live Events',
    imageSrc: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    bgColor: '#1DB954',
  },
  {
    title: 'Educational',
    imageSrc: 'https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7',
    bgColor: '#9B59B6',
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
    title: 'Punjabi',
    bgColor: '#E74C3C',
  },
  {
    title: 'Rock',
    bgColor: '#34495E',
  },
  {
    title: 'Netflix',
    bgColor: '#FF5733',
  },
  {
    title: 'Blues',
    bgColor: '#581845',
  },
]
</script>

<style scoped lang="scss">
.podcasts-section {
  .heading {
    font-size: 6rem;
    font-weight: 700;
    color: white;
    @media (max-width: 767px) {
      font-size: 3rem;
    }
  }
  .title h4 {
    font-weight: 600;
    font-size: 24px;
    color: white;
  }
  .cards {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
}
</style>
