<template>
  
  <div class="category-card card-hover">
    <NuxtLink :to="listUrl" class="category-icon">
      <img :src="spesialis?.vFoto" :alt="spesialis?.vNama" style="border-radius: 50%;">
    </NuxtLink>
    <NuxtLink :to="listUrl" class="text-decoration-none subtitle-1" style="color: var(--neutral-oreo-darker);">
      <div class="subtitle-1">{{ spesialis?.vNama }}</div>
    </NuxtLink>
    
    <div class="wrapper ms-auto" @click="$emit('open-modal', spesialis)">
      <PhQuestion class="hover-icon" weight="fill" size="24" />
    </div>
  </div>
</template>

<script lang="js" setup>
  import { PhQuestion } from '@phosphor-icons/vue';
  import { computed } from 'vue'
  import { slugify } from '../../../utils/slugify'
  import { encodeId } from '../../../utils/hashify'

  const props = defineProps({
    spesialis: Object
  })

  const listUrl = computed(() => {
    const slug = slugify(props.spesialis?.vNama)
    const hash = encodeId(props.spesialis?.iId)
    return `/dokter/list/${slug}-${hash}`
  })

  defineEmits(['open-modal'])
</script>

<style>
  .hover-icon {
    opacity: 0;
    transform: translateX(6px);
    transition: all .2s ease;
  }

  .card-hover:hover .hover-icon {
    opacity: 1;
    transform: translateX(0);
  }
</style>