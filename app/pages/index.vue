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
    </div>
</template>

<script setup>
const showAlert = () => {
    alert("Hello from Bootstrap JavaScript!");
};
</script>
