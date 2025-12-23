<template>
    <div class="app-wrapper d-flex flex-column" style="background-color: #EDF2FA;">

        <!-- Backdrop -->
        <div id="dropdownBackdrop" class="fade"></div>

        <div class="container d-flex justify-content-center p-5">

            <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
                <!-- ICON -->
                <img src="/public/images/otp.svg"
                        alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

                <!-- TITLE -->
                <h6 class="title-1" style="color: var(--neutral-oreo-darkest);">Masukkan Kode Verifikasi</h6>
                <p class="body-2" style="color: var(--neutral-oreo-base);">Kode verifikasi telah dikirim melalui <b>Email</b> atau <b>WhatsApp</b> Anda</p>

                <!-- INPUT OTP -->
                <div class="align-self-stretch py-5">
                    <!-- <p class="text-center caption-1">INI ADALAH TEMPAT FIELD OTP. <br>Makasih mas bim hehe</br></p>  -->
                    <form @submit.prevent="submitOtp" class="text-center">
                      <div class="d-flex justify-content-center gap-2 mb-3" v-if="!loading">
                        <input
                          v-for="(val, index) in otp"
                          :key="index"
                          ref="inputs"
                          type="text"
                          class="form-control otp-input"
                          maxlength="1"
                          inputmode="numeric"
                          autocomplete="one-time-code"
                          v-model="otp[index]"
                          @input="onInput(index)"
                          @keydown.backspace="onBackspace(index)"
                          @paste="onPaste"
                        />
                      </div>

                      <div class="mb-3">
                        <span v-if="loading" class="spinner-border spinner-border-sm"></span>
                      </div>
                      <span v-if="messageError" class="button-lm p-2" style="color: #DC2626;">{{ messageError }}</span>
                    </form>
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
  .otp-input {
    width: 48px;
    height: 56px;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
  }

</style>
<script setup>
import { navigateTo, useCookie } from "nuxt/app";
import { ref } from "vue";
import { useApi } from "../composables/useApi";
import { useApiRoutes } from "../composables/useApiRoutes";
import { useToast } from "../../composables/useToast";
import { useStorage } from '@vueuse/core'

definePageMeta({
    layout: 'login-layout',
})

const props = defineProps({
  length: {
    type: Number,
    default: 5
  }
})

const {post} = useApi()
const api = useApiRoutes()
const toast = useToast()
const otp = ref(Array(props.length).fill(''))
const inputs = ref([])
const loading = ref(false)
const phone = useCookie('phoneLogin')
const otpState = useCookie('otpState')
const messageError  = ref('')

console.log(phone.value)
console.log(otpState.value)

const otpValue = computed(() => otp.value.join(''))

const onInput = (index) => {
  otp.value[index] = otp.value[index].replace(/\D/g, '')

  if (otp.value[index] && inputs.value[index + 1]) {
    inputs.value[index + 1].focus()
  }

  if (otpValue.value.length === props.length) {
    submitOtp()
  }
}

const onBackspace = (index) => {
  if (!otp.value[index] && inputs.value[index - 1]) {
    inputs.value[index - 1].focus()
  }
}

const onPaste = (e) => {
  const paste = e.clipboardData.getData('text').replace(/\D/g, '')
  paste.split('').forEach((char, i) => {
    if (i < props.length) otp.value[i] = char
  })

  inputs.value[Math.min(paste.length, props.length) - 1]?.focus()
  e.preventDefault()

  if (otpValue.value.length === props.length) {
    
    setTimeout( () => {
      submitOtp()
    }, 1000)
  }
}

async function submitOtp() {
  if (otpValue.value.length === props.length) {
    loading.value = true;
    
    // alert("kirim")
    // emit('submit', otpValue.value)

    const res = await post(api.VALIDATEOTP, {
        username: '62'+phone.value,
        otp: otpValue.value,
        state: (otpState.value == 'register') ? "Register" : "Login",
    })

    console.log(res.status)

    if(res.status){
      const token = useStorage('token', null);
      const namaUser = useStorage('namaUser', null);
      const nipUser = useStorage('nipUser', null);
      const isAuth = useStorage('isAuth', null);

      token.value = res.data.auth_key;
      namaUser.value = res.data.data_pelanggan.vNama;
      nipUser.value = res.data.NIP;
      isAuth.value = 1;

      window.location.replace('/')
    }else{
      messageError.value = res.message
    }

    loading.value = false;
  }
}
</script>