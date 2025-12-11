<template>
    <div class="app-wrapper d-flex flex-column min-vh-100">

        <!-- Backdrop -->
        <div id="dropdownBackdrop" class="fade"></div>


        <!-- new navbar -->
        <nav class="navbar border-bottom-0 d-block sticky-top navbar-expand-lg p-0" style="background: var(--primary-base); box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);">

            <div class="container align-items-stretch justify-content-center py-3 px-3">
                <div class="d-flex align-items-center">

                    <!-- Logo -->
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <!-- mobile 146x24 -- desktop 244x40 -->
                        <img src="/public/images/logo-medicastore-putih.svg" class="img-fluid logo" alt="logo" style="max-width: 244px; max-height: 32px;">
                    </a>
                </div>

            </div>
        </nav>

        <div class="container d-flex justify-content-center p-5">

            <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
                <!-- ICON -->
                <img src="/public/images/login.svg"
                        alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

                <!-- TITLE -->
                <h6 class="title-1" style="color: var(--neutral-oreo-darkest);">Masuk/Daftar</h6>
                <p class="body-2" style="color: var(--neutral-oreo-base);">Masukkan email atau nomor ponsel untuk masuk atau daftar akun jika belum punya.</p>

                <!-- SWITCH TAB -->
                <div class="d-flex mb-3 switch-tabs">
                    <button 
                    class="switch-btn flex-fill"
                    :class="{ active: activeTab === 'wa' }"
                    @click="activeTab = 'wa'"
                    >
                    No. Whatsapp
                    </button>

                    <button 
                    class="switch-btn flex-fill"
                    :class="{ active: activeTab === 'email' }"
                    @click="activeTab = 'email'"
                    >
                    Email
                    </button>
                </div>

                <!-- FORM WHATSAPP -->
                <div class="align-self-stretch" id="formWa">
                    <label class="body-2 mb-1" style="color: var(--neutral-oreo-darker);">Nomor Whatsapp</label>
                    <div class="input-group mb-4" style="height: 40px;">
                        <span class="subtitle-2 input-group-text" style="color: var(--neutral-oreo-darker);">+62</span>
                        <input type="text" class="body-2 form-control" placeholder="Masukkan nomor whatsapp">
                    </div>
                </div>

                <!-- FORM EMAIL -->
                <div id="formEmail" style="display:none;">
                    <label class="mb-1">Email</label>
                    <input type="email" class="form-control mb-3" placeholder="Masukkan email">
                </div>

                <!-- BUTTON -->
                <div class="d-flex flex-column gap-2 align-self-stretch">
                    <button class="lg-btn-primary button-lm">Selanjutnya</button>
                    <div class="text-center body-2" style="color: var(--neutral-oreo-base);">atau</div>
                    <button class="lg-btn-outline button-lm" style="background-color: var(--neutral-milk-lightest); color: var(--neutral-oreo-darker);">
                    <img src="https://img.icons8.com/color/20/000000/google-logo.png" class="me-2">
                    Lanjutkan dengan Google
                    </button>
                </div>
            </div>

        </div>
        

        <!-- FOOTER -->
        <footer class="bg-primary text-white pt-5" style="background-color:#15477D !important;">
            <div class="container">
                <div class="row">

                    <!-- Left Section -->
                    <div class="col-md-4 mb-4">
                        <img src="https://medicastore.com/themes/blue/images/logo-dark-header-default.png" alt="medicastore" class="mb-3" style="max-width:180px;">

                        <p class="small">
                            Scan QR code atau download aplikasi Medicastore yang tersedia di iOS dan Android.
                        </p>

                        <div class="row">
                            <div class="col-12 mt-2">
                                <a href="#">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/googleplay.png" style="height:40px;">
                                </a>
                            </div>
                            <div class="col-12 mt-2">
                                <a href="#">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/appstore.png" style="height:40px;">
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Middle Section 1 -->
                    <div class="col-md-3 mb-4">
                        <h6 class="fw-bold mb-3">Medicastore</h6>
                        <ul class="list-unstyled small">
                            <li><a href="#" class="text-white text-decoration-none">Tentang Kami</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Syarat & Ketentuan</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Kebijakan & Privasi</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Kritik & Saran</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Apotek Mitra</a></li>
                            <li><a href="#" class="text-white text-decoration-none">FAQ</a></li>
                        </ul>
                    </div>

                    <!-- Middle Section 2 -->
                    <div class="col-md-3 mb-4">
                        <h6 class="fw-bold mb-3">Layanan Kami</h6>
                        <ul class="list-unstyled small">
                            <li><a href="#" class="text-white text-decoration-none">Beli Obat</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Informasi Penyakit</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Informasi Dokter</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Informasi Fasilitas Kesehatan</a></li>
                            <li><a href="#" class="text-white text-decoration-none">Artikel Kesehatan</a></li>
                        </ul>
                    </div>

                    <!-- Right Section -->
                    <div class="col-md-2 mb-4">
                        <h6 class="fw-bold mb-3">Hubungi Kami</h6>
                        <ul class="list-unstyled small">
                            <li class="mb-2"><i class="bi bi-envelope"></i> support@medicastore.com</li>
                            <li class="mb-2"><i class="bi bi-telephone"></i> 021-29293456</li>
                            <li>
                                <i class="bi bi-geo-alt"></i> 
                                Jl Pospengumben Lama No. 2A,<br>
                                Kembangan, Jakarta Barat,<br>
                                DKI Jakarta, Indonesia
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center mt-3 small" style="background-color:#143D73;">
                <div class="container py-2">
                    <div class="d-flex align-items-center justify-content-between">
                        <span>Copyright © {{ new Date().getFullYear() }} by medicastore</span>
                        <span>PT. Clinisindo Putra Perkasa</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<style scoped>
    .logo {
        width: auto;
        height: auto;
        max-height: 40px;
    }

    @media (max-width: 558px) {
        .logo {
            width: 173px;
            height: auto;
        }
    }

    :root {
        --logo-w-desktop: 244px;
        --logo-h-desktop: 40px;

        --logo-w-mobile: 120px;
        --logo-h-mobile: 24px;
    }

    /* khusus mobile */
    @media (max-width: 558px) {
        .navbar-toggler-sm {
            padding: 0.15rem 0.25rem;
            font-size: 1rem;
        }
    }
    
    .blibli-banner {
    width: 100%;
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    padding-bottom: 20px;
}

.banner-slide {
    position: relative;
}

.banner-img {
    width: 100%;
    border-radius: 16px;
}

.banner-tag {
    font-size: 14px;
    margin-top: 12px;
    padding: 0 12px;
    color: #555;
}

.banner-benefit {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    gap: 32px;
    font-size: 14px;
}

.banner-benefit .b-item {
    display: flex;
    align-items: center;
    gap: 6px;
}

.banner-benefit img {
    width: 20px;
    height: 20px;
}

.banner-dots {
    display: flex;
    justify-content: center;
    margin-top: 16px;
    gap: 6px;
}

.banner-dots .dot {
    width: 24px;
    height: 6px;
    background: #d9d9d9;
    border-radius: 999px;
    display: inline-block;
    transition: background 0.2s;
}

.banner-dots .dot.active {
    background: #333;
    width: 36px;
}
html, body {
    height: 100%;
}

body {
    display: flex;
    flex-direction: column;
}

footer {
    margin-top: auto;
}

#dropdownBackdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.25);
    display: none;
    opacity: 0;
    transition: opacity .15s ease;
    z-index: 990;
}

#dropdownBackdrop.show {
    opacity: 1;
}

.dropdown-menu {
    top: 60px !important;
    display: none;
    opacity: 0;
    transition: opacity .15s ease;
}

.dropdown-menu.show {
    display: block;
    opacity: 1;
}

.dropdown-menu .dropdown-divider {
    border-color: #f5f5f5; /* ubah warna garis */
    border-width: 1px;     /* ketebalan garis */
    margin: 12px 0;         /* jarak vertikal */
    opacity: 1;            /* hilangkan transparansi bawaan */
}
/* =============== */
/* Hilangkan style bawaan */
.custom-cart-menu {
    display: none;
    opacity: 0;
    border: none;
    border-radius: 20px;
    width: 383px;
    left: 50% !important;
    transform: translateX(-50%) !important;
    top: 60px !important;

    background: white;
    box-shadow: 0px 12px 40px rgba(0,0,0,0.15);
    transition: opacity .2s ease;
    padding: 32px 24px;
}

.custom-cart-menu.show {
    display: block;
    opacity: 1;
}

/* tombol cart */
.cart-btn {
    border-radius: 12px;
    padding: 8px 12px;
}

/* ============= */
.search-wrapper {
    position: relative;
    flex-grow: 1;            /* 🔥 BIAR IKUT MELEBAR */
    max-width: 100%;
}

.search-input {
    height: 40px;
    width: 100%;             /* 🔥 LEBAR FLEXIBLE */
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    padding-left: 18px;
    padding-right: 45px;     /* 🔥 TAMBAH SPASI UNTUK BUTTON */
    font-size: 14px;
}

.search-button {
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
    height: 32px;
    width: 32px;
    background: var(--primary-base);
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

/* button surface-large */
.lg-btn-surface {
    border-style: unset;
    display: flex;
    height: 40px;
    min-width: 100px;
    padding: 10px 8px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
    background: #EDF2FA;
    color: var(--primary-base);
}

/* button primary-large */
.lg-btn-primary {
    text-decoration: none;
    border-style: unset;
    display: flex;
    height: 40px;
    min-width: 100px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
    background: var(--primary-base);
    color: #FFF;
}

/* button outline-large */
.lg-btn-outline {
    text-decoration: none;
    border: 2px solid var(--border-default, #E6E6E6);
    display: flex;
    height: 40px;
    min-width: 100px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
}

.user-btn-navbar {
    display: flex;
    height: 40px;
    min-width: 100px;
    max-width: 241px;
    padding: 10px 8px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid var(--surface-primary, #EDF2FA);
    background: var(--pallete-neutral-milk-lightest, #FFF);
    color: var(--neutral-oreo-darker);

    /* Lvl1 */
    box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
}

.limit-text {
    max-width: 150px;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    align-self: stretch;
    overflow: hidden;
    text-overflow: ellipsis;
}

.custom-logincard {
    display: flex;
    width: 375px;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    border-radius: 8px;
    border: 1px solid var(--border-default, #E6E6E6);
    background: var(--pallete-neutral-milk-lightest, #FFF);

/* Lvl1 */
box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
}

.switch-btn {
  border: 1px solid #d5d5d5;
  padding: 8px 16px;
  background: #ececec;
  border-radius: 6px;
  font-size: 14px;
}

.switch-btn.active {
  background: white;
  border: 1px solid #c8c8c8;
  font-weight: 600;
}

</style>
<script setup>
import { ref } from "vue";

const activeTab = ref("wa");
const wa = ref("");
const email = ref("");

import Icon from '../components/Icon.vue';

const showAlert = () => {
    alert("Hello from Bootstrap JavaScript!");
};

</script>
