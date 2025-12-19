<template>
    <div class="app-wrapper d-flex flex-column" style="background-color: #EDF2FA;">

        <!-- Backdrop -->
        <div id="dropdownBackdrop" class="fade"></div>
      

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
                        <input type="text" class="body-2 form-control" :value="phone" placeholder="Masukkan nomor whatsapp">
                    </div>

                    <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Nama</label>
                    <input style="height: 40px;" type="email" class="body-2 form-control mb-3" placeholder="Masukkan email">

                    <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Masukkan password"
                      v-model="password"
                    />

                    <div class="p-0">
                        <p class="body-2 mb-2" style="color: var(--neutral-oreo-base);">Password harus berisi:</p>

                        <!-- <ul class="list-unstyled mb-0">
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

                        </ul> -->
                        <ul class="mt-2 small">
                          <li :class="isMinLength ? 'text-success' : 'text-danger'">
                            Minimal 8 karakter
                          </li>
                          <li :class="hasUppercase ? 'text-success' : 'text-danger'">
                            Huruf kapital
                          </li>
                          <li :class="hasNumber ? 'text-success' : 'text-danger'">
                            Angka (0–9)
                          </li>
                          <li :class="hasSpecial ? 'text-success' : 'text-danger'">
                            Karakter khusus (contoh: # ? ! $ @)
                          </li>
                        </ul>
                    </div>
                </div>

                <!-- BUTTON -->
                <div class="d-flex flex-column gap-2 align-self-stretch mt-4">
                    <button class="lg-btn-disable button-lm" data-bs-toggle="modal" data-bs-target="#termsModal">Daftar</button>
                    <!-- <button
                      class="btn btn-primary"
                      :disabled="!isValidPassword"
                    >
                      Submit
                    </button> -->
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
    </div>
</template>
<style scoped>
  

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
import { useCookie } from "nuxt/app";
import { ref } from "vue";

const phone = useCookie('phoneLogin')

// untuk ubah teks tombol
const expanded = ref(false)

// listen event collapse bootstrap
onMounted(() => {
  const el = document.getElementById('extraContent')
  el.addEventListener('shown.bs.collapse', () => expanded.value = true)
  el.addEventListener('hidden.bs.collapse', () => expanded.value = false)
})

const password = ref('')

const isMinLength = computed(() => password.value.length >= 8)
const hasUppercase = computed(() => /[A-Z]/.test(password.value))
const hasNumber = computed(() => /\d/.test(password.value))
const hasSpecial = computed(() => /[^\w\s]/.test(password.value))

const isValidPassword = computed(() =>
  isMinLength.value &&
  hasUppercase.value &&
  hasNumber.value &&
  hasSpecial.value
)


</script>