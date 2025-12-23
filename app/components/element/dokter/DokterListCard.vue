<template>
  <div class="doctor-card d-flex gap-0">
    <!-- Dokter -->
    <NuxtLink :to="detailUrl" class="text-decoration-none">
    <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
      <img :src="dokter.vFoto" class="doctor-avatar" />
      <div class="d-flex flex-column">
        <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
          {{ dokter.vNama }}
        </h6>
        <div class="d-flex align-items-center gap-2">
          <PhStethoscope size="16" color="#206BBC"/>
          <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> {{ dokter.spesialis }} </p>
        </div>
        <div class="d-flex align-items-center gap-2" v-if="dokter.vSpesialis">
          <PhDotOutline weight="fill" size="16" color="#206BBC"/>
          <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);">{{ dokter.vSpesialis }}</p>
        </div>
      </div>
    </div>
    </NuxtLink>

    <!-- RumahSakit -->
    <div class="d-flex gap-2 align-items-start align-self-stretch mt-auto" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
      <div class="d-flex">
          <PhHospital size="16" color="#206BBC"/>
      </div>
      <div class="d-flex flex-column" style="color: var(--neutral-oreo-darker);">
        <h6 class="body-2 mb-1">
          {{ dokter.lokasiPraktek }}
        </h6>
        <p class="label mb-0">
          Buka di google maps
        </p>
      </div>
    </div>
    
  </div>
</template>

<script lang="js" setup>
  import { PhDotOutline, PhHospital, PhStethoscope } from '@phosphor-icons/vue';
  const props = defineProps({
    dokter: Object
  })

  const detailUrl = computed(() => {
    const slug = slugify(props.dokter?.namaDokter)
    const hash = encodeId(props.dokter?.iId)
    return `/dokter/${slug}-${hash}`
  })
</script>

<style>

</style>