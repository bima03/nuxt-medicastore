<template>
    <div class="app-wrapper d-flex flex-column min-vh-100">
        
        <Toaster position="top-center" closeButton closeButtonPosition="top-right" />
        <!-- Backdrop -->
        <div id="dropdownBackdrop" class="fade"></div>

        <!-- offcanvas search -->
        <div class="offcanvas offcanvas-top" id="offCanvasSearch" data-bs-backdrop="static" tabindex="-1" aria-labelledby="offcanvasTopLabel">
            <div class="offcanvas-header">
                
            </div>
            <!-- suggest pencarian-->
            <div class="offcanvas-body h-auto">
                <div class="container d-flex align-items-center justify-content-start gap-5">

                    <!-- LEFT: Toggler + Logo -->
                    <div class="d-flex align-items-center">

                        <!-- Logo -->
                        <a class="navbar-brand d-flex align-items-center" href="#">
                            <!-- mobile 146x24 -- desktop 244x40 -->
                            <img src="/public/images/logo-medicastore.svg" class="img-fluid logo d-none d-sm-block" alt="logo" style="max-width: 244px; max-height: 35px;">
                        </a>
                    </div>

                    <!-- search bar & jenis produk -->
                    <div class="d-flex align-items-center justify-content-center gap-3 d-lg-flex" style="max-width: 800px;width: 100%;">

                        <!-- Search Group -->
                        <div class="search-wrapper flex-grow-1" aria-controls="offCanvasSearch">
                            <input type="text" class="form-control search-input" placeholder="Cari egoji">
                            <button class="search-button">
                                <PhMagnifyingGlass size="16" style="color: white;"/>
                            </button>
                        </div>

                        <a class="button-lm text-decoration-none" style="color: var(--neutral-oreo-darker);" href="#" data-bs-toggle="offcanvas" data-bs-target="#offCanvasSearch">Batal</a>

                    </div>

                </div>
            </div>
            <!-- suggest rekomendasi-->
            <div class="offcanvas-body border h-auto">
                <div class="container d-flex align-items-center justify-content-start gap-3 mb-3">
                    <!-- Terakhir dicari -->
                    <div class="d-flex flex-column align-items-start gap-2 button-lm" style="color: var(--neutral-oreo-darkest);">
                        Terakhir dicari
                        <div class="d-flex gap-2">
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <img src="/public/images/search-history.svg" alt="icon" style="max-width: 16px; max-height: 16px;">
                                Panadol
                            </div>
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <img src="/public/images/search-history.svg" alt="icon" style="max-width: 16px; max-height: 16px;">
                                Panadol
                            </div>
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <img src="/public/images/search-history.svg" alt="icon" style="max-width: 16px; max-height: 16px;">
                                Panadol
                            </div>
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <img src="/public/images/search-history.svg" alt="icon" style="max-width: 16px; max-height: 16px;">
                                Panadol
                            </div>
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <img src="/public/images/search-history.svg" alt="icon" style="max-width: 16px; max-height: 16px;">
                                Panadol
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container d-flex align-items-center justify-content-start gap-3">
                    <!-- Rekomendasi medicastore -->
                    <div class="d-flex flex-column align-items-start gap-2 button-lm" style="color: var(--neutral-oreo-darkest);">
                        Rekomendasi medicastore
                        <div class="d-flex gap-2">
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <PhTrendUp size="16"/>
                                Bisul
                            </div>
                            <div class="sm-chips body-2" style="color: var(--neutral-oreo-darker);">
                                <PhTrendUp size="16"/>
                                Anxiety
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- off canvas menu -->
        <OffCanvasMenu />

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
                        <PhDeviceMobile size="16"/>
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
                        <PhCaretDown size="16"/>

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
                        <PhCaretDown size="16"/>

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
                    <NuxtLink to="/" class="navbar-brand d-flex align-items-center">
                        <!-- mobile 146x24 -- desktop 244x40 -->
                        <img src="/public/images/logo-medicastore.svg" class="img-fluid logo d-none d-sm-block" alt="logo" style="max-width: 244px; max-height: 35px;">
                        <img src="/public/images/logo-medicastore-lite.png" class="img logo d-block d-sm-none" alt="logo" style="max-width: 40px; max-height: 40px; padding-left: 10px;">
                    </NuxtLink>
                </div>

                <div class="d-flex align-items-center justify-content-between gap-3 d-lg-flex d-none" style="max-width: 600px;width: 100%;">

                    <!-- Jenis Produk -->
                    <div class="dropdown pe-2 pt-1">
                        <button 
                            class="btn cart-btn gap-2 rounded-3 px-3 py-2 btn-surface" data-bs-toggle="dropdown" aria-expanded="false"
                        >
                            <PhCirclesThreePlus size="24" class="text-cta" />
                            <span class="button-lm text-cta">Jenis Produk</span>
                        </button>

                        <div class="dropdown-menu custom-jenisproduk container p-4 wrapper" >
                            <div class="d-flex text-center" style="color: var(--neutral-oreo-darker);">
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                <div class="text-center mx-4">
                                    <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" class="rounded-3 mb-2" style="max-width: 60px;">
                                    <div class="subtitle-2">Semua</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    

                    <!-- Search Group -->
                    <div class="search-wrapper flex-grow-1" data-bs-toggle="offcanvas" data-bs-target="#offCanvasSearch" aria-controls="offCanvasSearch">
                        <input type="text" class="form-control search-input" placeholder="Cari egoji" readonly>
                        <button class="search-button">
                            <PhMagnifyingGlass size="16" class="text-white" />
                        </button>
                    </div>
                    
                </div>

                <!-- icon right belum login -->
                <div class="d-flex align-items-center ms-auto flex-shrink-0 ps-0" v-if="!isLogin">
                    <div class="d-lg-none d-block" data-bs-toggle="offcanvas" data-bs-target="#offCanvasSearch" aria-controls="offCanvasSearch">
                        <button class="btn cart-btn gap-2 rounded-3 px-2 py-2 mt-1 d-flex align-items-center ms-2">
                            <PhMagnifyingGlass size="24"/>
                        </button>
                    </div>
                    <!-- Cart -->
                    <div class="dropdown cart-dropdown ps-2 pt-1">
                        <button class="btn cart-btn gap-2 rounded-3 px-2 py-1" data-bs-toggle="dropdown" aria-expanded="false">
                            <PhShoppingCart size="24" style="color: var(--neutral-oreo-darker);"/>
                            <!-- <span class="badge bg-danger position-absolute top-48 start-80 translate-middle rounded-pill">
                                2
                            </span> -->
                        </button>

                        <div class="dropdown-menu custom-cart-menu p-4">
                            <div class="text-center">
                                <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" width="150" class="mb-3" />

                                <h6 class="subtitle-1" style="color: var(--neutral-oreo-darkest);">Keranjang Anda Kosong</h6>
                                <p class="body-2 mb-3" style="color: var(--neutral-oreo-dark);">Yuk, tambahkan produk sekarang</p>

                                <a href="#" class="lg-btn-primary button-lm">Belanja Sekarang</a>
                            </div>
                        </div>
                    </div>

                    <NuxtLink to="/login" class="btn cart-btn gap-2 rounded-3 px-2 py-2 mt-1 d-flex align-items-center ms-2 text-cta button-lm">
                        <div class="position-relative">
                            <PhSignIn size="24"/> 
                            <span class="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle" style="width:10px; height:10px;"></span>
                        </div>
                        <span class="d-lg-block d-none">Masuk</span>
                    </NuxtLink>
                </div>
                <!-- icon right login -->
                <div class="d-flex align-items-center ms-auto flex-shrink-0 ps-0" v-if="isLogin">

                    <!-- Notif -->
                    <div class="dropdown cart-dropdown pe-2 pt-1">
                        <button class="btn cart-btn position-relative gap-2 rounded-3 px-2 py-1" data-bs-toggle="dropdown" aria-expanded="false">
                            <PhBellSimple size="24" style="color: var(--neutral-oreo-darker);" />
                            <span class="position-absolute top-10 start-70 translate-middle bg-danger rounded-circle" style="width:10px; height:10px;"></span>
                        </button>

                        <div class="dropdown-menu custom-cart-menu p-4">
                            <div class="text-center">
                                <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" width="150" class="mb-3" />

                                <h6 class="subtitle-1" style="color: var(--neutral-oreo-darkest);">Keranjang Anda Kosong</h6>
                                <p class="body-2 mb-3" style="color: var(--neutral-oreo-dark);">Yuk, tambahkan produk sekarang</p>

                                <a href="#" class="lg-btn-primary button-lm">Belanja Sekarang</a>
                                
                            </div>
                        </div>
                    </div>

                    <!-- Cart -->
                    <div class="dropdown cart-dropdown border-start ps-2 pt-1">
                        <button class="btn cart-btn gap-2 rounded-3 px-2 py-1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="position-relative">
                                <PhShoppingCartSimple size="24" style="color: var(--neutral-oreo-darker);"/>
                                <span class="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                                    2
                                </span>
                            </div>
                        </button>

                        <div class="dropdown-menu custom-cart-menu p-4">
                            <div class="text-center">
                                <img src="https://medicastore.com/themes/blue/images/main-menu/no-transaction.webp" width="150" class="mb-3" />

                                <h6 class="subtitle-1" style="color: var(--neutral-oreo-darkest);">Keranjang Anda Kosong</h6>
                                <p class="body-2 mb-3" style="color: var(--neutral-oreo-dark);">Yuk, tambahkan produk sekarang</p>

                                <a href="#" class="lg-btn-primary button-lm">Belanja Sekarang</a>
                            </div>
                        </div>
                    </div>

                    <div class="d-lg-none d-block ms-2">

                        <button class="btn cart-btn gap-2 rounded-3 px-2 py-2 d-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#profileCanvas" aria-controls="profileCanvas">
                            <PhUserCircle size="24"/>
                            <PhCaretDown size="16"/>
                        </button>
                    </div>
                    
                    <!-- User -->
                    <div class="user-menu dropdown ps-2 d-lg-block d-none">
                        <button 
                            class="user-btn-navbar"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <PhUserCircle size="24"/>
                            <span class="subtitle-2 limit-text d-lg-none d-xl-block mx-1">{{ nama }}</span>
                            <PhCaretDown size="16"/>
                        </button>

                        <ul class="dropdown-menu p-0 shadow-lg border-0 rounded-4 overflow-hidden" style="min-width: 220px;">
                            
                            <!-- HEADER USER -->
                            <li class="px-3 py-2">
                                <div class="subtitle-2" style="color: var(--neutral-oreo-darker);">{{ nama }}</div>
                                <div class="caption-1" style="color: var(--neutral-oreo-light);">{{ nip }}</div>
                                <a href="#" class="button-s mt-1 d-block" style="text-decoration: none; color: var(--primary-base);">Lihat Profil</a>
                            </li>

                            <li><hr class="dropdown-divider m-0"></hr></li>

                            <!-- MENU ITEMS -->
                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-3" href="#" style="color: var(--neutral-oreo-darker);">
                                    <PhClipboardText size="16"/>
                                    Transaksi
                                </a>
                            </li>

                            <li>
                                <a class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-3" href="#" style="color: var(--neutral-oreo-darker);">
                                    <PhHeart size="16" />
                                    Favorit
                                </a>
                            </li>

                            <li><hr class="dropdown-divider m-0"></li>

                            <!-- LOGOUT -->
                            <li>
                                <a @click="logout()" class="dropdown-item d-flex align-items-center subtitle-2 gap-2 py-3" href="#" style="color: var(--neutral-oreo-darker);">
                                    <PhSignOut size="16" />
                                    Keluar
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>

        <!-- PAGE CONTENT -->
        <div class="">
            <slot />
        </div>

        <!-- Footer -->
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

    .custom-download-app {
        display: flex;
        padding: 4px;
        gap: 4px;
        align-self: stretch;

        border-radius: 16px;
        border: 1px solid var(--border-default, #E6E6E6);
        background-image: url(/public/images/bg-downloadapp.svg);
        background-size: cover;     /* supaya gambar memenuhi seluruh area */
        background-repeat: no-repeat;  /* supaya tidak berulang */
        background-position: center;   /* supaya gambarnya selalu center */

        /* Lvl2 */
        box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.10);
    }

    .custom-download-app.show {
        display: block;
        opacity: 1;
    }

    .custom-jenisproduk {
        position: absolute;
        display: flex;
        opacity: 0;
        border: none;
        border-radius: 20px;
        width: auto;
        padding: 4px;
        flex-direction: column;
        align-items: flex-start;

        background: white;
        box-shadow: 0px 12px 40px rgba(0,0,0,0.15);
        transition: opacity .2s ease;
    }

    .custom-jenisproduk.show {
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
        padding: 10px 12px;
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

    /* chips small */
    .sm-chips {
        display: flex;
        height: 28px;
        min-width: 48px;
        padding: 10px 12px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        border-radius: 300px;
        border: 1px solid var(--border-default, #E6E6E6);
        background: var(--pallete-neutral-milk-lightest, #FFF);
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
</style>
<script setup lang="js">
import { Toaster } from 'vue-sonner';
import OffCanvasMenu from '../components/element/OffCanvasMenu.vue';
import Footer from '../components/layout/Footer.vue';
import 'vue-sonner/style.css';
import { PhBellSimple, PhCirclesThreePlus, PhMagnifyingGlass, PhDeviceMobile, PhCaretDown, PhTrendUp, PhShoppingCart, PhUserCircle, PhClipboardText, PhHeart, PhSignOut, PhSignIn, PhShoppingCartSimple    } from "@phosphor-icons/vue"
import { onMounted, ref } from 'vue';
import { useStorage } from '@vueuse/core'
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()
const isLogin = ref(0);
const nama = ref('');
const nip = ref('');
onMounted(async() => {
    // const token = useStorage('token', null);
    const namaUser = useStorage('namaUser', null);
    const nipUser = useStorage('nipUser', null);
    const isAuth = useStorage('isAuth', null);

    isLogin.value = isAuth.value;
    nama.value = namaUser.value;
    nip.value = nipUser.value;

    console.log(isLogin.value);
})

function logout(){
    const isAuth = useStorage('isAuth', null);
    console.log("logout bro")

    isAuth.value = "";
    // router.replace(route.fullPath)
    window.location.reload
    // await navigateTo(route.fullPath, { replace: true })
}

</script>
