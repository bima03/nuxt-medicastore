<template>
    <div class="pt-4">
        <!-- SHIPPING ADDRESS -->
        <div class="py-0 small mb-2">
            <div class="container d-flex align-items-center justify-content-end gap-1">
                <PhMapPin size="16" weight="fill" style="color: var(--primary-base);"/>
                <span class="caption-1" style="color: var(--neutral-oreo-light);">Di kirim ke -</span>
                <a href="#" class="button-s text-decoration-none" style="color: var(--neutral-oreo-dark);">Tambah Alamat</a>
                <PhCaretDown size="16" style="color: var(--neutral-oreo-dark);"/>
            </div>
        </div>
        
        <div class="container">
            <CarouselParallax />
        </div>
        
        <!-- Jenis Produk -->
        <div class="container d-flex flex-column align-items-start gap-3 title-1 my-5" style="color: var(--neutral-oreo-darkest);">
            Jenis Produk
            <div class="d-flex ms-1 gap-2 w-100 align-items-start align-content-start flex-wrap" style="color: var(--neutral-oreo-darker);">
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">                                    <div class="subtitle-1" style="max-width: 120px;">Semua</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Obat</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Suplemen</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Alat Kesehatan</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Kosmetik</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Herbal</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Ibu & Anak</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Susu Bayi</div>
                </div>
                <div class="m-2 text-center">
                    <img src="/public/images/produk-semua.png" class="rounded-3 mb-2" width="120px">
                    <div class="subtitle-1" style="max-width: 120px;">Makanan & Minuman</div>
                </div>      
            </div>

        </div>

        <!-- Layanan Informasi -->
        <div class="container">

            <div class="container p-0 my-5">
                <div class="row align-items-start">
                <!-- Kolom kiri -->
                <div class="col-md-8">
                    <h6 class="mb-3 title-1" style="color: var(--neutral-oreo-darkest);">Layanan Informasi</h6>
                    <div class="d-flex flex-wrap gap-3">
                    <!-- Card 1 -->
                    <div class="card info-card flex-fill">
                        <h6 class="title-2" style="color: var(--neutral-oreo-darker);">Dokter & Spesialis</h6>
                        <NuxtLink class="mt-auto sm-btn-outline button-s" to="/dokter">Lihat Info</NuxtLink>  
                        <div class="">
                        <img src="/public/images/info-dokter.png" style="max-width: 84px;" alt="Dokter" class="icon position-absolute bottom-0 end-0">
                        </div>
                    </div>
            
                    <!-- Card 2 -->
                    <div class="card info-card flex-fill">
                        <h6 class="title-2" style="color: var(--neutral-oreo-darker);">Fasilitas Kesehatan</h6>
                        <NuxtLink class="mt-auto sm-btn-outline button-s" to="faskes">Lihat Info</NuxtLink>
                        <div class="">
                        <img src="/public/images/info-faskes.png" style="max-width: 64px;" alt="Faskes" class="icon position-absolute bottom-0 end-0">
                        </div>
                    </div>
            
                    <!-- Card 3 -->
                    <div class="card info-card flex-fill">
                        <h6 class="title-2" style="color: var(--neutral-oreo-darker);">Informasi Penyakit</h6>
                        <NuxtLink class="mt-auto sm-btn-outline button-s" to="penyakit">Lihat Info</NuxtLink>
                        <div class="">
                        <img src="/public/images/info-penyakit.png" style="max-width: 64px;" alt="Penyakit" class="icon position-absolute bottom-0 end-0">
                        </div>
                    </div>
                    </div>
                </div>
            
                <!-- Kolom kanan -->
                <div class="col-md-4 mt-4 mt-md-0">
                    <h6 class="mb-3 title-1" style="color: var(--neutral-oreo-darkest);">Belum Tahu Obat yang Tepat?</h6>
                    <div class="card tebus-card d-flex flex-row align-items-center px-3 py-3">
                    <img src="/public/images/tebus-obat.png" alt="Resep" class="me-2" style="height: 80px" />
                    <div>
                        <h6 class="title-2" style="color: var(--neutral-oreo-darker);">Konsultasi Online</h6>
                        <p class="body-2" style="color: var(--neutral-oreo-dark);">Langsung chat dokter kami untuk rekomendasi obat</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        </div>

        <!-- Belanja Berdasarkan Keluhan-->
        <div class="container-fluid py-4 mt-4 surface-primary">
            <div class="container py-4">
                <div class="row align-items-start">
                    <!-- Kolom kiri -->
                    <div class="col-md-3 mb-3 mb-md-0 d-flex flex-column justify-content-between" style="color: var(--neutral-oreo-darkest);">
                        <div>
                            <h6 class="title-1 mb-0">Belanja</h6>
                            <h6 class="title-1 text-wrap">berdasarkan keluhan</h6>
                        </div>
                        <div>
                            <button class="lg-btn-primary button-lm mt-3">Lihat Semua</button>
                        </div>
                    
                    </div>
                
                    <!-- Kolom kanan -->
                    <div class="col-md-9">
                        <div class="d-flex justify-content-end flex-wrap gap-3">
                            <!-- Card item -->
                            <div class="flex inikeluhan-card">
                                <div class="keluhan-img">
                                    <img src="/public/images/penyakit1.png" style="height: 80px;" alt="Demam" />
                                </div>
                                <p class="subtitle-2 m-0 text-center" style="color: var(--neutral-oreo-darker);">Demam</p>
                            </div>
                    
                            <div class="flex inikeluhan-card">
                                <div class="keluhan-img">
                                    <img src="/public/images/penyakit1.png" style="height: 80px;" alt="Demam" />
                                </div>
                                <p class="subtitle-2 m-0 text-center" style="color: var(--neutral-oreo-darker);">Batuk</p>
                            </div>
                    
                            <div class="flex inikeluhan-card">
                                <div class="keluhan-img">
                                    <img src="/public/images/penyakit2.png" style="height: 80px;" alt="Demam" />
                                </div>
                                <p class="subtitle-2 m-0 text-center" style="color: var(--neutral-oreo-darker);">Penghilang Rasa Nyeri</p>
                            </div>
                    
                            <div class="flex inikeluhan-card">
                                <div class="keluhan-img">
                                    <img src="/public/images/penyakit2.png" style="height: 80px;" alt="Demam" />
                                </div>
                                <p class="subtitle-2 m-0 text-center" style="color: var(--neutral-oreo-darker);">Vitamin Daya Tahan Tubuh</p>
                            </div>

                            <div class="flex inikeluhan-card">
                                <div class="keluhan-img">
                                    <img src="/public/images/penyakit2.png" style="height: 80px;" alt="Demam" />
                                </div>
                                <p class="subtitle-2 m-0 text-center" style="color: var(--neutral-oreo-darker);">Vitamin Daya Tahan Tubuh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Start Section-PRODUK -->
        <div class="container p-0 pb-5">
          <div class="container p-0 align-items-start">

            <div class="container p-0 my-4">
              <div class="row gy-4 gx-3">

                <div class="col-lg-2 col-md-6">
                  <div class="custom-produkcard">
                    <div class="card-body w-100 text-center" style="background-color: white; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                      <img src="/public/images/produk.png" alt="" class="img-fluid" style="max-height: 150px; object-fit: contain; background-color: white;">
                    </div>

                      <div class="card-body align-self-stretch p-3" style="background-color: white; border-radius: 0 0 12px 12px; border-bottom: 1px solid var(--icon-primary, #E6E6E6) ;">
                        <p class="subtitle-2 mb-2 skeleton skeleton-text lg" style="color: var(--neutral-oreo-darker);"></p>

                        <div class="d-flex flex-column gap-1">
                          <p class="button-s m-0 skeleton skeleton-text sm" style="color: var(--neutral-oreo-base);"></p>
                          <p class="button-lm m-0 skeleton skeleton-text md" style="color: #DE724A;"></p>
                          <div class="d-flex align-items-center gap-1">
                              <p class="caption-1 m-0 skeleton skeleton-text md" style="text-decoration-line: line-through; color: var(--neutral-oreo-light);"></p>
                          </div>
                        </div>

                        <div class="d-flex align-items-center gap-2 mt-3" style="color: var(--neutral-oreo-light);">
                          <div>
                            <PhBuildings size="16"/>
                          </div>
                          <p class="caption-1 m-0 skeleton skeleton-text lg"></p>
                        </div>
                      </div>

                      <div class="card-body d-flex justify-content-center align-self-stretch p-2 gap-1" style="color: var(--neutral-oreo-dark);">
                        <p class="button-s mb-0 skeleton skeleton-text md"> </p>
                        <PhCaretRight size="16"/>
                      </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6">
                  <div class="custom-produkcard">
                    <div class="card-body w-100 text-center" style="background-color: white; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                      <img src="/public/images/produk.png" alt="" class="img-fluid" style="max-height: 150px; object-fit: contain; background-color: white;">
                    </div>

                      <div class="card-body align-self-stretch p-3" style="background-color: white; border-radius: 0 0 12px 12px; border-bottom: 1px solid var(--icon-primary, #E6E6E6) ;">
                        <p class="subtitle-2 mb-2" style="color: var(--neutral-oreo-darker);"> Paracetamol 500 mg Kaplet </p>

                        <div class="d-flex flex-column gap-1">
                          <p class="button-s m-0" style="color: var(--neutral-oreo-base);">Per Kaplet</p>
                          <p class="button-lm m-0" style="color: #DE724A;">Rp 100.000</p>
                          <div class="d-flex align-items-center gap-1">
                              <p class="label-diskon caption-1 m-0" style="color: #DC2626;">10%</p>
                              <p class="caption-1 m-0" style="text-decoration-line: line-through; color: var(--neutral-oreo-light);">Rp 100.000</p>
                          </div>
                        </div>

                        <div class="d-flex align-items-center gap-2 mt-3" style="color: var(--neutral-oreo-light);">
                          <div>
                            <PhBuildings size="16"/>
                          </div>
                          <p class="caption-1 m-0">support@medicastore.com</p>
                        </div>
                      </div>

                      <div class="card-body d-flex justify-content-center align-self-stretch p-2 gap-1" style="color: var(--neutral-oreo-dark);">
                        <p class="button-s mb-0"> Produk Serupa </p>
                        <PhCaretRight size="16"/>
                      </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6">
                  <div class="custom-produkcard h-100">
                    <div class="card-body w-100 text-center" style="background-color: white; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                      <img src="/public/images/produk.png" alt="" class="img-fluid" style="max-height: 150px; object-fit: contain; background-color: white;">
                    </div>

                    <div class="card-body align-self-stretch p-3" style="background-color: white; border-radius: 0 0 12px 12px;">
                      <p class="subtitle-2 mb-2" style="color: var(--neutral-oreo-darker);"> Paracetamol 500 mg Kaplet </p>

                      <div class="d-flex flex-column gap-1">
                        <p class="button-s m-0" style="color: var(--neutral-oreo-base);">Per Kaplet</p>
                        <p class="button-lm m-0" style="color: #DE724A;">Rp 100.000</p>
                        <div class="d-flex align-items-center gap-1">
                            <p class="label-diskon caption-1 m-0" style="color: #DC2626;">10%</p>
                            <p class="caption-1 m-0" style="text-decoration-line: line-through; color: var(--neutral-oreo-light);">Rp 100.000</p>
                        </div>
                      </div>

                      <div class="d-flex align-items-center gap-2 mt-3" style="color: var(--neutral-oreo-light);">
                        <div>
                          <PhBuildings size="16"/>
                        </div>
                        <p class="caption-1 m-0">support@medicastore.com</p>
                      </div>
                      <!-- ini kalo tidak pakai produk serupa -->
                      <div class="card-body d-flex justify-content-center align-self-stretch p-2 gap-1 invisible" style="color: var(--neutral-oreo-dark);">
                        <p class="button-s mb-0"> Produk Serupa </p>
                        <icon name="caret-right" size="16"/>
                      </div>
                    </div>
                    
                  </div>
                </div>

                <div class="col-lg-2 col-md-6">
                  <div class="custom-produkcard">
                    <div class="card-body w-100 text-center" style="background-color: white; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                      <img src="/public/images/produk.png" alt="" class="img-fluid" style="max-height: 150px; object-fit: contain; background-color: white;">
                    </div>

                      <div class="card-body align-self-stretch p-3" style="background-color: white; border-radius: 0 0 12px 12px; border-bottom: 1px solid var(--icon-primary, #E6E6E6) ;">
                        <p class="subtitle-2 mb-2" style="color: var(--neutral-oreo-darker);"> Paracetamol 500 mg Kaplet </p>

                        <div class="d-flex flex-column gap-1">
                          <p class="button-s m-0" style="color: var(--neutral-oreo-base);">Per Kaplet</p>
                          <p class="button-lm m-0" style="color: #DE724A;">Rp 100.000</p>
                          <div class="d-flex align-items-center gap-1">
                              <p class="label-diskon caption-1 m-0" style="color: #DC2626;">10%</p>
                              <p class="caption-1 m-0" style="text-decoration-line: line-through; color: var(--neutral-oreo-light);">Rp 100.000</p>
                          </div>
                        </div>

                        <div class="d-flex align-items-center gap-2 mt-3" style="color: var(--neutral-oreo-light);">
                          <div>
                            <PhBuildings size="16"/>
                          </div>
                          <p class="caption-1 m-0">support@medicastore.com</p>
                        </div>
                      </div>

                      <div class="card-body d-flex justify-content-center align-self-stretch p-2 gap-1" style="color: var(--neutral-oreo-dark);">
                        <p class="button-s mb-0"> Produk Serupa </p>
                        <PhCaretRight size="16"/>
                      </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6">
                  <div class="custom-produkcard">
                    <div class="card-body w-100 text-center" style="background-color: white; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                      <img src="/public/images/produk.png" alt="" class="img-fluid" style="max-height: 150px; object-fit: contain; background-color: white;">
                    </div>

                      <div class="card-body align-self-stretch p-3" style="background-color: white; border-radius: 0 0 12px 12px; border-bottom: 1px solid var(--icon-primary, #E6E6E6) ;">
                        <p class="subtitle-2 mb-2" style="color: var(--neutral-oreo-darker);"> Paracetamol 500 mg Kaplet </p>

                        <div class="d-flex flex-column gap-1">
                          <p class="button-s m-0" style="color: var(--neutral-oreo-base);">Per Kaplet</p>
                          <p class="button-lm m-0" style="color: #DE724A;">Rp 100.000</p>
                          <div class="d-flex align-items-center gap-1">
                              <p class="label-diskon caption-1 m-0" style="color: #DC2626;">10%</p>
                              <p class="caption-1 m-0" style="text-decoration-line: line-through; color: var(--neutral-oreo-light);">Rp 100.000</p>
                          </div>
                        </div>

                        <div class="d-flex align-items-center gap-2 mt-3" style="color: var(--neutral-oreo-light);">
                          <div>
                            <PhBuildings size="16"/>
                          </div>
                          <p class="caption-1 m-0">support@medicastore.com</p>
                        </div>
                      </div>

                      <div class="card-body d-flex justify-content-center align-self-stretch p-2 gap-1" style="color: var(--neutral-oreo-dark);">
                        <p class="button-s mb-0"> Produk Serupa </p>
                        <PhCaretRight size="16"/>
                      </div>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6">
                  <div class="custom-produkcard">
                    <div class="card-body w-100 text-center" style="background-color: white; border-top-left-radius: 16px; border-top-right-radius: 16px;">
                      <img src="/public/images/produk.png" alt="" class="img-fluid" style="max-height: 150px; object-fit: contain; background-color: white;">
                    </div>

                      <div class="card-body align-self-stretch p-3" style="background-color: white; border-radius: 0 0 12px 12px; border-bottom: 1px solid var(--icon-primary, #E6E6E6) ;">
                        <p class="subtitle-2 mb-2" style="color: var(--neutral-oreo-darker);"> Paracetamol 500 mg Kaplet </p>

                        <div class="d-flex flex-column gap-1">
                          <p class="button-s m-0" style="color: var(--neutral-oreo-base);">Per Kaplet</p>
                          <p class="button-lm m-0" style="color: #DE724A;">Rp 100.000</p>
                          <div class="d-flex align-items-center gap-1">
                              <p class="label-diskon caption-1 m-0" style="color: #DC2626;">10%</p>
                              <p class="caption-1 m-0" style="text-decoration-line: line-through; color: var(--neutral-oreo-light);">Rp 100.000</p>
                          </div>
                        </div>

                        <div class="d-flex align-items-center gap-2 mt-3" style="color: var(--neutral-oreo-light);">
                          <div>
                            <PhBuildings size="16"/>
                          </div>
                          <p class="caption-1 m-0">support@medicastore.com</p>
                        </div>
                      </div>

                      <div class="card-body d-flex justify-content-center align-self-stretch p-2 gap-1" style="color: var(--neutral-oreo-dark);">
                        <p class="button-s mb-0"> Produk Serupa </p>
                        <PhCaretRight size="16"/>
                      </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <!-- End Section-PRODUK -->

        <!-- Artikel sudah done -->
        <div class="container d-flex flex-column align-items-start gap-3 title-1 my-5" style="color: var(--neutral-oreo-darkest);">
            Artikel Kesehatan
        
            <div class="d-flex align-self-stretch align-items-center gap-2">
              <div class="md-chips body-2" :class="{ active: artikelChoosed === 0 }" @click="chooseArtikel(0)">
                Terbaru
              </div>
              <div class="md-chips body-2" :class="{ active: artikelChoosed === 1 }" @click="chooseArtikel(1)">
                Paling Populer
              </div>
              <div class="d-flex ms-auto button-lm align-items-center gap-2">
                <NuxtLink to="/artikel" class="text-decoration-none" style="color: var(--primary-base);">
                  Lihat Semua Artikel
                  <PhCaretRight size="16"/>
                </NuxtLink>
              </div>
            </div>

            <!-- Artikel Grid -->
            <div class="row g-4">
              <template v-if="pendingArtikel">
                <div class="col-12 col-md-6 col-lg-4" v-for="i in 3">
                  <ArtikelSkeletonCard />
                </div>
              </template>
              <template v-else>
                <div class="col-12 col-md-6 col-lg-4" v-for="artikel in dataArtikel.data" :key="artikel.iId">
                  <ArtikelListCard :artikel="artikel" />
                </div>
              </template>
            </div>

        </div>

        <!-- <button class="btn btn-primary" @click="showAlert">
            <i class="bi bi-bell"></i> Click Me
        </button>
        <button @click="showAlert" class="btn btn-primary">Tes Toast</button> -->
    </div>

    <!-- medicastore guarantee -->
    <Guarantee />
</template>

<style scoped>

  .custom-produkcard {
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 8px;
      border: 1px solid var(--border-default, #E6E6E6);
      background: var(--pallete-neutral-milk-lighter, #FAFAFA);
  }

  /* chips medium */
  .md-chips {
      display: flex;
      height: 36px;
      min-width: 54px;
      padding: 10px 12px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      border-radius: 300px;
      cursor: pointer;
      border: 1px solid var(--border-default, #E6E6E6);
      background: var(--pallete-neutral-milk-lightest, #FFF);
      color: var(--neutral-oreo-darker);
  }

  .md-chips.active {
    color: var(--primary-base);
    border: 1px solid var(--border-primary, #D1DDE9);
    background: var(--surface-primary, #EDF2FA);
  }

  .info-card {
      background-image: url(/public/images/bg-info-layanan.png);
      background-repeat: no-repeat;
      background-size: cover;
      /* agar responsive */
      background-position: center;
      display: flex;
        height: 150px;
        padding: 16px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex: 1 0 0;
      border-radius: 8px;
        border: 1px solid var(--border-default, #E6E6E6);
        /* background: linear-gradient(101deg, #F0F5FD 50.26%, #FFF 79.97%); */
      
        /* Lvl2 */
        box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.10);
  }

  .label-diskon {
      display: flex;
      padding: 2px 4px;
      align-items: center;
      gap: 10px;
      border-radius: 4px;
      background: #FCF3F3;
      backdrop-filter: blur(2px);
  }
  .tebus-card {
    background-image: url(/public/images/bg-tebus-obat.png);
      background-repeat: no-repeat;
      background-size: cover;
      /* agar responsive */
      background-position: center;
      align-self: stretch;
      height: 150px;
    border-radius: 8px;
      border: 1px solid var(--border-default, #E6E6E6);
      /* Lvl2 */
      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.10);
  }

  .inikeluhan-card {
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    border: 1px solid var(--Neutral-N40, #E0E0E0);
    padding: 10px;
  }

  /* button outline-small */
  .sm-btn-outline {
      background-color: transparent;
      color: var(--primary-base);
      text-decoration: none;
      border-style: unset;
      display: flex;
      height: 32px;
      min-width: 80px;
      padding: 8px 12px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid var(--primary-base);
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
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { useApiRoutes } from '../../composables/useApiRoutes';
import { useApi } from '../../composables/useApi';

import { PhBuildings, PhCaretDown, PhCaretRight, PhMapPin } from '@phosphor-icons/vue';
import { useToast } from '../../composables/useToast';
import Guarantee from '../components/layout/Guarantee.vue';
import ArtikelSkeletonCard from '../components/element/artikel/ArtikelSkeletonCard.vue';
import ArtikelListCard from '../components/element/artikel/ArtikelListCard.vue';

const api = useApiRoutes();
const {get} = useApi();
const toast = useToast();
// lifecycle artikel ============
const artikelChoosed = ref(0)

const { data:dataArtikel, pending:pendingArtikel, error, refresh:refreshArtikel } = await useLazyAsyncData(
  'artikelPage',
  () => get(api.ARTIKEL, {
    page:0,
    count:3,
    keyword:"",
    popular:artikelChoosed.value,
    homepage:1
  }), {immediate : true} // refresh
)

watch(artikelChoosed, () => {
  refreshArtikel()
})

function chooseArtikel(index){
  artikelChoosed.value = index;
}

console.log(dataArtikel.value);
// ======================


onMounted(async() => {
    fetchSlide();
})

function showAlert() {
  toast.info("Ini toast default/info")
}

async function fetchSlide() {
    try {
        const res = await get(api.SLIDE);
        console.log(res);
    } catch (error) {
        console.error(error);
    } finally { // bagus buat loader
        // loading.value = false;
    }
}
</script>
