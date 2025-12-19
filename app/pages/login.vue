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
                        <button class="nav-link active" id="pills-whatsapp-tab" data-bs-toggle="pill" data-bs-target="#pills-whatsapp" type="button" role="tab" aria-controls="pills-whatsapp" aria-selected="true">Whatsapp</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-email-tab" data-bs-toggle="pill" data-bs-target="#pills-email" type="button" role="tab" aria-controls="pills-email" aria-selected="false">Email</button>
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
                                    class="form-control"
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
                            class="btn btn-primary w-100"
                            :disabled="loading"
                            @click="submitPhone"
                        >
                            <span v-if="loading" class="spinner-border spinner-border-sm"></span> Selanjutnya
                        </button>
                    </div>
                    <div class="tab-pane fade" id="pills-email" role="tabpanel" aria-labelledby="pills-email-tab">
                        
                        <!-- EMAIL -->
                        <div class="mb-3">
                            <label>Email</label>
                            <input
                            type="email"
                            class="form-control"
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
                            <div class="mb-3" v-if="step === 'password'">
                                <label>Password</label>
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
                            class="btn btn-primary w-100"
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
                <GoogleLogin />
                <button class="lg-btn-outline button-lm" style="background-color: var(--neutral-milk-lightest); color: var(--neutral-oreo-darker);">
                <img src="https://img.icons8.com/color/20/000000/google-logo.png" class="me-2">
                Lanjutkan dengan Google
                </button>
            </div>
        </div>

    </div>
</template>
<style scoped>
    /* login styling */
    .login-tabs {
        background-color: #ECECEC; /* abu-abu container */
        padding: 6px;
        border-radius: 12px;
    }

    .login-tabs .nav-link {
        color: #6b7280; /* abu teks */
        background-color: #ECECEC; /* abu-abu container */
        border-radius: 10px;
        font-weight: 500;
        transition: all 0.2s ease;
    }

    .login-tabs .nav-link.active {
        background-color: #FFF; /* putih */
        color: #111827; /* hitam */
        box-shadow: 0 1px 3px rgba(0,0,0,0.08);
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
    import GoogleLogin from '../components/GoogleLogin.vue';
    import { navigateTo } from 'nuxt/app';

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

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
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
                router.push(`/register?email=${email.value}`)
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

        if (!/^8\d{9,}$/.test(phone.value)) {
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
                // const token = useStorage('token', null);
                // const namaUser = useStorage('namaUser', null);
                // const nipUser = useStorage('nipUser', null);
                // const isAuth = useStorage('isAuth', null);

                // token.value = res.data.auth_key;
                // namaUser.value = res.data.data_pelanggan.vNama;
                // nipUser.value = res.data.NIP;
                // isAuth.value = 1;
                const phoneLogin = useCookie('phoneLogin', {
                    maxAge: 120, // 2 menit
                    sameSite: 'lax',
                    secure: true
                })

                phoneLogin.value = phone.value

                navigateTo('/otp');
            }else{
                const phoneRegis = useCookie('phoneRegis', {
                    maxAge: 120, // 2 menit
                    sameSite: 'lax',
                    secure: true
                })
                phoneRegis.value = phone.value
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