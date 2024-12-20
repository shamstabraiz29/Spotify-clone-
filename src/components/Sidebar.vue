<template>
  <aside class="sidebar">
    <header class="sidebar-header">
      <div class="library-icon">
        <Library color="#b3b3b3" />
      </div>
      <h1 class="library-title">Your Library</h1>
      <Plus size="20" color="#b3b3b3" />
    </header>
    <div class="sidebar-content">
      <div class="playlistCard-main">
        <PlaylistCard
          title="Create your first playlist"
          description="It's easy, we'll help you"
          buttonLabel="Create playlist"
          :onButtonClick="handleCreatePlaylist"
        />
        <PlaylistCard
          title="Let's find some podcasts to follow"
          description="We'll keep you updated on new episodes"
          buttonLabel="Browse podcasts"
          :onButtonClick="handlePodcasts"
        />
      </div>

      <footer class="sidebar-footer">
        <ul class="footer-links">
          <li v-for="link in footerLinks" :key="link.text">
            <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.text }}</a>
          </li>
        </ul>
        <div class="cookies-link">
          <a href="#" target="_blank" rel="noopener noreferrer">Cookies</a>
        </div>
        <div class="language-btn">
          <button>
            <span> <Globe size="18" /> </span>English
          </button>
        </div>
      </footer>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { Plus, Library, Globe } from 'lucide-vue-next'

import PlaylistCard from '../components/cards/PlaylistCard.vue'
const router = useRouter()

function handleCreatePlaylist() {
  console.log('Create playlist clicked')
}

function handlePodcasts() {
  console.log('Podcasts clicked')
  router.push({ path: 'podcasts' })
}

const footerLinks = [
  { text: 'Legal', url: '#' },
  { text: 'Safety & Privacy Center', url: '#' },
  { text: 'Privacy Policy', url: '#' },
  { text: 'Cookies', url: '#' },
  { text: 'About Ads', url: '#' },
  { text: 'Accessibility', url: '#' },
]
</script>

<style scoped lang="scss">
.sidebar {
  background-color: #121212;
  color: white;
  width: 430px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;

  .sidebar-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px;

    .library-icon {
      font-size: 1.5rem;
    }

    .library-title {
      flex-grow: 1;
      margin-left: 0.5rem;
      font-weight: bold;
      font-size: 16px;
      color: #b3b3b3;
      margin-bottom: 4px;
      &:hover {
        color: white;
      }
    }
  }
  .sidebar-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
    .playlistCard-main {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .sidebar-footer {
      padding-left: 20px;
      padding-right: 20px;
      .footer-links {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 12px;

        li {
          a {
            text-decoration: none;
            color: #b3b3b3;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .cookies-link {
        margin-top: 10px;

        a {
          color: white;
          text-decoration: none;
          font-size: 12px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
      .language-btn {
        button {
          display: flex;
          align-items: center;
          gap: 5px;
          background-color: transparent;
          color: white;
          border: 1px solid white;
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 2rem;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
