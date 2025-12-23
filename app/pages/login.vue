<template>
    <div class="app-wrapper d-flex justify-content-center py-5" style="background-color: #EDF2FA;">

        <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
            <!-- ICON -->
            <img src="/public/images/login.svg"
                    alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

            <!-- TITLE -->
            <h6 class="title-1" style="color: var(--neutral-oreo-darkest);">Masuk/Daftar</h6>
            <p class="body-2" style="color: var(--neutral-oreo-base);">Masukkan email atau nomor ponsel untuk masuk atau daftar akun jika belum punya.</p>


            <!-- akses login -->
            <div class="d-flex flex-column gap-2 align-self-stretch">
                <ul class="nav nav-pills nav-fill mb-3 login-tabs" id="pills-login" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active subtitle-2" id="pills-whatsapp-tab" data-bs-toggle="pill" data-bs-target="#pills-whatsapp" type="button" role="tab" aria-controls="pills-whatsapp" aria-selec ted="true">Whatsapp</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link subtitle-2" id="pills-email-tab" data-bs-toggle="pill" data-bs-target="#pills-email" type="button" role="tab" aria-controls="pills-email" aria-selected="false">Email</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-whatsapp" role="tabpanel" aria-labelledby="pills-whatsapp-tab">
                        <!-- FORM WHATSAPP -->
                        <div class="align-self-stretch" id="formWa">
                            <label class="body-2 mb-1" style="color: var(--neutral-oreo-darker);">Nomor Whatsapp</label>
                            <div class="input-group mb-3">
                                <span class="subtitle-2 input-group-text" style="color: var(--neutral-oreo-darker);">+62</span>
                                <input
                                    type="text"
                                    style="border-radius: 0px 8px 8px 0px;"
                                    class="form-control body-2"
                                    placeholder="Contoh: 8123456789"
                                    :class="{ 'is-invalid': errorPhone }"
                                    v-model="phone"
                                    @input="onInput"
                                    @keyup.enter="submitPhone"
                                    inputmode="numeric"
                                />
                                <div class="invalid-feedback">
                                    {{ errorPhone }}
                                </div>
                            </div>
                            
                        </div>
                        <button 
                            class="btn lg-btn-primary button-lm w-100"
                            :disabled="loading"
                            @click="submitPhone"
                        >
                            <span v-if="loading" class="spinner-border spinner-border-sm"></span> Selanjutnya
                        </button>
                    </div>
                    <div class="tab-pane fade" id="pills-email" role="tabpanel" aria-labelledby="pills-email-tab">
                        
                        <!-- EMAIL -->
                        <div class="mb-3" style="color: var(--neutral-oreo-darker);">
                            <label class="body-2">Email</label>
                            <input
                            type="email"
                            class="form-control body-2"
                            placeholder="Masukkan email"
                            v-model="email"
                            @keyup.enter="submitEmail"
                            :class="{ 'is-invalid': errorEmail }"
                            />
                            <div class="invalid-feedback">
                                {{ errorEmail }}
                            </div>
                        </div>

                        <!-- PASSWORD -->
                        <Transition name="fade">
                            <div class="mb-3 body-2" style="color: var(--neutral-oreo-darker);" v-if="step === 'password'">
                                <label class="mb-1">Password</label>
                                <input
                                type="password"
                                class="form-control"
                                v-model="password"
                                @keyup.enter="submitLogin"
                                :class="{ 'is-invalid': errorPassword }"
                                />
                                <div class="invalid-feedback">
                                    {{ errorPassword }}
                                </div>
                            </div>
                        </Transition>

                        <button 
                            class="btn lg-btn-primary button-lm w-100"
                            :disabled="loading"
                            @click="step === 'email' ? submitEmail() : submitLogin()"
                        >
                            <span v-if="loading" class="spinner-border spinner-border-sm"></span> {{ step === 'email' ? 'Selanjutnya' : 'Masuk' }}
                        </button>
                    </div>
                </div>
            </div>
            

            <!-- BUTTON -->
            <div class="d-flex flex-column gap-2 align-self-stretch">
                <!-- <button class="lg-btn-primary button-lm">Selanjutnya</button> -->
                <div class="text-center body-2 py-2" style="color: var(--neutral-oreo-base);">atau</div>
                <div class="text-center google-wrapper button-lm">
                    <GoogleSignInButton
                        theme="outline"
                        size="large"
                        text="continue_with"
                        width="auto"
                        logo_alignment="left"
                        @success="onSuccess"
                        @error="onError"
                    />
                </div>
                
                <!-- <button class="lg-btn-outline button-lm" style="background-color: var(--neutral-milk-lightest); color: var(--neutral-oreo-darker);">
                <img src="https://img.icons8.com/color/20/000000/google-logo.png" class="me-2">
                Lanjutkan dengan Google
                </button> -->
            </div>
        </div>

    </div>
</template>
<style scoped>

.form-control:focus {
    border: 1px solid var(--primary-light);
    box-shadow: none;
}

.btn:hover {
    color: #FFF;
    background-color: var(--primary-base);
}

    /* login styling */
    .login-tabs {
        background-color: #ECECEC; /* abu-abu container */
        padding: 6px;
        border-radius: 12px;
    }

    .login-tabs .nav-link {
        color: #6c6c6c; /* abu teks */
        background-color: #ECECEC; /* abu-abu container */
        border-radius: 10px;
        transition: all 0.2s ease;
    }

    .login-tabs .nav-link.active {
        background-color: #FFF; /* putih */
        color: #333; /* hitam */
    }
    .login-tabs .nav-link {
        position: relative;
        z-index: 1;
    }

    /*  ===================  */
    .logo {
        width: auto;
        height: auto;
        max-height: 40px;
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

.google-wrapper {
    max-width: 100%;
    border-radius: 8px;
    overflow: hidden; /* penting */
}

.google-wrapper div[role="button"] {
    width: 100% !important;
    height: 40px !important;
    min-width: 100px;
    border-radius: 8px !important;
    display: flex !important;
    justify-content: center !important;
    background-color: var(--neutral-milk-lightest); 
    color: var(--neutral-oreo-darker);
}


</style>
<script setup>
    useHead({
        script: [
            {
                src: 'https://accounts.google.com/gsi/client',
                async: true,
                defer: true
            }
        ]
    })
    definePageMeta({
        layout: 'login-layout',
        middleware: 'guest'
    })

    import { useRouter } from 'vue-router'
    import { useApiRoutes } from '../composables/useApiRoutes';
    import { useApi } from '../composables/useApi';
    import { useStorage } from '@vueuse/core'
    import { navigateTo } from 'nuxt/app';
    import { isValidEmail, phoneLength } from '../utils/validify';
    import { GoogleSignInButton } from 'vue3-google-signin';
    // import jwtDecode from 'jwt-decode'

    const router = useRouter()
    const api = useApiRoutes()
    const {post} = useApi()

    const email = ref('')
    const password = ref('')
    const phone = ref('')
    const step = ref('email')
    const loading = ref(false)
    const errorEmail = ref('')
    const errorPassword = ref('')
    const errorPhone = ref('')

    const stateRegis = useCookie('stateRegis', {
        maxAge: 120, // 5 menit
        sameSite: 'lax',
        secure: true
    })

    function decodeJwt(token) {
        const payload = token.split('.')[1]
        return JSON.parse(atob(payload))
    }

    const onSuccess = (res) => {
        console.log(res.credential)
        console.log(decodeJwt(res.credential))
    }

    async function submitEmail() {
        errorEmail.value = ''

        if (!email.value) {
            errorEmail.value = 'Email wajib diisi'
            return
        }

        if (!isValidEmail(email.value)) {
            errorEmail.value = 'Format email tidak valid'
            return
        }

        loading.value = true

        try {
            // simulasi API
            const res = await post(api.CREDENTIALS, {
                username: email.value
            })

            console.log(res);

            if(res.status){
                step.value = 'password'
            }else{
                const emailRegis = useCookie('emailRegis', {
                    maxAge: 120, // 2 menit
                    sameSite: 'lax',
                    secure: true
                })

                emailRegis.value = email.value
                stateRegis.value = 'email'

                navigateTo('/register');
            }

        } catch (e) {
            errorEmail.value = 'Terjadi kesalahan, coba lagi'
        } finally {
            loading.value = false
        }
    }

    async function submitLogin() {
        errorPassword.value = '';
        if (!password.value) {
            errorPassword.value = 'Password wajib diisi'
            return
        }

        loading.value = true

        try {
            // simulasi API
            const res = await post(api.LOGIN, {
                username: email.value,
                password: password.value,
                keyid: "",
                namadevice: "nuxt",
                state: "password",
                platform: "web"
            })

            console.log(res);

            if(res.status){
                const token = useStorage('token', null);
                const namaUser = useStorage('namaUser', null);
                const nipUser = useStorage('nipUser', null);
                const isAuth = useStorage('isAuth', null);

                token.value = res.data.auth_key;
                namaUser.value = res.data.data_pelanggan.vNama;
                nipUser.value = res.data.NIP;
                isAuth.value = 1;

                router.replace('/')
            }

        } catch (e) {
            console.log(e);
            // errorEmail.value = 'Terjadi kesalahan, coba lagi'
        } finally {
            loading.value = false
        }
        // call login API
    }

    /**
     * ======== login otp
     */
    const onInput = (e) => {
        let val = e.target.value.replace(/\D/g, '')

        // digit pertama wajib 8
        if (val.length > 0 && val[0] !== '8') {
            val = ''
        }

        // optional: batasi panjang max (misal 13 digit)
        val = val.slice(0, 13)

        phone.value = val
    }

    async function submitPhone(){
        if (!phone.value) {
            errorPhone.value = 'No Whatsapp wajib diisi'
            return
        }

        if (!phoneLength(phone.value)) {
            errorPhone.value = 'Nomor Whatsapp tidak boleh kurang dari 10 digit'
            return
        }

        loading.value = true

        try {
            // simulasi API
            const res = await post(api.LOGIN, {
                username: phone.value,
                password: "",
                keyid: "",
                namadevice: "nuxt",
                state: "otp",
                platform: "web"
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

                otpState.value = 'login'
                
                navigateTo('/otp');
            }else{
                const phoneRegis = useCookie('phoneRegis', {
                    maxAge: 120, // 2 menit
                    sameSite: 'lax',
                    secure: true
                })
                phoneRegis.value = phone.value
                stateRegis.value = 'whatsapp'
                navigateTo('/register')
            }

        } catch (e) {
            console.log(e);
            // errorEmail.value = 'Terjadi kesalahan, coba lagi'
        } finally {
            loading.value = false
        }
    }
</script>