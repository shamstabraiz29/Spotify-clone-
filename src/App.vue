<template>
  <div class="app-layout">
    <Header class="app-header" />
    <div class="main-container">
      <Sidebar class="app-sidebar" />
      <main :class="mainContentClass" class="main-content">
        <RouterView />
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue'
const route = useRoute()

const mainContentClass = computed(() => {
  if (route.name === 'home') {
    return 'home-background'
  } else if (route.name === 'podcasts') {
    return 'podcasts-background'
  } else {
    return 'default-background'
  }
})
</script>

<style lang="scss">
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: black;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.main-container {
  display: flex;
  flex: 1;
  margin-top: 4rem;
  gap: 10px;
  padding-right: 10px;
}

.app-sidebar {
  position: fixed;
  left: 7px;
  top: 4rem;
  bottom: 0;
  width: 300px;
  overflow-y: auto;
  z-index: 90;
}

.main-content {
  flex: 1;
  margin-left: 450px;
  min-height: calc(100vh - 4rem);
  overflow-y: auto;
  padding: 1rem;
  color: white;
  border-radius: 8px;
}

.home-background {
  background: linear-gradient(to bottom, #1f1f1f, transparent 350px), #121212;
}

.podcasts-background {
  background: linear-gradient(to bottom, #004d40, transparent 350px), #121212;
}

.default-background {
  background: #121212;
}

@media (max-width: 1023px) {
  .main-container {
    padding-right: 0;
  }

  .app-sidebar {
    transform: translateX(-110%);
    transition: transform 0.3s ease-in-out;

    &.sidebar-open {
      transform: translateX(0);
    }
  }

  .main-content {
    margin-left: 0;
  }
}

html {
  scroll-behavior: smooth;
}
</style>
