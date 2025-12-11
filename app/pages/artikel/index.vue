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

        <!-- Header + Search -->
        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
            <h4 class="fw-bold m-0">Artikel-artikel Kesehatan<br>Terbitan Kami</h4>

            <div class="flex-grow-1" style="max-width: 350px;">
                <input type="text" class="form-control" placeholder="Cari informasi dokter, fasilitas, penyakit, artikel">
            </div>
        </div>

        <!-- Artikel Grid -->
        <div class="row g-4">

            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0">
                    <img src="https://medicastore.com/images/artikel/Manfaat-Roll-On-Aromatik-untuk-Relaksasi.webp" class="card-img-top rounded" alt="">
                    <div class="card-body p-3">
                        <h6 class="fw-semibold mb-1">
                            Loperamide, Obat untuk Mengatasi Diare Akut dan Kronis
                        </h6>
                        <p class="text-muted small mb-1">13 Nov</p>
                    </div>
                </div>
            </div>
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0">
                    <img src="https://medicastore.com/images/artikel/Manfaat-Roll-On-Aromatik-untuk-Relaksasi.webp" class="card-img-top rounded" alt="">
                    <div class="card-body p-3">
                        <h6 class="fw-semibold mb-1">
                            Loperamide, Obat untuk Mengatasi Diare Akut dan Kronis
                        </h6>
                        <p class="text-muted small mb-1">13 Nov</p>
                    </div>
                </div>
            </div>
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0">
                    <img src="https://medicastore.com/images/artikel/Manfaat-Roll-On-Aromatik-untuk-Relaksasi.webp" class="card-img-top rounded" alt="">
                    <div class="card-body p-3">
                        <h6 class="fw-semibold mb-1">
                            Loperamide, Obat untuk Mengatasi Diare Akut dan Kronis
                        </h6>
                        <p class="text-muted small mb-1">13 Nov</p>
                    </div>
                </div>
            </div>
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0">
                    <img src="https://medicastore.com/images/artikel/Manfaat-Roll-On-Aromatik-untuk-Relaksasi.webp" class="card-img-top rounded" alt="">
                    <div class="card-body p-3">
                        <h6 class="fw-semibold mb-1">
                            Loperamide, Obat untuk Mengatasi Diare Akut dan Kronis
                        </h6>
                        <p class="text-muted small mb-1">13 Nov</p>
                    </div>
                </div>
            </div>
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0">
                    <img src="https://medicastore.com/images/artikel/Manfaat-Roll-On-Aromatik-untuk-Relaksasi.webp" class="card-img-top rounded" alt="">
                    <div class="card-body p-3">
                        <h6 class="fw-semibold mb-1">
                            Loperamide, Obat untuk Mengatasi Diare Akut dan Kronis
                        </h6>
                        <p class="text-muted small mb-1">13 Nov</p>
                    </div>
                </div>
            </div>
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0">
                    <img src="https://medicastore.com/images/artikel/Manfaat-Roll-On-Aromatik-untuk-Relaksasi.webp" class="card-img-top rounded" alt="">
                    <div class="card-body p-3">
                        <h6 class="fw-semibold mb-1">
                            Loperamide, Obat untuk Mengatasi Diare Akut dan Kronis
                        </h6>
                        <p class="text-muted small mb-1">13 Nov</p>
                    </div>
                </div>
            </div>

        </div>

        <!-- PAGINATION -->
        <div class="d-flex justify-content-center justify-content-center mt-4">
            <nav>
                <ul class="pagination pagination-sm">

                <!-- Prev -->
                <li class="page-item" :class="{ disabled: page <= 1 }">
                    <a class="page-link" href="#" @click.prevent="goToPage(page - 1)">
                    Previous
                    </a>
                </li>

                <!-- Page Numbers -->
                <li 
                    v-for="i in totalPages" 
                    :key="i"
                    class="page-item"
                    :class="{ active: page == i }"
                >
                    <a class="page-link" href="#" @click.prevent="goToPage(i)">
                    {{ i }}
                    </a>
                </li>

                <!-- Next -->
                <li class="page-item" :class="{ disabled: page >= totalPages }">
                    <a class="page-link" href="#" @click.prevent="goToPage(page + 1)">
                    Next
                    </a>
                </li>

                </ul>
            </nav>
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
<script>
    definePageMeta({
        layout: 'informasi-layout'
    })

    const items      = computed(() => artikel.value?.data || [])
    const totalPages = computed(() => artikel.value?.totalPages || 5)
</script>