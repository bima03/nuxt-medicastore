// nuxt.config.js
export default {
    vite: {
        server: {
        watch: {
            usePolling: true,
            interval: 100
        },
        hmr: {
            protocol: 'ws',
            host: 'localhost'
        }
        }
    },
    head: {
        charset: "utf-8",
        viewport: "width=device-width, initial-scale=1",
        title: "Medicastore",
    },
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css",
        "~/assets/css/design-system/typography.css",
        "~/assets/css/design-system/color-palette.css",
        "~/assets/css/design-system/colors.css",
        "~/assets/css/custom-style/style.css",
        "~/assets/css/custom-style/sonner.css",
        "~/assets/css/custom-style/skeleton.css",
    ],

    plugins: [
        { src: "~/plugins/bootstrap.client.js", mode: "client" },
        { src: "~/plugins/userMenu.client.js", mode: "client" }
    ],

    vue: {
        compilerOptions: {
            // WAJIB untuk web components <ph-*>
            isCustomElement: (tag) => tag.startsWith("ph-")
        }
    },
    router: {
        scrollBehavior(to, from, savedPosition) {
            // kalau ada savedPosition (misalnya back/forward browser)
            if (savedPosition) {
                return savedPosition;
            }

            // contoh: JANGAN reset scroll ketika navigasi dari resep <-> resep-id
            if (
                (to.name === "resep-id" && from.name === "resep") ||
                (to.name === "resep" && from.name === "resep-id")
            ) {
                return false; // false = jangan ubah posisi scroll
            }

            // fallback default → scroll ke atas
            return { left: 0, top: 0 };
        },
    },
    runtimeConfig: {
        // apiBase: process.env.API_BASE || "http://wsmanita.cpp/web/index.php",
        public: {
            apiBase: process.env.API_BASE || "https://anaconda.medicastore.com/index.php?r=", // url live
            googleClientId: "235546364586-ud5hbdufhn57iu2f6do8a8sus0r47480.apps.googleusercontent.com"
        },
        // apiBase: "http://wsmanita.cpp/web/index.php",
    },
    compatibilityDate: "2024-09-01",
    devtools: {
        timeline: {
            enabled: true,
        },
    },
    // googleSignIn: {
    //     clientId: "235546364586-ud5hbdufhn57iu2f6do8a8sus0r47480.apps.googleusercontent.com"  // ambil dari .env
    // },
    modules: [
        '@nuxt/image',
        '@vueuse/nuxt',
        // 'vue3-google-signin'
    ],

    image: {
        // provider default IPX (local)
        dir: 'public/images', // folder sumber gambar
        quality: 80, // default compression
        format: ['webp', 'avif', 'jpg'], // fallback otomatis
        screens: {
            sm: 320,
            md: 640,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        }
    },
};
