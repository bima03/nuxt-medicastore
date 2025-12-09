NUXT x MEDICASTORE

🟩 prerequisite


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

        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

        Lalu reload:

        ~~~
        source ~/.zshrc
        ~~~

    * Step 3: Cek apakah nvm sudah terinstall
        nvm --version
        Jika muncul angka versi → sukses ✔

    * Step 4: Install Node versi 20 (rekomendasi untuk project ini)

        Misal Node 20:

        nvm install 20

        Set default:

        nvm use 20
        nvm alias default 20

2. Install NVM di Windows (PENTING! berbeda dari macOS)

    Di Windows tidak memakai script curl, tapi memakai NVM for Windows:

    * Step 1: Download NVM for Windows

        Download dari repo resmi:
        https://github.com/coreybutler/nvm-windows/releases

        File yang kamu cari:
        nvm-setup.exe

    * Step 2: Install seperti biasa

        Saat install, kamu harus pilih:

        Folder untuk NVM

        Folder untuk Node (biarkan default)

    * Step 3: Cek instalasi

        Buka CMD / PowerShell:

        nvm version

    * Step 4: Install Node (versi 20 di rekomendasikan untuk project ini)
        nvm install 20
        nvm use 20

3. Menjalankan project

    * Step 1: install depedencies Node
        jalankan npm install / npm i
    * Step 2: Start Dev Server
        npm run dev

        Start the development server on `http://localhost:3000`:
    * Step 3: (Production) build project
        npm run build

4. bootstrap grid system

    xs,sm,md -- mobile layout
    lg,xl,xxl -- desktop layout
