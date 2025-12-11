// nuxt.config.js
export default {
    css: [
        "bootstrap/dist/css/bootstrap.min.css",
        "bootstrap-icons/font/bootstrap-icons.css",
        "phosphor-icons/src/css/icons.css",
        "~/assets/css/design-system/typography.css",
        "~/assets/css/design-system/color-palette.css",
        "~/assets/css/design-system/colors.css",
        "~/assets/css/custom-style/style.css",
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

    compatibilityDate: "2024-09-01"
};
