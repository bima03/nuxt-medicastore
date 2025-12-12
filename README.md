NUXT x MEDICASTORE

## 📁 Struktur Folder

Berikut adalah penjelasan mengenai folder-folder utama dalam repositori ini:

*   `app/`: Berisi kode sumber utama aplikasi nuxt x medicastore.
    *   `assets/`: Menyimpan styling custom (CSS/SCSS) yang mengikuti desain dari Figma.
    *   `components/`: Berisi komponen kecil yang bisa digunakan ulang.
        * `element/`: Komponen kecil yang merepresentasikan bagian spesifik dari HTML (reusable).
        * `layout/`: Komponen layout parsial yang dapat digunakan kembali pada berbagai halaman.
    *   `layouts/`: Mengatur struktur layout untuk setiap halaman.
    *   `pages/`: Berisi file halaman yang otomatis menjadi route di Nuxt.
    *   `plugins/`: Menyimpan inisialisasi JavaScript global yang ingin dijalankan sebelum aplikasi rendering.
    *   `public/`: Menyimpan file statis seperti gambar, ikon, atau font yang dapat diakses langsung oleh browser.
*   `composables/`: Berisi fungsi-fungsi reusable yang berhubungan dengan logic Nuxt, termasuk helper untuk pemanggilan API.
*   `server/`: Berisi file Nitro server–side seperti API route atau reverse proxy. Digunakan untuk meneruskan request ke Web Service (WS) agar menghindari error CORS di browser.

🟩 prerequisite

Notes : Jalankan node -v / npm -v jika return nya angka, maka lanjut ke no 3. no 1 & 2 hanya untuk yang belum install node js

1. Install NVM di macOS & Linux (cara resmi)

    * Step 1: Jalankan perintah ini di terminal

        Ini perintah resmi dari dokumentasi NVM:

            curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

        Atau pakai wget:

            wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash


    * Step 2: Load script NVM

        Tambahkan ke shell config:

        Untuk zsh (macOS default):

        ~~~
        nano ~/.zshrc
        ~~~

        Tambahkan baris ini (harusnya otomatis ditambah oleh installer):

        ~~~
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        ~~~

        Lalu reload:

        ~~~
        source ~/.zshrc
        ~~~

    * Step 3: Cek apakah nvm sudah terinstall
        ~~~
        nvm --version
        ~~~

        Jika muncul angka versi → sukses ✔

    * Step 4: Install Node versi 20 (rekomendasi untuk project ini)
        ~~~
        nvm install 20

        Set default:

        nvm use 20
        nvm alias default 20
        ~~~

2. Install NVM di Windows (PENTING! berbeda dari macOS)

    Di Windows tidak memakai script curl, tapi memakai NVM for Windows:

    * Step 1: Download NVM for Windows

        Download dari repo resmi:
        https://github.com/coreybutler/nvm-windows/releases

        File yang kamu cari:
        ~~~
        nvm-setup.exe
        ~~~

    * Step 2: Install seperti biasa

        Saat install, kamu harus pilih:

        Folder untuk NVM

        Folder untuk Node (biarkan default)

    * Step 3: Cek instalasi

        Buka CMD / PowerShell:

        ~~~
        nvm version
        ~~~

    * Step 4: Install Node (versi 20 di rekomendasikan untuk project ini)
        ~~~
        nvm install 20
        nvm use 20
        ~~~

3. Menjalankan project

    * Step 1: install depedencies Node
        jalankan 
        ~~~
        npm install / npm i
        ~~~
    * Step 2: Start Dev Server
        ~~~
        npm run dev
        ~~~
        Start the development server on `http://localhost:3000`:
    * Step 3: (Production) build project
        ~~~
        npm run build
        ~~~

4. bootstrap grid system

    xs,sm,md -- mobile layout
    lg,xl,xxl -- desktop layout