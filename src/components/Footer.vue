<template>
  <footer class="footer">
    <div class="footer-links">
      <div v-for="(column, index) in footerColumns" :key="index" class="footer-column">
        <h3>{{ column.title }}</h3>
        <ul>
          <li v-for="(link, linkIndex) in column.links" :key="linkIndex">
            <a :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>
      <div class="footer-column footer-socials-container">
        <div class="footer-socials">
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.href"
            class="social-icon"
          >
            <component :is="social.icon" />
          </a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Spotify AB</p>
    </div>
  </footer>
</template>

<script setup>
import { LucideInstagram, LucideTwitter, LucideFacebook } from 'lucide-vue-next'

const footerColumns = [
  {
    title: 'Company',
    links: [
      { text: 'About', href: '#' },
      { text: 'Jobs', href: '#' },
      { text: 'For the Record', href: '#' },
    ],
  },
  {
    title: 'Communities',
    links: [
      { text: 'For Artists', href: '#' },
      { text: 'Developers', href: '#' },
      { text: 'Advertising', href: '#' },
      { text: 'Investors', href: '#' },
      { text: 'Vendors', href: '#' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { text: 'Support', href: '#' },
      { text: 'Free Mobile App', href: '#' },
    ],
  },
  {
    title: 'Spotify Plans',
    links: [
      { text: 'Premium Individual', href: '#' },
      { text: 'Premium Duo', href: '#' },
      { text: 'Premium Family', href: '#' },
      { text: 'Premium Student', href: '#' },
      { text: 'Spotify Free', href: '#' },
    ],
  },
]

const socials = [
  { icon: LucideInstagram, href: '#' },
  { icon: LucideTwitter, href: '#' },
  { icon: LucideFacebook, href: '#' },
]
</script>

<style scoped lang="scss">
.footer {
  background-color: #121212;
  color: #b3b3b3;
  padding: 20px 16px;
  margin-top: 3rem;
  margin-bottom: 2rem;
  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 20px;

    .footer-column {
      flex: 1 1 calc(50% - 20px);
      min-width: 150px;

      h3 {
        font-size: 14px;
        color: white;
        margin-bottom: 10px;
        font-weight: 600;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 8px;

          a {
            text-decoration: none;
            color: #b3b3b3;
            font-size: 14px;
            font-weight: 500;

            &:hover {
              color: white;
            }
          }
        }
      }
    }

    .footer-socials-container {
      flex-basis: 100%;
      display: flex;
      justify-content: center;

      .footer-socials {
        display: flex;
        gap: 15px;

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: #282828;
          border-radius: 50%;
          color: white;
          transition: all 0.3s;

          &:hover {
            background-color: #bcb8b8;
            color: white;
          }

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    border-top: 1px solid #282828;
    padding-top: 20px;

    p {
      margin: 0;
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    .footer-links {
      flex-direction: column;
      gap: 10px;
    }

    .footer-column {
      flex: 1 1 100%;
      min-width: 100%;
    }

    .footer-socials-container {
      flex-basis: auto;
      justify-content: center;
    }

    .footer-bottom {
      display: block;
      padding-top: 15px;
    }
  }

  @media (min-width: 768px) {
    .footer-links {
      flex-wrap: nowrap;
      gap: 40px;

      .footer-column {
        flex: 1;
        min-width: auto;
      }

      .footer-socials-container {
        flex-basis: auto;
        justify-content: flex-end;
      }
    }

    .footer-bottom {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
