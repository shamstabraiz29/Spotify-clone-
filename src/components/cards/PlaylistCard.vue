<template>
  <div class="card-section">
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <Button @click="onButtonClick" variant="primary" padding="0.5rem 1rem" fontSize="14px">
        {{ buttonLabel }}
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../Button.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttonLabel: {
    type: String,
    required: true,
  },
  onButtonClick: {
    type: Function,
    default: () => {},
  },
})
</script>

<style scoped lang="scss">
.card-section {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .card {
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 600;
      color: white;
    }

    p {
      margin: 0;
      color: white;
      font-size: 0.9rem;
    }

    button {
      margin-top: 10px;
      align-self: flex-start;
    }
  }
}
</style>
