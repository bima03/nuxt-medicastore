<template>
    <div>
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
