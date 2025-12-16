<template>
    <!-- <div class="container">
        BREADCRUMB
        <div class="py-2 small">
            <div class="container d-flex align-items-center justify-content-start gap-1">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Artikel</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Hasil Pencarian</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div> -->
    <div class="container py-4">

        <div class="py-2 small" v-if="keyword">
            <div class="container d-flex align-items-center justify-content-start gap-1">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#" @click="clearKeyword">Artikel</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Hasil Pencarian</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-4" v-if="keyword">
            <div class="flex-grow-1" style="max-width: 350px;">
                <input type="text" class="form-control" placeholder="Cari artikel" v-model="keywordInput" @keyup.enter="onSearchEnter">
            </div>
            <hr>
        </div>
        

        <!-- Header + Search -->
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4" v-if="!keyword">
            <h4 class="fw-bold m-0">Artikel-artikel Kesehatan<br>Terbitan Kami</h4>

            <div class="flex-grow-1" style="max-width: 350px;">
                <input type="text" class="form-control" placeholder="Cari artikel" v-model="keywordInput" @keyup.enter="onSearchEnter">
            </div>
        </div>

        <!-- Artikel Grid -->
        <div class="row g-4">
            <template v-if="pendingArtikel">
                <div class="col-12 col-md-6 col-lg-4" v-for="i in 9">
                    <ArtikelSkeletonCard />
                </div>
            </template>
            <template v-else>
                <div class="col-12 col-md-6 col-lg-4" v-for="artikel in dataArtikel.data" :key="artikel.iId">
                    <ArtikelListCard :artikel="artikel" />
                </div>
            </template>
        </div>

        <!-- PAGINATION -->
        <div class="d-flex justify-content-center justify-content-center mt-4">
            
        </div>
    </div>

</template>
<style>
.pagination .page-link {
    border-radius: 6px;
}

.pagination .page-item.active .page-link {
    background-color: var(--primary-base);
    border-color: var(--primary-base);
    color: #fff;
}

.pagination .page-item .page-link {
    color: var(--primary-base);
}

</style>
<script setup js>
    import { ref } from 'vue';
    import { useApiRoutes } from '../../../composables/useApiRoutes';
    import { useApi } from '../../../composables/useApi';
import ArtikelSkeletonCard from '../../components/element/artikel/ArtikelSkeletonCard.vue';
import ArtikelListCard from '../../components/element/artikel/ArtikelListCard.vue';

    definePageMeta({
        layout: 'informasi-layout'
    })

    const api = useApiRoutes()
    const {get} = useApi()
    const keyword = ref("")
    const keywordInput = ref("")
    const page = ref(0)
    const count = ref(15)

    const { data:dataArtikel, pending:pendingArtikel, error, refresh:refreshArtikel } = await useLazyAsyncData(
        'listArtikel',
        () => get(api.ARTIKEL, {
            page:page.value,
            count:count.value ?? 15,
            keyword:keyword.value,
            popular:"",
            homepage:""
        }), {immediate : true} // refresh
    )

    console.log(dataArtikel.value);

    watch(keyword, () => {
        refreshArtikel()
    })

    function onSearchEnter(){
        page.value = 1
        keyword.value = keywordInput.value.trim()
    }
    function clearKeyword(){
        keyword.value = '';
        keywordInput.value = '';
    }
</script>