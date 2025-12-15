<template>
    <!-- FOOTER -->
    <footer class="bg-primary text-white pt-5" style="background-color:#15477D !important;">
        <div class="container">
            <div class="row">

                <!-- Left Section -->
                <div class="col-md-5 mb-4">
                    <NuxtLink to="/">
                        <img src="/public/images/logo-medicastore-putih.svg" alt="medicastore" class="mb-3" style="max-width:180px;"></img>
                    </NuxtLink>

                    <p class="body-2" style="max-width: 300px;">
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
                <div class="col-md-2 mb-4">
                    <h6 class="body-2 mb-3" style="color: var(--neutral-oreo-light);">Medicastore</h6>
                    <ul class="list-unstyled">
                        <li class="mb-3"><NuxtLink to="/about" class="body-1 text-white text-decoration-none">Tentang Kami</NuxtLink></li>
                        <li class="mb-3"><NuxtLink to="/terms" class="body-1 text-white text-decoration-none">Syarat & Ketentuan</NuxtLink></li>
                        <li class="mb-3"><NuxtLink to="/privacy-policy" class="body-1 text-white text-decoration-none">Kebijakan & Privasi</NuxtLink></li>
                        <li class="mb-3"><NuxtLink to="/saran" class="body-1 text-white text-decoration-none">Kritik & Saran</NuxtLink></li>
                        <li class="mb-3"><NuxtLink to="/apotek-mitra" class="body-1 text-white text-decoration-none">Apotek Mitra</NuxtLink></li>
                        <li class="mb-3"><NuxtLink to="/faq" class="body-1 text-white text-decoration-none">FAQ</NuxtLink></li>
                    </ul>
                </div>

                <!-- Middle Section 2 -->
                <div class="col-md-2 mb-4">
                    <h6 class="body-2 mb-3" style="color: var(--neutral-oreo-light);">Layanan Kami</h6>
                    <ul class="list-unstyled small">
                        <li class="mb-3"><a href="#" class="body-1 text-white text-decoration-none">Beli Obat</a></li>
                        <li class="mb-3"><a href="#" class="body-1 text-white text-decoration-none">Informasi Penyakit</a></li>
                        <li class="mb-3"><a href="#" class="body-1 text-white text-decoration-none">Informasi Dokter</a></li>
                        <li class="mb-3"><a href="#" class="body-1 text-white text-decoration-none">Informasi Fasilitas Kesehatan</a></li>
                        <li class="mb-3"><a href="#" class="body-1 text-white text-decoration-none">Artikel Kesehatan</a></li>
                    </ul>
                </div>

                <!-- Right Section -->
                <div class="col-md-3 mb-4">
                    <h6 class="body-2 mb-3" style="color: var(--neutral-oreo-light);">Hubungi Kami</h6>

                    <div class="d-flex align-items-center gap-2 mb-3">
                        <div>
                            <PhEnvelopeSimple size="20" weight="fill"/>
                        </div>
                        <p class="subtitle-2 m-0">support@medicastore.com</p>
                    </div>

                    <div class="d-flex align-items-center gap-2 mb-3">
                        <div>
                            <PhPhone size="20" weight="fill"/>
                        </div>
                        <p class="subtitle-2 m-0">021-29293456</p>
                    </div>

                    <div class="d-flex align-items-center gap-2">
                        <div>
                            <PhMapPin size="20" weight="fill"/>
                        </div>
                        <p class="subtitle-2 m-0">Jl Pospengumben Lama No. 2A,
                            Kembangan, Jakarta Barat,
                            DKI Jakarta, Indonesia</p>
                    </div>

                </div>

            </div>
        </div>

        <!-- Copyright -->
        <div class="text-center mt-3 small" style="background-color:#143D73;">
            <div class="container py-2">
                <div class="body-2 d-flex align-items-center justify-content-between">
                    <span>Copyright © {{ new Date().getFullYear() }} by medicastore</span>
                    <span>PT. Clinisindo Putra Perkasa</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { PhEnvelopeSimple, PhMapPin, PhPhone } from '@phosphor-icons/vue';
</script>