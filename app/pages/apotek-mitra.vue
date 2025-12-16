<script setup lang="js">
  import TopBarIcon from '../components/element/TopBarIcon.vue';
  import { useApiRoutes } from '../composables/useApiRoutes';
  import { useApi } from '../composables/useApi';
  import SkeletonCard from '../components/element/apotek-mitra/SkeletonCard.vue';
  import ListCard from '../components/element/apotek-mitra/ListCard.vue';
  
  const api = useApiRoutes();
  const {get} = useApi();
  const { data, pending, error } = await useLazyAsyncData(
    'mitra',
    () => get(api.MITRA)
  )

  console.log(data.value);

</script>

<template>
  <!-- HEADER -->
  <top-bar-icon text="" title="Apotek Mitra" icon="storefront" />

  <div class="container my-5">

  <!-- Title -->
  <p class="text-center mb-4 body-1" style="color: var(--neutral-oreo-darker);">
    Medicastore didukung oleh jaringan apotek mitra yang tersebar di kota-kota besar antara lain:
  </p>

  <div class="row g-4">

    <template v-if="pending">
      <div class="col-md-6" v-for="i in 2">
        <SkeletonCard />
      </div>
    </template>
    <template v-else>
      <div class="col-md-6" v-for="mitra in data.data" :key="mitra.vNoIzinApotek">
        <ListCard :mitra="mitra" />
      </div>
    </template>

  </div>
</div>

</template>

<style></style>
