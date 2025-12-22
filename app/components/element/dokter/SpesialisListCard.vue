<template>
  <div class="category-card">
    <div class="category-icon">
      <img :src="spesialis?.vFoto" alt="Anak">
    </div>
    <div class="subtitle-1">{{ spesialis?.vNama }}</div>
    <PhQuestion class="ms-auto" data-bs-toggle="modal" data-bs-target="#penyakitModal" weight="fill" size="24"/>
  </div>
</template>

<script lang="js" setup>
import { PhQuestion } from '@phosphor-icons/vue';

  const props = defineProps({
    spesialis: Object
  })
</script>

<style>

</style>