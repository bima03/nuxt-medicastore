<template>
    <!-- REGISTER WA -->
    <div class="container d-flex justify-content-center pt-5">
        <div class="d-flex gap-2 align-items-start"
        style="
                width: 343px;
                padding: 12px;
                gap: 8px;
                border-radius: 12px 12px 0 0;
                background: var(--surface-info, #E4EAFB);
        ">
            <!-- ALERT -->
                <div>
                <Icon name="info" size="18" weight="fill" color="#2563EB"/>
                </div>
            <p class="body-2 m-0" style="color: var(--neutral-oreo-darker);">Anda belum memiliki akun. Silakan lengkapi data diri Anda untuk mendaftar akun baru</p>
        </div>
    </div>

    <div class="container d-flex justify-content-center pb-5">

        <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
            <!-- ICON -->
            <img src="/public/images/daftar.svg"
                    alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

            <!-- TITLE -->
            <h6 class="title-1 mb-4" style="color: var(--neutral-oreo-darkest);">Daftar Akun</h6>

            <!-- FORM -->
            <div class="align-self-stretch">
                <label class="body-2 mb-1" style="color: var(--neutral-oreo-darker);">Nomor Whatsapp</label>
                <div class="input-group mb-3" style="height: 40px;">
                    <span class="subtitle-2 input-group-text" style="color: var(--neutral-oreo-darker);">+62</span>
                    <input type="text" class="body-2 form-control" placeholder="Masukkan nomor whatsapp">
                </div>

                <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Email</label>
                <input style="height: 40px;" type="email" class="body-2 form-control" placeholder="Masukkan email">
            </div>

            <!-- BUTTON -->
            <div class="d-flex flex-column gap-2 align-self-stretch mt-4">
                <button class="lg-btn-disable button-lm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Daftar</button>
            </div>

        </div>

    </div>        

    <!-- REGISTER EMAIL -->
    <div class="container d-flex justify-content-center pt-5">
        <div class="d-flex gap-2 align-items-start"
        style="
                width: 343px;
                padding: 12px;
                gap: 8px;
                border-radius: 12px 12px 0 0;
                background: var(--surface-info, #E4EAFB);
        ">
            <!-- ALERT -->
                <div>
                <Icon name="info" size="18" weight="fill" color="#2563EB"/>
                </div>
            <p class="body-2 m-0" style="color: var(--neutral-oreo-darker);">Anda belum memiliki akun. Silakan lengkapi data diri Anda untuk mendaftar akun baru</p>
        </div>
    </div>

    <div class="container d-flex justify-content-center pb-5">

        <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
            <!-- ICON -->
            <img src="/public/images/daftar.svg"
                    alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

            <!-- TITLE -->
            <h6 class="title-1 mb-4" style="color: var(--neutral-oreo-darkest);">Daftar Akun</h6>

            <!-- FORM -->
            <div class="align-self-stretch">
                <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Email</label>
                <input style="height: 40px;" type="email" class="body-2 form-control mb-3" placeholder="Masukkan email">

                <label class="body-2 mb-1" style="color: var(--neutral-oreo-darker);">Nomor Whatsapp</label>
                <div class="input-group mb-3" style="height: 40px;">
                    <span class="subtitle-2 input-group-text" style="color: var(--neutral-oreo-darker);">+62</span>
                    <input type="text" class="body-2 form-control" placeholder="Masukkan nomor whatsapp">
                </div>

                <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Nama</label>
                <input style="height: 40px;" type="email" class="body-2 form-control mb-3" placeholder="Masukkan email">

                <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Password</label>
                <input style="height: 40px;" type="email" class="body-2 form-control mb-3" placeholder="Masukkan email">

                <div class="p-0">
                    <p class="body-2 mb-2" style="color: var(--neutral-oreo-base);">Password harus berisi:</p>

                    <ul class="list-unstyled mb-0">
                    <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" style="color: var(--neutral-oreo-dark);">
                        <Icon name="dot-outline" size="20" />
                        Minimal 8 karakter
                    </li>

                    <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" style="color: var(--neutral-oreo-dark);">
                        <Icon name="dot-outline" size="20" />
                        Huruf Kapital
                    </li>

                    <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" style="color: var(--neutral-oreo-dark);">
                        <Icon name="dot-outline" size="20" />
                        Angka (0-9)
                    </li>

                    <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" style="color: var(--neutral-oreo-dark);">
                        <Icon name="dot-outline" size="20" />
                        Karakter khusus (contoh: # ? ! $ @)
                    </li>

                    </ul>
                </div>
            </div>

            <!-- BUTTON -->
            <div class="d-flex flex-column gap-2 align-self-stretch mt-4">
                <button class="lg-btn-disable button-lm" data-bs-toggle="modal" data-bs-target="#termsModal">Daftar</button>
            </div>

        </div>

    </div>        

    <!-- Modal BOOTSTRAP -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
        </div>
        </div>
    </div>
    </div>

    <!-- Modal CUSTOM -->
    <div class="modal fade" id="termsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 500px;">
            <div class="modal-content rounded-4">

            <!-- Header -->
            <div class="modal-header border-0">
                <h5 class="modal-title w-100 text-center button-xl">Syarat & Ketentuan</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Body -->
            <div class="modal-body" style="max-height: 60vh; overflow-y:auto;">

                <h6 class="body-1" style="color: var(--neutral-oreo-darker);">Ketentuan Hak Cipta</h6>
                <p class="body-2" style="color: var(--neutral-oreo-darker);">
                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.
                </p>

                <!-- COLLAPSE CONTENT -->
                <div class="collapse" id="extraContent">
                <ul>
                    <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi untuk pekerluan pendidikan,  penelitian, kajian non-komersial, dan konsumsi individual seperti  mailing-list, blog, dan forum komunitas, tidak haris mendapatkan izin  dari medicatore.</li>
                    <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi informasi selain hal pada ketentuan di atas harus mendapatkan izin dari medicastore.</li>
                    <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi informasi wajib mencantumkan sekurang-kurangnya pengakuan "medicastore.com" sebagai sumber.</li>
                    <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi medicastore yang tidak  mengindahkan ketentuan di atas dapat dikenakan teguran hingga tuntutan  hukum atas dasar pelanggaran hak cipta.</li>
                </ul>
                </div>

                <!-- TOGGLE BUTTON -->
                <a
                data-bs-toggle="collapse"
                href="#extraContent"
                class="button-lm text-decoration-none"
                style="color: #206BBC;"
                >
                <span v-if="!expanded">Baca Selengkapnya ▾</span>
                <span v-else>Lihat Lebih Sedikit ▴</span>
                </a>

                <hr class="divider mt-3"></hr>

                <h6 class="body-1 mt-3" style="color: var(--neutral-oreo-darker);">Disclaimer</h6>
                <p class="body-2" style="color: var(--neutral-oreo-darker);">
                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.

                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.

                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.

                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.

                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.

                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.

                Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.
                </p>

            </div>

            <!-- Footer -->
            <div class="modal-footer border-0">
                <button class="lg-btn-primary button-lm w-100" data-bs-dismiss="modal">
                Mengerti
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<style>
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

.divider {
    border-color: #f0f0f0; /* ubah warna garis */
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

/* button disable-large */
.lg-btn-disable {
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
    background: #ECECEC;
    color: var(--neutral-oreo-light);
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

.form-label.required::after {
    content: "*";
    color: #E11D48;
    margin-left: 2px;
    font-weight: 600;
}
</style>
<script setup>
    definePageMeta({
        layout: 'login-layout'
    })

    import { ref } from "vue";
import Icon from "../../components/Icon.vue";

    const activeTab = ref("wa");
    const wa = ref("");
    const email = ref("");

    

    const showAlert = () => {
        alert("Hello from Bootstrap JavaScript!");
    };

    // untuk ubah teks tombol
    const expanded = ref(false)

    // listen event collapse bootstrap
    onMounted(() => {
        const el = document.getElementById('extraContent')
        el.addEventListener('shown.bs.collapse', () => expanded.value = true)
        el.addEventListener('hidden.bs.collapse', () => expanded.value = false)
    })
</script>