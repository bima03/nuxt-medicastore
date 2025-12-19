<template>
  <NuxtLink :to="artikelUrl" class="text-decoration-none">
    <div class="card h-100 border-0">
        <img :src="artikel?.vImages" class="card-img-top rounded" alt="">
        <div class="card-body p-0 mt-3">
            <h6 class="subtitle-1 mb-2" style="color: var(--neutral-oreo-darker);">{{ artikel?.vJudul }}</h6>
            <p class="subtitle-2" style="color: var(--neutral-oreo-base);">{{ artikel?.tCreated }}</p>
        </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { slugify } from '../../../utils/slugify'
  import { encodeId } from '../../../utils/hashify'

  const props = defineProps({
    artikel: Object
  })

  const artikelUrl = computed(() => {
    const slug = slugify(props.artikel?.vJudul)
    const hash = encodeId(props.artikel?.iId)
    return `/artikel/${slug}-${hash}`
  })
  
</script>

<style>

</style>