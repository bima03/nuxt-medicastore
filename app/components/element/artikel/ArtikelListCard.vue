<template>
  <div class="card h-100 border-0">
      <img :src="artikel?.vImages" class="card-img-top rounded" alt="">
      <div class="card-body p-0 mt-3">
          <h6 class="subtitle-1 mb-2" style="color: var(--neutral-oreo-darker);">{{ artikel?.vJudul }}</h6>
          <p class="subtitle-2" style="color: var(--neutral-oreo-base);">{{ artikel?.tCreated }}</p>
      </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    artikel : Object
  })
</script>

<style>

</style>