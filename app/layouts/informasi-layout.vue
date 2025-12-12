<template>
    <div class="app-wrapper d-flex flex-column min-vh-100">

        <!-- Backdrop -->
        <div id="dropdownBackdrop" class="fade"></div>

        <!-- offcanvas search -->
        <div class="offcanvas offcanvas-top h-50" id="offCanvasSearch" data-bs-backdrop="static" tabindex="-1" aria-labelledby="offcanvasTopLabel">
            <div class="offcanvas-header">
                <!-- <h5 class="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
            </div>
            <div class="offcanvas-body">
                <div class="container d-flex align-items-center justify-content-start">

                    <!-- LEFT: Toggler + Logo -->
                    <div class="d-flex align-items-center">
                        <!-- Hamburger -->
                        <button class="navbar-toggler navbar-toggler-sm me-2 d-lg-none w-xs-25" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Logo -->
                        <a class="navbar-brand d-flex align-items-center" href="#">
                            <!-- mobile 146x24 -- desktop 244x40 -->
                            <img src="https://medicastore.com/themes/blue/images/logo-lite-header.png" class="img-fluid logo" alt="logo">
                        </a>
                    </div>

                    <!-- search bar & jenis produk -->
                    <div class="d-flex align-items-center justify-content-between gap-2 d-lg-flex d-none" style="max-width: 500px;width: 100%;">

                        <!-- Tombol Kategori -->
                        <button class="btn btn-category px-3 py-2 gap-2 w-50">
                            <!-- <i class="bi bi-grid"></i> -->
                            <i class="ph ph-magnifying-glass"></i>
                            Jenis Produk
                        </button>

                        <!-- Search Group -->
                        <div class="input-group search-group w-100">
                            <input type="text" class="form-control" placeholder="Cari egoji">
                            <button class="btn btn-primary search-btn">
                            <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>

                    <!-- icon right -->
                    <div class="d-flex align-items-center ms-auto gap-3">

                        <!-- Search -->
                        <a href="#" class="text-dark">
                            <i class="bi bi-search"></i>
                        </a>

                        <!-- Cart -->
                        <a href="#" class="position-relative text-dark">
                            <i class="bi bi-cart2"></i>
                            <span class="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                                2
                            </span>
                        </a>

                        <!-- User -->
                        <a href="#" class="text-dark">
                            <i class="bi bi-person-circle"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- off canvas menu -->
        <div class="offcanvas offcanvas-start w-75" tabindex="-1" id="mobileMenu">
            <div class="offcanvas-header border-bottom">
                <!-- <h6 class="mb-0 fw-bold">MENU</h6>

                <button class="btn" data-bs-dismiss="offcanvas">
                    <i class="bi bi-x-lg fs-5"></i>
                </button> -->
            </div>

            <div class="offcanvas-body px-3">

                <!-- Link: Beranda -->
                <div class="d-flex align-items-center justify-content-between">
                    <NuxtLink 
                        to="/"
                        class="btn btn-primary-base d-flex align-items-center rounded-3 px-3 border button-lm"
                        type="button"
                        style="height: 40px;"
                    >
                        Belanja Obat di Medicastore
                    </NuxtLink>
                    
                    <button class="btn" data-bs-dismiss="offcanvas">
                        <Icon name="x" />
                    </button>
                </div>

                <small class="text-muted mt-3 d-block">Layanan Informasi</small>

                <NuxtLink to="/dokter" class="d-block py-2 fs-6 text-dark text-decoration-none">Dokter & Spesialis</NuxtLink>
                <NuxtLink to="/faskes" class="d-block py-2 fs-6 text-dark text-decoration-none">Fasilitas Kesehatan</NuxtLink>
                <NuxtLink to="/penyakit" class="d-block py-2 fs-6 text-dark text-decoration-none">Informasi Penyakit</NuxtLink>
                <NuxtLink to="/artikel" class="d-block py-2 fs-6 text-dark text-decoration-none">Artikel</NuxtLink>

                <hr>

                <a href="#" class="d-block py-2 fs-6 text-dark text-decoration-none">Konsultasi Online</a>

                <hr>

                <div class="small">
                    <a href="#" class="text-decoration-none text-muted me-2">Tentang Kami</a>
                    <a href="#" class="text-decoration-none text-muted">Syarat & Ketentuan</a>

                    <br>

                    <a href="#" class="text-decoration-none text-muted me-2">Kebijakan & Privasi</a>
                    <a href="#" class="text-decoration-none text-muted">Kritik & Saran</a>

                    <br>

                    <a href="#" class="text-decoration-none text-muted me-2">Apotek Mitra</a>
                    <a href="#" class="text-decoration-none text-muted">FAQ</a>
                </div>
            </div>
        </div>

        <!-- off canvas profile -->
        <div class="offcanvas offcanvas-bottom h-50" tabindex="-1" id="profileCanvas" aria-labelledby="offcanvasBottomLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
                ...
            </div>
        </div>

        <!-- new navbar -->
        <nav class="navbar d-block sticky-top navbar-expand-lg bg-white p-0" style="box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);">
            <!-- TOP BAR -->
            <div class="border-bottom py-1 small d-lg-block d-none">
                <div class="container d-flex justify-content-between align-items-center">

                    <!-- Download App -->
                    <div class="dropdown cart-dropdown" style="display: flex; align-items: center; gap: 4px; color: var(--neutral-oreo-dark);">
                        <icon name="device-mobile" size="16" />
                        <a href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--neutral-oreo-dark);" class="button-s text-decoration-none">Download Aplikasi Medicastore</a>
                        

                        <div class="dropdown-menu custom-download-app p-2">
                            <div class="d-flex gap-3">
                                <img src="/public/images/qrcode.svg">

                            <div class="text-align-start align-content-center">
                                <h6 class="subtitle-2" style="color: var(--neutral-oreo-darkest);">Download Aplikasi</h6>
                                <p class="body-2 mb-3" style="color: var(--neutral-oreo-dark);">Scan QR untuk download aplikasi. 
                                Atau download melalui:</p>

                            <div class="d-flex gap-1">
                                <div class="mt-0">
                                    <a href="#">
                                        <img src="https://medicastore.com/themes/blue/images/main-menu/googleplay.png" style="height:32px;">
                                    </a>
                                </div>
                                <div class="mt-0">
                                    <a href="#">
                                        <img src="https://medicastore.com/themes/blue/images/main-menu/appstore.png" style="height:32px;">
                                    </a>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div class="d-flex gap-3">
                        <a href="#" style="color: var(--neutral-oreo-dark);" class="button-s text-decoration-none">Konsultasi Online</a>

                    <!-- Layanan Informasi -->
                    <div class="dropdown" style="display: flex; align-items: center; gap: 4px; color: var(--neutral-oreo-dark);">
                        <a href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--neutral-oreo-dark);" class="button-s text-decoration-none">Layanan Informasi</a>
                        <icon name="caret-down" size="16" />

                        <ul class="dropdown-menu p-0 shadow-lg border-0 rounded-4 overflow-hidden" style="min-width: 220px;">
                            
                            <!-- MENU ITEMS -->
                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Dokter & Spesialis
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Fasilitas Kesehatan
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Informasi Penyakit
                                </a>
                            </li>

                        </ul>
                    </div>

                    <!-- Tentang Medicastore -->
                    <div class="dropdown" style="display: flex; align-items: center; gap: 4px; color: var(--neutral-oreo-dark);">
                        <a href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: var(--neutral-oreo-dark);" class="button-s text-decoration-none">Tentang Medicastore</a>
                        <icon name="caret-down" size="16" />

                        <ul class="dropdown-menu p-0 shadow-lg border-0 rounded-4 overflow-hidden" style="min-width: 220px;">
                            
                            <!-- MENU ITEMS -->
                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Tentang Kami
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Syarat & Ketentuan
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Kritik & Saran
                                </a>
                            </li>

                                                        <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-2" href="#" style="color: var(--neutral-oreo-darker);"> 
                                    Apotek Mitra
                                </a>
                            </li>

                        </ul>
                    </div>

                    <a href="#" style="color: var(--neutral-oreo-dark);" class="button-s text-decoration-none">FAQ</a>
                    </div>
                </div>
            </div>

            <!-- download card -->
            <div class="card shadow-sm border-0 p-3 rounded-3 d-flex align-items-center justify-content-between flex-row d-lg-none d-block">
        
                <!-- Close -->
                <button class="btn btn-link text-muted p-0 me-2">
                    <i class="bi bi-x-lg"></i>
                </button>

                <!-- Icon + Text -->
                <div class="d-flex align-items-center flex-grow-1">
                    <img src="https://medicastore.com/themes/blue/images/main-menu/medicapps.svg"
                        alt="icon" class="me-2" style="max-width: 40px; max-height: 40px;">

                    <div class="small lh-sm">
                        Belanja obat lebih mudah di aplikasi medicastore
                    </div>
                </div>

                <!-- Download Button -->
                <a href="#" class="btn btn-primary btn-sm px-3 rounded-3 ms-2">
                    Download
                </a>

            </div>

            <div class="container align-items-stretch py-3 px-3">
                <div class="d-flex align-items-center">
                    <!-- Hamburger -->
                    <button class="navbar-toggler me-1 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Logo -->
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <!-- mobile 146x24 -- desktop 244x40 -->
                        <img src="/public/images/logo-medicastore.svg" class="img-fluid logo" alt="logo" style="max-width: 244px; max-height: 35px;">
                    </a>
                </div>

                <div class="d-flex align-items-center justify-content-between gap-3 d-lg-flex d-none ms-auto">

                    <ul class="navbar-nav me-auto mb-2 gap-4 gap-md-2 mb-lg-0">
                        <li class="nav-item">
                            <NuxtLink to="/dokter" class="nav-link text-body-fig subtitle-2" aria-current="page" exact-active-class="active">Dokter & Spesialis</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/faskes" class="nav-link text-body-fig subtitle-2" aria-current="page" exact-active-class="active">Fasilitas Kesehatan</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/penyakit" class="nav-link text-body-fig subtitle-2" aria-current="page" exact-active-class="active">Informasi Penyakit</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink to="/artikel" class="nav-link text-body-fig subtitle-2" aria-current="page" exact-active-class="active">Artikel</NuxtLink>
                        </li>
                    </ul>
                    
                </div>

                <!-- icon right -->
                <div class="d-flex align-items-center ms-auto flex-shrink-0 ps-0">

                    <!-- User -->
                    <div class="user-menu ps-2 d-lg-block d-none">
                        <NuxtLink 
                            to="/"
                            class="btn btn-primary-base d-flex align-items-center rounded-3 px-3 border button-lm"
                            type="button"
                            style="height: 40px;"
                        >
                            Belanja Obat di Medicastore
                        </NuxtLink>
                    </div>

                </div>
            </div>
        </nav>

        <!-- PAGE CONTENT -->
        <div class="container-fluid py-4">
            <slot />
        </div>

        <!-- FOOTER -->
        <Footer />
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
    display: none;
    opacity: 0;
    transition: opacity .15s ease;
}

.dropdown-menu.show {
    display: block;
    opacity: 1;
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


</style>
<script setup>
import Icon from '../components/Icon.vue';
import Footer from '../components/layout/Footer.vue';

const showAlert = () => {
    alert("Hello from Bootstrap JavaScript!");
};

</script>
