<template>
  <header class="header">
    <div class="logo-container">
      <Logo class="logo" v-if="!isMenuOpen" />
    </div>
    <div class="home-input">
      <a href="/" class="home-button">
        <Home color="#b3b3b3" />
      </a>
      <SearchInput />
    </div>
    <div class="auth-buttons">
      <Button variant="default" @click="handleSignupClick">Sign up</Button>
      <Button variant="primary" @click="handleLoginClick">Log in</Button>
    </div>
    <div class="menu-toggle-main">
      <div>
        <LucideSearch :size="20" />
      </div>
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen">
        <Menu v-if="!isMenuOpen" class="menu-icon" />
        <X v-else class="menu-icon" />
      </button>
    </div>
    <div class="side-nav" :class="{ 'side-nav-open': isMenuOpen }">
      <div class="side-nav-content">
        <div class="auth-link-mobile">
          <a href="/"> Sign up </a>
          <a href="/"> Log in </a>
        </div>
        <div class="hr" />
        <nav class="nav-links-mobile">
          <a v-for="(link, index) in links" :key="index" :href="link.href" class="nav-link">
            {{ link.text }}
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import SearchInput from './SearchInput.vue'
import { Home, Menu, X, LucideSearch } from 'lucide-vue-next'
import Logo from '../components/icons/logo.vue'
import Button from '../components/Button.vue'

const isMenuOpen = ref(false)

function handleSignupClick() {
  console.log('Sign up button clicked')
  isMenuOpen.value = false
}

function handleLoginClick() {
  console.log('Log in button clicked')
  isMenuOpen.value = false
}
const links = [
  { text: 'Premium', href: '#' },
  { text: 'Help', href: '#' },
  { text: 'Download', href: '#' },
  { text: 'Privacy', href: '#' },
  { text: 'Terms', href: '#' },
]
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  background-color: black;
  color: white;
  height: 4rem;
  padding-inline: 1rem;
  z-index: 50;
  gap: 1rem;
  overflow: hidden;
  padding-top: 6px;
}

.logo-container {
  display: flex;
  align-items: center;
  z-index: 51;

  .logo {
    fill: white;
    width: 40px;
    height: 40px;
  }
}

.home-input {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 10rem;
}

.home-button {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #1f1f1f;
  border-radius: 99px;
  height: 50px;
  width: 50px;
  flex-shrink: 0;
}

.auth-buttons {
  display: flex;
  gap: 1rem;
}
.menu-toggle-main {
  display: flex;
  align-items: center;
  gap: 10px;
}
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 51;
  padding: 0.5rem;

  .menu-icon {
    width: 24px;
    height: 24px;
  }
}

.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: black;
  transition: transform 0.3s ease-in-out;
  transform: translateX(100%);

  padding: 5rem 2rem 1rem;
  z-index: 50;

  &-open {
    transform: translateX(0);
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

@media (min-width: 1024px) {
  .menu-toggle {
    display: none;
  }
}

@media (max-width: 1023px) {
  .header {
    grid-template-columns: auto auto;
    justify-content: space-between;
  }

  .home-input {
    display: none;
  }

  .auth-buttons {
    display: none;
  }

  .menu-toggle {
    display: block;
  }
}

@media (max-width: 767px) {
  .header {
    padding-inline: 0.75rem;
  }

  .logo-container .logo {
    width: 36px;
    height: 36px;
  }
}
.auth-link-mobile {
  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: #b3b3b3;
      transition: color 0.2s ease-in-out;
    }
  }
}
.side-nav-content {
  .hr {
    width: 15px;
    height: 3px;
    background-color: white;
    margin-top: 20px;
  }
}

.auth-buttons-mobile {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.side-nav-open::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}
.nav-links-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.nav-links-mobile a {
  color: white;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #b3b3b3;
    transition: color 0.2s ease-in-out;
  }
}
</style>
