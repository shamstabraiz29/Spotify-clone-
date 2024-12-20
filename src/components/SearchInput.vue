<template>
  <div class="spotify-input">
    <div class="icon">
      <LucideSearch />
    </div>
    <input
      type="text"
      placeholder="What do you want to play?"
      v-model="inputValue"
      class="input-field"
    />
    <div class="divider"></div>
    <a href="/search" class="icon">
      <PanelTop @click="handleRoute" />
    </a>
  </div>
</template>

<script>
import { LucideSearch, PanelTop } from 'lucide-vue-next'

export default {
  name: 'SpotifyInput',
  components: {
    LucideSearch,
    PanelTop,
  },
  data() {
    return {
      inputValue: '',
    }
  },
}
</script>

<style lang="scss">
.spotify-input {
  display: flex;
  align-items: center;
  background-color: #1f1f1f;
  border-radius: 30px;
  padding: 12px 16px;
  color: #b3b3b3;
  width: 450px;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #b3b3b3;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  .input-field {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 16px;
    padding: 0 8px;

    &::placeholder {
      color: #b3b3b3;
    }
  }

  .divider {
    height: 24px;
    width: 1px;
    background-color: rgb(90, 90, 90);
    margin: 0 8px;
  }
}
</style>
