<template>
    
    <div>
        <!-- SHIPPING ADDRESS -->
        <div class="py-0 small">
            <div class="container d-flex align-items-center justify-content-end gap-1">
                <i class="bi bi-geo-alt text-primary"></i>
                <span>Di kirim ke -</span>
                <a href="#" class="text-decoration-none">Tambah Alamat</a>
                <i class="bi bi-caret-down-fill small"></i>
            </div>
        </div>
        
        <CarouselParallax />

        <h1 class="mb-3 headline-1">Welcome to Nuxt + Bootstrap (JS)</h1>

        <button class="btn btn-primary" @click="showAlert">
            <i class="bi bi-bell"></i> Click Me
        </button>
        <button @click="showAlert" class="btn btn-primary">Tes Toast</button>
    </div>
</template>

<script setup>
// const api = useApiRoutes();
// const { get } = useApi();
import { onMounted } from 'vue';
import { useApiRoutes } from '../../composables/useApiRoutes';
import { useApi } from '../../composables/useApi';
import { toast } from 'vue-sonner';

const api = useApiRoutes();
const {get} = useApi();

onMounted(async() => {
    fetchSlide();
})

function showAlert() {
    // toast.error("Data berhasil disimpan!")
    toast("Terjadi kesalahan!", {
        class: "toast-error"
    })
}

async function fetchSlide() {
    try {
        const res = await get(api.SLIDE);
        console.log(res);
    } catch (error) {
        console.error(error);
    } finally { // bagus buat loader
        // loading.value = false;
    }
}
</script>
