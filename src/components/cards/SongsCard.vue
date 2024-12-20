<template>
  <div class="artist-card">
    <div class="artist-img" :class="{ rounded }">
      <img :src="img" :alt="artistName" />
      <div class="play-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M5 3.87v16.26c0 .75.82 1.22 1.48.84l13.26-8.13c.62-.38.62-1.3 0-1.68L6.48 3.03A1 1 0 0 0 5 3.87z"
          />
        </svg>
      </div>
    </div>
    <div class="content">
      <h2>{{ artistName }}</h2>
      <p>{{ artistDescription }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  img: {
    type: String,
    required: true,
  },
  artistName: {
    type: String,
    required: true,
  },
  artistDescription: {
    type: String,
    required: true,
  },
  rounded: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped lang="scss">
.artist-card {
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e1e1e;
  }

  .artist-img {
    position: relative;
    width: 200px;
    height: 200px;

    @media (max-width: 767px) {
      width: 150px;
      height: 150px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.rounded img {
      border-radius: 50%;
    }

    &:not(.rounded) img {
      border-radius: 5px;
    }

    .play-button {
      position: absolute;
      bottom: 10px;
      right: 10px;
      background-color: #1db954;
      color: black;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      opacity: 0;
      transform: scale(0.8);
      transition:
        opacity 0.3s ease,
        transform 0.3s ease;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  &:hover .play-button {
    opacity: 1;
    transform: scale(1);
  }

  .content {
    margin-top: 10px;

    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: white;
    }

    p {
      font-size: 14px;
      color: #b3b3b3;
    }
  }
}
</style>
