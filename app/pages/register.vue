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
                  <form @submit.prevent="submit">
                    

                    <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Nomor Whatsapp</label>
                    <div class="input-group mb-3" style="height: 40px;">
                        <span class="subtitle-2 input-group-text" style="color: var(--neutral-oreo-darker);">+62</span>
                        <input type="text" class="body-2 form-control" v-model="phone" :disabled="(phone != '' && state == 'whatsapp') ? true : false" placeholder="Masukkan nomor whatsapp">
                    </div>

                    <div class="wrapper" v-if="state == 'email'">
                      <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Email</label>
                      <input style="height: 40px;" type="email" class="body-2 form-control mb-3" v-model="email" :disabled="(email == '') ? false : true" placeholder="Masukkan email">
                    </div>
                    
                    <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Nama</label>
                    <input style="height: 40px;" type="email" class="body-2 form-control mb-3" v-model="nama" placeholder="Masukkan nama anda">

                    <div class="wrapper" v-if="state == 'email'">
                      <label class="body-2 mb-1 form-label required" style="color: var(--neutral-oreo-darker);">Password</label>
                      <div class="input-group">
                        <input
                          :type="showPassword ? 'text' : 'password'"
                          class="form-control"
                          placeholder="Masukkan password"
                          v-model="password"
                        />
                        <button
                          class="btn btn-outline-secondary"
                          type="button"
                          @click="showPassword = !showPassword"
                        >
                          <span v-if="showPassword">🙈</span>
                          <span v-else>👁️</span>
                        </button>
                      </div>
                      
                      <!-- Strength Bar -->
                      <div class="progress mt-2" style="height: 6px;">
                        <div
                          class="progress-bar"
                          :class="strengthClass"
                          :style="{ width: strengthPercent + '%' }"
                        ></div>
                      </div>

                      <!-- Label -->
                      <small :class="strengthTextClass" class="mt-1 d-block text-end">
                        {{ strengthLabel }}
                      </small>

                      <div class="p-2">
                          
                          <p class="body-2 mb-2" style="color: var(--neutral-oreo-base);">Password harus berisi:</p>

                          <ul class="list-unstyled mb-0">
                          <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" :class="isMinLength ? 'text-success' : 'text-danger'">
                              <Icon name="dot-outline" size="20" />
                              Minimal 8 karakter
                          </li>

                          <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" :class="hasUppercase ? 'text-success' : 'text-danger'">
                              <Icon name="dot-outline" size="20" />
                              Huruf Kapital
                          </li>

                          <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" :class="hasNumber ? 'text-success' : 'text-danger'">
                              <Icon name="dot-outline" size="20" />
                              Angka (0-9)
                          </li>

                          <li class="d-flex align-items-start align-items-center body-2 gap-1 mb-1" :class="hasSpecial ? 'text-success' : 'text-danger'">
                              <Icon name="dot-outline" size="20" />
                              Karakter khusus (contoh: # ? ! $ @)
                          </li>

                          </ul>
                      </div>
                    </div>
                    
                  </form>
                    
                </div>

                <!-- BUTTON -->
                <div class="d-flex flex-column gap-2 align-self-stretch mt-4">
                    <!-- <button class="lg-btn-disable button-lm" >Daftar</button> -->
                    <button
                      class="button-lm"
                      :class="(!isFormValid) ? 'lg-btn-disable' : 'lg-btn-primary'"
                      :disabled="!isFormValid"
                      @click="showTermsModal = true"
                    >
                      Register
                    </button>
                </div>

            </div>

        </div>  
        
        <Teleport to="body">
          <div v-if="showTermsModal">
            <!-- BACKDROP -->
            <div class="modal-backdrop fade show"></div>

            <!-- MODAL -->
            <div class="modal fade show d-block" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered" style="max-width: 500px;">
                <div class="modal-content rounded-4">

                  <!-- Header -->
                  <div class="modal-header border-0">
                    <h5 class="modal-title w-100 text-center button-xl">
                      Syarat & Ketentuan
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      @click="showTermsModal = false"
                    ></button>
                  </div>

                  <!-- Body -->
                  <div class="modal-body" style="max-height: 60vh; overflow-y:auto;">
                    <!-- content kamu -->
                    <h6 class="body-1" style="color: var(--neutral-oreo-darker);">Ketentuan Hak Cipta</h6>
                    <p class="body-2" style="color: var(--neutral-oreo-darker);">
                    Seluruh materi informasi(teks, foto, dan grafik lainnya) yang dihost  Medicastore dilindungi undang-undang hak cipta. Seluruh materi tersebut  bebas dimanfaatkan oleh segala individu untuk keperluan referensi dan  non-komersial. Bagi siapa saja yang bermaksud memanfaatkan materi  informasi dari situs Medicastore dan aplikasi medicastore dengan cara  mereproduksi, mengutip, menyadur, memperbanyak, dan/atay menyebarluaskan sebagian atau secara seluruh dari isi materi tersebut, diharuskan  memenuhi ketentuan sebagai berikut.
                    </p>

                    <!-- COLLAPSE CONTENT -->
                    <div v-show="expanded">
                    <ul>
                        <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi untuk pekerluan pendidikan,  penelitian, kajian non-komersial, dan konsumsi individual seperti  mailing-list, blog, dan forum komunitas, tidak haris mendapatkan izin  dari medicatore.</li>
                        <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi informasi selain hal pada ketentuan di atas harus mendapatkan izin dari medicastore.</li>
                        <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi informasi wajib mencantumkan sekurang-kurangnya pengakuan "medicastore.com" sebagai sumber.</li>
                        <li class="body-2" style="color: var(--neutral-oreo-darker);">Pemanfaatan materi medicastore yang tidak  mengindahkan ketentuan di atas dapat dikenakan teguran hingga tuntutan  hukum atas dasar pelanggaran hak cipta.</li>
                    </ul>
                    </div>

                    <!-- TOGGLE BUTTON -->
                    <a
                    @click="expanded = !expanded"
                    class="button-lm text-decoration-none"
                    style="color: #206BBC;cursor: pointer;"
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
                    <button
                      class="lg-btn-primary button-lm w-100"
                      @click="submitRegis"
                    >
                      <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                      Mengerti
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </Teleport>
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
import { navigateTo, useCookie } from "nuxt/app";
import { computed, ref } from "vue";
import { haveNumber, haveSpecial, haveUppercase, isValidEmail, phoneLength } from "../utils/validify";
import { useApiRoutes } from "../../composables/useApiRoutes";
import { useApi } from "../../composables/useApi";

const phoneCookies = useCookie('phoneRegis')
const emailCookies = useCookie('emailRegis')
const state = useCookie('stateRegis')

// untuk ubah teks tombol
const expanded = ref(false)
const showTermsModal = ref(false)
const loading = ref(false)
const api = useApiRoutes()
const {post} = useApi()

// listen event collapse bootstrap
onMounted(() => {
  console.log(state.value)
  if(!state.value){
    navigateTo('/login')
  }

})

const password = ref('')
const nama = ref('')
const email = ref('')
const phone = ref('')
const showPassword = ref(false)

watchEffect(() => {
  email.value = state.value === 'whatsapp' ? '' : emailCookies.value
  phone.value = state.value === 'email' ? '' : phoneCookies.value
})

const isMinLength = computed(() => password.value.length >7)
const hasUppercase = computed(() => haveUppercase(password.value))
const hasNumber = computed(() => haveNumber(password.value))
const hasSpecial = computed(() => haveSpecial(password.value))

const score = computed(() => {
  let s = 0
  if (password.value.length > 7) s++
  if (haveUppercase(password.value)) s++
  if (haveNumber(password.value)) s++
  if (haveSpecial(password.value)) s++
  if (password.value.length >= 12) s++
  return s
})

const strengthPercent = computed(() => (score.value / 5) * 100)

const isPasswordValid = computed(() => score.value == 4)

const isEmailValid = computed(() =>
  isValidEmail(email.value)
)

const isFormValid = computed(() => {
  let requiredFilled = nama.value.trim().length > 0

  // default nya false aja menghindari error
  let passwordRule = false;
  let emailNeeded = false;
  let phoneValid = false;
  if(state.value == 'email'){
    passwordRule = isPasswordValid.value
    emailNeeded = isEmailValid.value
    phoneValid = phoneLength(phone.value)
    if(requiredFilled){
      requiredFilled = passwordRule && emailNeeded && phoneValid
    }
  }

  return requiredFilled
})

const strengthLabel = computed(() => {
  if (score.value <= 2) return 'Weak'
  if (score.value <= 4) return 'Medium'
  return 'Strong'
})

const strengthClass = computed(() => {
  if (score.value <= 2) return 'bg-danger'
  if (score.value <= 4) return 'bg-warning'
  return 'bg-success'
})

const strengthTextClass = computed(() => {
  if (score.value <= 2) return 'text-danger'
  if (score.value <= 4) return 'text-warning'
  return 'text-success'
})

async function submitRegis(){
  if (isFormValid.value) {

    loading.value = true

    try {
        // simulasi API
        const res = await post(api.REGISTER, {
            email: email.value,
            no_hp: phone.value,
            nama: nama.value,
            from: "Web",
            password: password.value,
            data_privasi: 1
        })

        console.log(res);

        if(res.status){
            const phoneLogin = useCookie('phoneLogin', {
                maxAge: 120, // 2 menit
                sameSite: 'lax',
                secure: true
            })

            phoneLogin.value = phone.value

            const otpState = useCookie('otpState', {
                maxAge: 120, // 2 menit
                sameSite: 'lax',
                secure: true
            })

            otpState.value = 'register'
            showTermsModal.value = false
            navigateTo('/otp')
        }

    } catch (e) {
        console.log(e);
        // errorEmail.value = 'Terjadi kesalahan, coba lagi'
    } finally {
        loading.value = false
    }

    
  }

  
}

</script>