<template>
  <div class="doctor-card d-flex gap-0">
    <!-- Dokter -->
    <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
      <div class="doctor-avatar skeleton skeleton-img">

      </div>
      <div class="d-flex flex-column w-75">
        <h6 class="subtitle-2 mb-3 skeleton skeleton-text lg" style="color: var(--neutral-oreo-darker);"></h6>
        <div class="d-flex align-items-center gap-2 mb-2">
          <PhStethoscope size="16" color="#206BBC"/>
          <p class="body-2 mb-0 skeleton skeleton-text sm" style="color: var(--neutral-oreo-dark);"></p>
        </div>
        <div class="d-flex align-items-center gap-2">
          <PhDotOutline weight="fill" size="16" color="#206BBC"/>
          <p class="body-2 mb-0 skeleton skeleton-text sm" style="color: var(--neutral-oreo-dark);"></p>
        </div>
      </div>
    </div>

    <!-- RumahSakit -->
    <div class="d-flex gap-2 align-items-start align-self-stretch mt-auto" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
      <div class="d-flex">
          <PhHospital size="16" color="#206BBC"/>
      </div>
      <div class="d-flex flex-column w-75" style="color: var(--neutral-oreo-darker);">
        <h6 class="body-2 mb-1 skeleton skeleton-text md"></h6>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
  import { PhDotOutline, PhHospital, PhStethoscope } from '@phosphor-icons/vue';
</script>

<style>

</style>