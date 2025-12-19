/*
 * routes api here
 * ✔ Semua route API rapi & terpusat
 * ✔ Kalau struktur API berubah, cukup edit 1 file
 * ✔ Tidak typo di URL
 * ✔ Bisa dipakai dengan Nuxt SSR atau SPA
 * ✔ Mirip pattern OOP PHP yang kamu suka
 */
export const useApiRoutes = () => {
  return {

    /**
     * examples : 
     */

    // Tentang
    ARTIKEL: "information/articles",
    ARTIKELDETAIL: "information/article",
    SLIDE: "information/slide",
    MITRA: "information/apotek-mitra",

    // auth
    CREDENTIALS: "user/credentials-validate",
    LOGIN: "user/login",
    VALIDATEOTP: "user/validate-otp"
  };
};
