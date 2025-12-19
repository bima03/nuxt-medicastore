<script setup>
    import { PhDot } from '@phosphor-icons/vue'
    import { useApiRoutes } from '../../../composables/useApiRoutes'
    import { useApi } from '../../../composables/useApi'
    import ArtikelSkeletonCard from '../../components/element/artikel/ArtikelSkeletonCard.vue'
    import ArtikelListCard from '../../components/element/artikel/ArtikelListCard.vue'
    import { onMounted } from 'vue'
    
    definePageMeta({
        layout: 'informasi-layout'
    })

    const route = useRoute()
    const api = useApiRoutes()
    const {get} = useApi()

    const slugParam = route.params.slug
    const encryptedId = slugParam.split('-').pop()
    const artikelId = decodeId(encryptedId)

    const { data:detail } = await useAsyncData(
        'detailArtikel',
        () => get(api.ARTIKELDETAIL, {
            id:artikelId,
        }), {immediate : true} // refresh
    )

    const { data:dataArtikel, pending:pendingArtikel, error: errorArtikel, refresh:refreshArtikel } = await useLazyAsyncData(
        'listSideBarArtikel',
        () => get(api.ARTIKEL, {
            page:0,
            count:5,
            keyword:"",
            popular:"",
            homepage:""
        }), {immediate : true} // refresh
    )

    // const safeContent = computed(() =>
    //     DOMPurify.sanitize(data.data?.vIsi)
    // )

    watch(dataArtikel, (val) => {
        console.log(val)
    })

    onMounted(async() => {
        refreshArtikel()
    })
</script>

<style>
    .content-artikel * {
        font-family: var(--font-family-base) !important
    }
</style>

<template>
    <div class="container mt-4">
        <div class="py-2 small">
            <div class="d-flex align-items-center justify-content-start gap-1">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><NuxtLink to="/artikel" class="text-decoration-none">Artikel</NuxtLink></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ detail.data?.vJudul }}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row g-4">
            <div class="col-md-8">
                <span class="headline-2">{{ detail.data?.vJudul }}</span><br>
                <small class="mb-3">Ditinjau oleh <strong>{{ detail.data?.vPengarang }}</strong> <PhDot size="24"/> {{ detail.data?.tCreated }}</small>
                <img :src="detail.data?.vImages" class="card-img-top rounded mb-3" alt="">
                <div class="content-artikel mb-3" v-html="detail.data?.vIsi"></div>
            </div>
            <div class="col-md-4">
                <div class="card row p-3 ms-3">
                    <span class="title-1 mb-3">Artikel Lainnya</span>
                    <template v-if="pendingArtikel">
                        <div class="col-12" v-for="i in 5">
                            <ArtikelSkeletonCard />
                        </div>
                    </template>
                    <template v-else-if="dataArtikel?.data?.length">
                        <div class="col-12" v-for="artikel in dataArtikel.data" :key="artikel.iId">
                            <ArtikelListCard :artikel="artikel" />
                        </div>
                    </template>
                    <template v-else>
                        <div class="col-12">
                            <strong>Belum ada data</strong>
                        </div>
                    </template>
                </div>
                
            </div>
        </div>
    </div>
</template>
