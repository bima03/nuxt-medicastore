<template>
    <div class="container d-flex justify-content-center p-5">

        <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
            <!-- ICON -->
            <img src="/public/images/otp.svg"
                    alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

            <!-- TITLE -->
            <h6 class="title-1" style="color: var(--neutral-oreo-darkest);">Masukkan Kode Verifikasi</h6>
            <p class="body-2" style="color: var(--neutral-oreo-base);">Kode verifikasi telah dikirim melalui <b>Email</b> atau <b>WhatsApp</b> Anda</p>

            <!-- INPUT OTP -->
            <div class="align-self-stretch p-5" style="background-color: #eee;">
                <p class="text-center caption-1">INI ADALAH TEMPAT FIELD OTP. <br>Makasih mas bim hehe</br></p> 
            </div>

        </div>

    </div>

    <div class="container d-flex justify-content-center p-5">
            <!-- BUTTON -->
            <div class="d-flex flex-column align-items-center gap-3">
                <div class="text-center body-2" style="color: var(--neutral-oreo-base);">Mohon tunggu dalam <b>30 detik</b> untuk kirim ulang</div>
                <button class="lg-btn-disable button-lm">
                Kirim Ulang Kode
                </button>
            </div>
    </div>
</template>
<style>

</style>
<script setup>
    definePageMeta({
        layout: 'login-layout'
    })

    import { ref } from "vue";

    const activeTab = ref("wa");
    const wa = ref("");
    const email = ref("");

    const showAlert = () => {
        alert("Hello from Bootstrap JavaScript!");
    };
</script>