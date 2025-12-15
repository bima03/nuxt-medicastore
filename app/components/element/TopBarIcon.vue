<template>
  <section class="bg-primary-fig position-relative overflow-hidden">
    <div class="container py-5 text-center text-white">
      <h2 class="fw-bold">{{title}}</h2>
      <p class="mb-0">{{text}}</p>
    </div>

    <!-- Icon Background -->
    <component
      v-if="IconComponent"
      :is="IconComponent"
      :size="220"
      weight="fill"
      class="faq-icon"
    />
  </section>
</template>

<script setup>
  import { computed } from "vue"
  import { usePhIcon } from '../../../composables/usePhIcons';
  const props = defineProps({
    title: {type: String, required: true},
    text: {type: String, required: true},
    icon: {type: String, required: true},
  })

const IconComponent = computed(() => usePhIcon(props.icon))
</script>

<style>
  @media (max-width: 768px) {
    .faq-icon {
      font-size: 140px;
      right: -30px;
    }
  }

  .faq-icon {
    position: absolute;
    right: -70px;        /* keluar ke kanan */
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.25); /* opacity */
    pointer-events: none;
  }
</style>