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
                <h6 class="mb-0 fw-bold">MENU</h6>

                <button class="btn" data-bs-dismiss="offcanvas">
                    <i class="bi bi-x-lg fs-5"></i>
                </button>
            </div>

            <div class="offcanvas-body px-3">

                <!-- Link: Beranda -->
                <a href="#" class="d-flex align-items-center gap-3 py-2 fs-6 text-dark text-decoration-none">
                    <i class="bi bi-house-door fs-5"></i>
                    Beranda
                </a>

                <small class="text-muted mt-3 d-block">Layanan Informasi</small>

                <a href="#" class="d-block py-2 fs-6 text-dark text-decoration-none">Dokter & Spesialis</a>
                <a href="#" class="d-block py-2 fs-6 text-dark text-decoration-none">Fasilitas Kesehatan</a>
                <a href="#" class="d-block py-2 fs-6 text-dark text-decoration-none">Informasi Penyakit</a>
                <a href="#" class="d-block py-2 fs-6 text-dark text-decoration-none">Artikel</a>

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
                    <div>
                        <a href="#" class="text-decoration-none text-secondary">Download aplikasi medicastore</a>
                    </div>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-decoration-none text-secondary">Konsultasi Online</a>
                        <a href="#" class="text-decoration-none text-secondary">Layanan Informasi</a>
                        <a href="#" class="text-decoration-none text-secondary">Tentang Medicastore</a>
                        <a href="#" class="text-decoration-none text-secondary">FAQ</a>
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
                        <img src="/public/images/logo-medicastore.svg" class="img-fluid logo d-none d-sm-block" alt="logo" style="max-width: 244px; max-height: 35px;">
                        <img src="/public/images/logo-medicastore-lite.png" class="img logo d-block d-sm-none" alt="logo" style="max-width: 40px; max-height: 40px; padding-left: 10px;">
                    </a>
                </div>

                <div class="d-flex align-items-center justify-content-between gap-3 d-lg-flex d-none ms-auto">

                    <ul class="navbar-nav me-auto mb-2 gap-4 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-body-fig subtitle-2" aria-current="page" href="#">Dokter & Spesialis</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body-fig subtitle-2" aria-current="page" href="#">Fasilitas Kesehatan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body-fig subtitle-2" aria-current="page" href="#">Informasi Penyakit</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-body-fig subtitle-2" aria-current="page" href="#">Artikel</a>
                        </li>
                    </ul>
                    
                </div>

                <!-- icon right -->
                <div class="d-flex align-items-center ms-auto flex-shrink-0 ps-0">

                    <!-- User -->
                    <div class="user-menu ps-2 d-lg-block d-none">
                        <button 
                            class="btn d-flex align-items-center gap-2 rounded-3 px-3 border bg-primary-base button-lm"
                            type="button"
                            style="height: 40px;"
                        >
                            Belanja Obat di Medicastore
                        </button>
                    </div>

                </div>
            </div>
        </nav>

        <!-- SHIPPING ADDRESS -->
        <div class="border-top py-2 small">
            <div class="container d-flex align-items-center justify-content-start gap-1">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Artikel</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Hasil Pencarian</li>
                    </ol>
                </nav>
            </div>
        </div>
        
        <div class="container">
            <CarouselParallax />
        </div>
        
        <!-- PAGE CONTENT -->
        <div class="container py-4">
            <slot />
        </div>

        <!-- medicastore guarantee -->
        <div class="container-fluid surface-primary">
            <div class="container py-5">
                <div class="row g-4">

                    <!-- Item 1 -->
                    <div class="col-md-6 d-flex">
                        <div class="me-3">
                            <icon name="medal" size="40" color="#206BBC" />
                        </div>
                        <div>
                            <h5 class="fw-semibold mb-1">100% Original</h5>
                            <p class="mb-0 text-muted">
                                Semua produk terdaftar di BPOM dan Kemenkes, berasal dari supplier resmi dengan harga bersaing.
                            </p>
                        </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="col-md-6 d-flex">
                        <div class="me-3">
                            <icon name="moped-front" size="40" color="#206BBC" />
                        </div>
                        <div>
                            <h5 class="fw-semibold mb-1">Packing Aman</h5>
                            <p class="mb-0 text-muted">
                                Setiap pesanan dikemas rapi dan aman agar kenyamanan dan privasi Anda tetap terjaga.
                            </p>
                        </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="col-md-6 d-flex">
                        <div class="me-3">
                            <icon name="package" size="40" color="#206BBC" />
                        </div>
                        <div>
                            <h5 class="fw-semibold mb-1">Pengiriman Cepat</h5>
                            <p class="mb-0 text-muted">
                                Dengan kurir profesional Medicastore dan mitra pengiriman nasional, pesanan Anda sampai lebih cepat dan aman.
                            </p>
                        </div>
                    </div>

                    <!-- Item 4 -->
                    <div class="col-md-6 d-flex">
                        <div class="me-3">
                            <icon name="headset" size="40" color="#206BBC" />
                        </div>
                        <div>
                            <h5 class="fw-semibold mb-1">Customer Service Responsif</h5>
                            <p class="mb-0 text-muted">
                                Kami bantu mencarikan ketersediaan obat yang Anda butuhkan dan informasikan segera saat siap dikirim.
                            </p>
                        </div>
                    </div>

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

</style>
<script setup>
import Icon from '../components/Icon.vue';

const showAlert = () => {
    alert("Hello from Bootstrap JavaScript!");
};

</script>
