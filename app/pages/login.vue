<template>
    <div class="container d-flex justify-content-center p-5">

        <div class="custom-logincard d-flex flex-column gap-1 align-items-start">
            <!-- ICON -->
            <img src="/public/images/login.svg"
                    alt="icon" class="me-2" style="max-width: 54px; max-height: 54px;">

            <!-- TITLE -->
            <h6 class="title-1" style="color: var(--neutral-oreo-darkest);">Masuk/Daftar</h6>
            <p class="body-2" style="color: var(--neutral-oreo-base);">Masukkan email atau nomor ponsel untuk masuk atau daftar akun jika belum punya.</p>

            <!-- SWITCH TAB -->
            <div class="d-flex mb-3 switch-tabs">
                <button 
                class="switch-btn flex-fill"
                :class="{ active: activeTab === 'wa' }"
                @click="activeTab = 'wa'"
                >
                No. Whatsapp
                </button>

                <button 
                class="switch-btn flex-fill"
                :class="{ active: activeTab === 'email' }"
                @click="activeTab = 'email'"
                >
                Email
                </button>
            </div>

            <!-- FORM WHATSAPP -->
            <div class="align-self-stretch" id="formWa">
                <label class="body-2 mb-1" style="color: var(--neutral-oreo-darker);">Nomor Whatsapp</label>
                <div class="input-group mb-4" style="height: 40px;">
                    <span class="subtitle-2 input-group-text" style="color: var(--neutral-oreo-darker);">+62</span>
                    <input type="text" class="body-2 form-control" placeholder="Masukkan nomor whatsapp">
                </div>
            </div>

            <!-- FORM EMAIL -->
            <div id="formEmail" style="display:none;">
                <label class="mb-1">Email</label>
                <input type="email" class="form-control mb-3" placeholder="Masukkan email">
            </div>

            <!-- BUTTON -->
            <div class="d-flex flex-column gap-2 align-self-stretch">
                <button class="lg-btn-primary button-lm">Selanjutnya</button>
                <div class="text-center body-2" style="color: var(--neutral-oreo-base);">atau</div>
                <button class="lg-btn-outline button-lm" style="background-color: var(--neutral-milk-lightest); color: var(--neutral-oreo-darker);">
                <img src="https://img.icons8.com/color/20/000000/google-logo.png" class="me-2">
                Lanjutkan dengan Google
                </button>
            </div>
        </div>

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

    definePageMeta({
        layout: 'login-layout'
    })
    import { ref } from "vue";
    import Footer from "../components/layout/Footer.vue";

    const activeTab = ref("wa");
    const wa = ref("");
    const email = ref("");

    const showAlert = () => {
        alert("Hello from Bootstrap JavaScript!");
    };

</script>