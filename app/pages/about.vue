<script setup lang="js">
import TopBarIcon from '../components/element/TopBarIcon.vue';

</script>

<template>
    <!-- HEADER -->
    <top-bar-icon text="" title="Tentang Kami" icon="cartsimple" />

    <section class="about-section py-5">
    <div class="container">

    <!-- HEADER TEXT -->
    <div class="text-center mb-4">
      <h5 class="subtitle-2" style="color: var(--neutral-oreo-darkest);">Selamat Datang di Medicastore</h5>
      <p class="body-2 mt-2" style="line-height: 1.5; color: var(--neutral-oreo-darker);">
        Medicastore adalah penyedia informasi melalui media internet yang berisi berbagai macam informasi penyakit,
        informasi obat dan artikel kesehatan. Dengan informasi ribuan merek obat dan ratusan jenis penyakit disajikan
        dalam bahasa Indonesia yang mudah dimengerti dan dapat dilihat darimana saja dan kapan saja.
        Medicastore juga merupakan Apotek yang dapat melayani pembelian produk kesehatan secara online.
      </p>
    </div>

    <!-- IMAGE BANNER -->
    <div class="about-banner mb-5">
        <img src="https://medicastore.com/themes/blue/images/aboutus-hedaerbg.jpg" alt="">
    </div>

    <!-- VISI & MISI -->
    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <div class="about-card visi">
          <h6 class="title-1 mb-2" style="color: var(--neutral-oreo-darkest);">Visi Kami</h6>
          <p class="body-2 mb-0" style="line-height: 1.5; color: var(--neutral-oreo-darker);">
            Menjadi media informasi kesehatan online terpercaya dan mudah diakses di Indonesia. Menjadi media
            informasi dan komunikasi bagi masyarakat awam, praktisi kesehatan dan industri farmasi. Menjadi Apotek
            online terpercaya dan lengkap menyediakan seluruh produk kesehatan bagi masyarakat Indonesia.
          </p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="about-card misi">
          <h6 class="title-1 mb-2" style="color: var(--neutral-oreo-darkest);">Misi Kami</h6>
          <p class="body-2 mb-0" style="line-height: 1.5; color: var(--neutral-oreo-darker);">
            Memberikan kemudahan bagi pasien untuk mendapatkan obat yang berkualitas (Apotek online). Menyediakan
            media BARU bagi para industri farmasi untuk menggapai target dokter user maupun pasien. Memberikan
            informasi tentang obat dan penyakit yang up-to-date bagi para dokter dan masyarakat awam dalam bahasa
            yang mudah dimengerti.
          </p>
        </div>
      </div>
    </div>

    <!-- Title -->
    <h4 class="text-center title-1 mb-4" style="color: var(--neutral-oreo-darkest);">
      Layanan Apotek Online yang Menanggulangi Permasalahan 4M
    </h4>

    <!-- Masalah 4M -->
    <div class="row align-items-start align-items-center mb-5">
      
      <!-- LEFT IMAGES -->
      <div class="col-lg-6 mb-4 mb-lg-0">
        <div class="">
          <img src="/public/images/tentang-1.png" alt="" style="width: 100%;">
        </div>
      </div>

      <!-- RIGHT TEXT -->
      <div class="col-lg-6">
        <div class="">

          <div class="item">
            <h6 class="button-lm" style="color: var(--neutral-oreo-darkest);">MAHAL</h6>
            <p class="body-2" style="color: var(--neutral-oreo-darker);">
              Apotek medicastore menyediakan obat berkualitas yang teregistrasi di
              Badan POM Kemenkes Indonesia dari supplier resmi dengan harga yang
              sangat bersaing.
            </p>
          </div>

          <div class="item">
            <h6 class="button-lm" style="color: var(--neutral-oreo-darkest);">MALAS</h6>
            <p class="body-2" style="color: var(--neutral-oreo-darker);">
              Kondisi yang membuat malas untuk mencari obat seperti macet, hujan,
              dan kesibukan. Kami memiliki layanan kurir medicastore yang profesional.
            </p>
          </div>

          <div class="item">
            <h6 class="button-lm" style="color: var(--neutral-oreo-darkest);">MALU</h6>
            <p class="body-2" style="color: var(--neutral-oreo-darker);">
              Kebutuhan produk khusus pria maupun wanita kami layani dengan sangat
              pribadi, serta pengiriman yang kami kemas dengan baik.
            </p>
          </div>

          <div class="item">
            <h6 class="button-lm" style="color: var(--neutral-oreo-darkest);">MUMET</h6>
            <p class="body-2" style="color: var(--neutral-oreo-darker);">
              Mencari obat yang langka atau obat baru kadang membuat frustasi.
              Dengan layanan apotek online kami, customer cukup menunggu kabar.
            </p>
          </div>

        </div>
      </div>

    </div>

    <!-- Apotek Dikelola -->
    <div class="row align-items-start border-bottom">
      
      <!-- LEFT CONTENT -->
      <div class="col-lg-6">
        <div class="title-1" style="color: var(--neutral-oreo-darkest);">
          Apotek Online Medicastore Dikelola oleh
          <p class="body-2 mt-3" style="color: var(--neutral-oreo-darker);">
              Medicastore melayani informasi dan pembelian produk kesehatan secara online yang dikelola oleh:
          </p>

        </div>
      </div>

      <!-- CARD -->
      <div class="col-md-6 mb-4">
        <div class="card apotek-card h-100">
          <div class="card-body">

            <!-- Info Table -->
            <div class="bg-light rounded p-3">
              <div class="row mb-2" style="color: var(--neutral-oreo-darker);">
                <div class="col-5 body-2">Pemilik Sarana</div>
                <div class="col-7 subtitle-2">: PT. Clinisindo Putra Perkasa</div>
              </div>
              <div class="row mb-2" style="color: var(--neutral-oreo-darker);">
                <div class="col-5 body-2" style="color: var(--neutral-oreo-darker);">Alamat</div>
                <div class="col-7 subtitle-2">: Jl Pos Pengumben Lama No. 24, Kembangan, Jakarta Barat, DKI Jakarta, Indonesia</div>
              </div>
              <div class="row" style="color: var(--neutral-oreo-darker);">
                <div class="col-5 body-2">Apoteker Penanggung Jawab</div>
                <div class="col-7 subtitle-2">: apt. Bekti Rahayu, S.Farm</div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>

    <!-- HEADER TEXT -->
    <div class="text-center mt-4 mb-4">
      <h5 class="title-1" style="color: var(--neutral-oreo-darkest);">Tim Scientific</h5>
      <p class="body-2 mt-2" style="line-height: 1.5; color: var(--neutral-oreo-darker);">
        Tugas dari team Scientific adalah terus  memberi informasi yang update baik berupa artikel kesehatan, informasi  penyakit yang detail dan dalam Bahasa awam yang mudah dimengerti juga  informasi obat dan produk kesehatan lengkap dengan harga sehingga  memudahkan Anda memilih produk di apotek online Medicastore. Informasi yang kami susun tentu sudah  menyesuaikan peraturan pemerintah terutama Kemenkes yang ada sehingga  dapat dimanfaatkan oleh masyarakat dengan benar dan baik
      </p>
    </div>

    <!-- TIM SCIENTIFIC -->
    <div class="row align-items-start">
      <div class="col-6 col-md-3">
      <div class="doctor-card">
        <img src="https://medicastore.com/themes/blue/images/team/nasandi_medicastore_2.jpg"
         alt="Nasandi, S.Si., Apt"
        class="doctor-img"
        style="border-radius: 16px;
               border: 1px solid var(--border-default, #E6E6E6);
               box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
               height: 280px;
               width: 100%;
               object-fit: cover;   /* kunci utama */
               object-position: center;">
        <p class="button-xl" style="color: var(--neutral-oreo-darkest);">Nasandi, S.Si., Apt</p>
      </div>
      </div>

      <div class="col-6 col-md-3">
        <div class="doctor-card">
          <img src="https://medicastore.com/themes/blue/images/team/bekti_medicastore_2.jpg"
          alt="Bekti Rahayu"
          class="doctor-img"
          style="border-radius: 16px;
                border: 1px solid var(--border-default, #E6E6E6);
                box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
                height: 280px;
                width: 100%;
                object-fit: cover;   /* kunci utama */
                object-position: center;">
          <p class="button-xl" style="color: var(--neutral-oreo-darkest);">apt. Bekti Rahayu, S.Farm</p>
        </div>
      </div>

      <div class="col-6 col-md-3">
        <div class="doctor-card">
          <img src="https://medicastore.com/themes/blue/images/team/vidya_medicastore_2.jpg"
          alt="dr. Vidya Hartiansyah"
          class="doctor-img"
          style="border-radius: 16px;
                border: 1px solid var(--border-default, #E6E6E6);
                box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
                height: 280px;
                width: 100%;
                object-fit: cover;   /* kunci utama */
                object-position: center;">
          <p class="button-xl" style="color: var(--neutral-oreo-darkest);">dr. Vidya Hartiansyah</p>
        </div>
      </div>

      <div class="col-6 col-md-3">
        <div class="doctor-card">
          <img src="https://medicastore.com/themes/blue/images/team/bella_medicastore.jpg"
          alt="dr. Bella Pricylla Juliana"
          class="doctor-img"
          style="border-radius: 16px;
                border: 1px solid var(--border-default, #E6E6E6);
                box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
                height: 280px;
                width: 100%;
                object-fit: cover;   /* kunci utama */
                object-position: center;">
          <p class="button-xl" style="color: var(--neutral-oreo-darkest);">dr. Bella Pricylla Juliana</p>
        </div>
      </div>

    </div>
    



  </div>
</section>


</template>

<style>

.doctor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.apotek-card {
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.apotek-card .bg-light {
  background-color: #f9fafb !important;
}

/* Card Visi & Misi */
.about-card {
  padding: 16px;
  border-radius: 16px;
  height: 100%;
  line-height: 1.6;
}

.about-card.visi {
  background: #EDF2FA;
}

.about-card.misi {
  background: #E4EFF1;
}

/* Banner image */
.about-banner {
  height: 300px;
  border-radius: 16px;
  background-image: url('/img/about-banner.jpg'); /* ganti path */
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}
</style>