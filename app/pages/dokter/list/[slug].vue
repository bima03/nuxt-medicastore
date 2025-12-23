<template>

    <section class="py-5 bg-light" style="background: linear-gradient(90deg, #E1E9F4 0%, #FFF 50%, #E5EFF0 100%);">
      <div class="d-flex flex-column container container-fluid justify-content-center gap-5">
        <!-- PENCARIAN -->
        <div class="d-flex flex-column text-center gap-2">
          <!-- Cari -->
          <div class="col-lg-8 m-auto search-wrapper">
            <div class="search-box">

              <!-- Dropdown Suggestion Pencarian -->
              <div class="dropdown">
                <button
                  class="btn-location button-lm"
                  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"
                  style="color: var(--primary-base);"
                >
                  <PhMapPin weight="fill" size="16"/>
                  Semua Lokasi
                  <PhCaretDown weight="bold" size="16"/>
                </button>
                <div class="dropdown-menu custom-card-cari p-1" aria-labelledby="dropdownMenuButton1">

                  <!-- Label Dokter -->
                  <div class="d-flex align-items-start align-self-stretch p-1 label" style="background-color: #F5F5F5;">
                    Dokter
                  </div>
                  <!-- Dokter1 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="doctor-icon">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <div class="d-flex flex-column body-2 gap-1">
                      dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                      <p class="d-flex caption-1 mb-0 align-items-center gap-2" style="color: var(--neutral-oreo-darker);">
                        <PhStethoscope size="12" color="#206BBC"/>
                        Spesialis Radiologi
                      </p>
                    </div>
                  </div>
                  <!-- Dokter2 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="doctor-icon">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <div class="d-flex flex-column body-2 gap-1">
                      dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                      <p class="d-flex caption-1 mb-0 align-items-center gap-2" style="color: var(--neutral-oreo-darker);">
                        <PhStethoscope size="12" color="#206BBC"/>
                        Spesialis Radiologi
                      </p>
                    </div>
                  </div>
                  <!-- Dokter3 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2">
                    <div class="doctor-icon">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <div class="d-flex flex-column body-2 gap-1">
                      dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                      <p class="d-flex caption-1 mb-0 align-items-center gap-2" style="color: var(--neutral-oreo-darker);">
                        <PhStethoscope size="12" color="#206BBC"/>
                        Spesialis Radiologi
                      </p>
                    </div>
                  </div>

                  <!-- Label Spesialisasi -->
                  <div class="d-flex align-items-start align-self-stretch p-1 label" style="background-color: #F5F5F5;">
                    Spesialisasi
                  </div>
                  <!-- Spesialisasi1 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="doctor-icon">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <div class="d-flex flex-column body-2 gap-1">
                      Spesialisasi Mata
                    </div>
                  </div>
                  <!-- Spesialisasi2 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="doctor-icon">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <div class="d-flex flex-column body-2 gap-1">
                      Spesialisasi Mata
                    </div>
                  </div>
                  <!-- Spesialisasi3 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="doctor-icon">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <div class="d-flex flex-column body-2 gap-1">
                      Spesialisasi Mata
                    </div>
                  </div>

                  <!-- Label Tindakan -->
                  <div class="d-flex align-items-start align-self-stretch p-1 label" style="background-color: #F5F5F5;">
                    Tindakan
                  </div>
                  <!-- Tindakan1 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="d-flex flex-column body-2 gap-1">
                      Tindakan Satu
                    </div>
                  </div>
                  <!-- Tindakan2 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="d-flex flex-column body-2 gap-1">
                      Tindakan Satu
                    </div>
                  </div>
                  <!-- Tindakan3 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="d-flex flex-column body-2 gap-1">
                      Tindakan Satu
                    </div>
                  </div>

                  <!-- Label Spesialis Penyakit -->
                  <div class="d-flex align-items-start align-self-stretch p-1 label" style="background-color: #F5F5F5;">
                    Spesialis Penyakit
                  </div>
                  <!-- Penyakit1 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="d-flex flex-column body-2 gap-1">
                      Penyakit Satu
                    </div>
                  </div>
                  <!-- Penyakit2 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="d-flex flex-column body-2 gap-1">
                      Penyakit Satu
                    </div>
                  </div>
                  <!-- Penyakit3 -->
                  <div class="d-flex align-items-center align-items-start align-self-stretch p-2 gap-2 mb-1">
                    <div class="d-flex flex-column body-2 gap-1">
                      Penyakit Satu
                    </div>
                  </div>


                </div>
                
               </div>
                

              <!-- Input Search -->
              <div class="search-input">
                <input
                  type="text"
                  class="form-control border-0 body-2"
                  placeholder="Cari dokter, spesialisasi, tindakan medis, spesialisasi penyakit"
                />
                <PhMagnifyingGlass class="search-icon" size="20"/>
              </div>

            </div>

            <!-- Button Cari -->
            <button class="lg-btn-primary button-lm" data-bs-toggle="modal" data-bs-target="#termsModal">
              Cari
            </button>

          </div>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <div v-if="showModal">
        <div
          class="modal-backdrop fade show"
          @click="closeModal"
        ></div>
        <!-- Modal Semua Spesialis -->
        <div class="modal fade show d-block" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered" style="max-width: 800px;">
              <div class="modal-content rounded-4">

              <!-- Header -->
              <div class="modal-header border-0 align-items-start">
                <div class="d-flex flex-column gap-2">
                  <h6 class="button-xl">Semua Spesialisasi</h6>
                  <div class="d-flex align-self-stretch align-items-center gap-2">
                    <div class="md-chips active body-2">
                      Spesialis Dokter
                    </div>
                    <div class="md-chips body-2">
                      Spesialis Gigi
                    </div>
                    <div class="md-chips body-2">
                      Bidang Non-Spesialis
                    </div>
                  </div>
                </div>
                  <button type="button" class="btn-close" @click="closeModal"></button>
              </div>

              <!-- Body -->
              <div class="modal-body py-0 pb-3" style="max-height: 60vh; overflow-y:auto;">

                <p class="subtitle-2" style="color: var(--neutral-oreo-dark);">Spesialis Dokter</p>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                

                <p class="subtitle-2 mt-2" style="color: var(--neutral-oreo-dark);">Spesialis Gigi</p>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                
                
                <p class="subtitle-2 mt-2" style="color: var(--neutral-oreo-dark);">Non-Spesialis</p>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>
                <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                <!-- List Suggestion -->
                  <div class="area-list">
                  <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="px-0 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                      <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                      <div class="d-flex flex-column gap-1 subtitle-1">
                        Semarang
                        <p class="m-0 body-2 satu-baris" style="color: var(--neutral-oreo-dark);">Spesialis anak adalah dokter spesialis yang berfokus pada penanganan masalah kesehatan anak sejak lahir hingga usia remaja (0-18 tahun) yang meliputi pencegahan, pengobatan, hingga perawatan.</p>
                      </div>
                      <PhCaretRight size="32"/>
                    </div>
                  </div>

                  </div>

              </div>

          
              </div>
          </div>
        </div>
      </div>
    </Teleport>
    
    
    <div class="d-flex container area-map justify-content-center align-items-center mt-4">
      Ini untuk MAP
    </div>

  <div class="container py-4">
  <div class="row">

    <!-- SIDEBAR -->
    <div class="col-lg-3 col-md-4 d-none d-md-block py-3" style="border-right: 1px solid var(--border-default, #E6E6E6);">
      <div class="specialist-sidebar">
        <p class="body-2 mb-1" style="color: var(--neutral-oreo-base);">Spesialis</p>
        <!-- loader -->
        <template v-if="pendingDokterSpesialis">
          <h6 class="title-1 mb-5 skeleton skeleton-text-md" style="height: 35px;"></h6>
        </template>
        <template v-else>
          <h6 class="title-1 mb-5" style="color: var(--primary-base);cursor: pointer;" @click="openModal">
            {{ dataDokterSpesialis?.detail?.vNama }} <PhCaretDown size="20"/>
          </h6>
        </template>
        

        <p class="body-2 mb-1" style="color: var(--neutral-oreo-base);">Keahlian/Subspesialis</p>
        <template v-if="pendingDokterSpesialis">
          <ul class="list-unstyled specialist-list body-2" v-for="x in 6">
            <li class="skeleton skeleton-text md"></li>
          </ul>
        </template>
        <template v-else>
          <ul class="list-unstyled specialist-list body-2" v-for="sub in dataDokterSpesialis.sub" :key="sub.iId">
            <li style="cursor: pointer;" @click="searchSubSpesialis(sub.iId)" :class="(sub.iId == subSpesialis) ? 'text-cta button-lm' : 'text-body-fig'">{{ sub.vNama }}</li>
          </ul>
        </template>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="col-lg-9 col-md-8">
      
      <!-- INFO BOX -->
      <div class="info-box mb-4 d-flex justify-content-between align-items-start align-items-center">
        
        <template v-if="pendingDokterSpesialis">
          <p class="mb-0 body-2 skeleton skeleton-text-lg" style="height: 35px;"></p>
          <div class="info-icon" style="height: 35px;"></div>
        </template>
        <template v-else>
          <p class="mb-0 body-2" style="color: var(--neutral-oreo-dark);">
            {{ dataDokterSpesialis?.detail?.vDesc }}
            
          </p>
          <img :src="dataDokterSpesialis?.detail?.vFoto" :alt="dataDokterSpesialis?.detail?.vNama" class="info-icon">
        </template>
        
      </div>

      <!-- CARD LIST -->
      <div class="row g-3">

        <template v-if="pendingDokterSpesialis">
            <div class="col-lg-6 col-md-12" v-for="i in 12">
                <DokterSkeletonCard />
            </div>
        </template>
        <template v-else>
            <div class="col-lg-6 col-md-12" v-for="dokter in dataDokterSpesialis.data" :key="dokter.iId">
                <DokterListCard :dokter="dokter"/>
            </div>
        </template>
      </div>
    </div>

  </div>
</div>


</template>
<style>

  .area-map {
    height: 300px;
    width: auto;
    border-radius: 16px;
    border: 1px solid var(--border-default, #E6E6E6);
    background-color: #e0e0e0;
  }

  .satu-baris {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    align-self: stretch;
    overflow: hidden;
    text-overflow: ellipsis;
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

  .specialist-list li {
    cursor: pointer;
    transition: color 0.2s ease;
  }

  .specialist-list li:hover {
    color: var(--primary-base) !important; /* warna saat hover */
  }

  /* SIDEBAR */
  .specialist-sidebar {
    padding-right: 20px;
  }

  .specialist-list li {
    font-size: 14px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  .specialist-list li:hover {
    color: #0d6efd;
  }

  /* INFO BOX */
  .info-box {
    max-height: 70px;
    position: relative;
    background: #fff;
    border-radius: 12px;
    padding: 16px 116px 16px 16px;
    border-radius: 16px;
    border: 1px solid var(--border-default, #E6E6E6);
    background: var(--pallete-neutral-milk-lighter, #FAFAFA);
    overflow: hidden;
  }

  .info-icon {
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    position: absolute;
    right: -16px;
  }

  .info-icon img {
    object-fit: cover;            /* jaga proporsi */
    position: absolute;
    right: -16px;
    top: -8px;
  }

  /* CARD */
  .doctor-card {
    background: #fff;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    border: 1px solid var(--border-default, #E6E6E6);
    background: var(--pallete-neutral-milk-lightest, #FFF);

    /* Lvl2 */
    box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.10);
  }

  .doctor-avatar {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid #E6E6E6;
  }

  .spesialis-icon {
    width: 48px;
    height: 48px;
    object-fit: cover;
  }


  .search-icon {
    position: absolute;
    right: 8px;      /* jarak dari kanan */
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
    cursor: pointer;
  }

  .search-wrapper {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .search-box {
    height: 40px;
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 6px 6px;
    flex: 1;
  }

  /* Dropdown lokasi */
  .btn-location {
    height: 28px;
    background: #EDF2FA;
    border-radius: 8px;  
    color: #2563eb;
    border: none;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 12px;
  }

  /* Input */
  .search-input {
    position: relative;
    flex: 1;
  }

  .search-input input {
    padding-right: 36px;
  }

  .search-input i {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #9ca3af;
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

  /* button outline-medium */
  .md-btn-outline {
      background-color: transparent;
      color: var(--primary-base);
      text-decoration: none;
      border-style: unset;
      display: flex;
      height: 36px;
      min-width: 80px;
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid var(--primary-base);
  }


  .doctor-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

</style>
<script lang="js" setup>
    definePageMeta({
        layout: 'informasi-layout'
    })

    import { PhCaretDown, PhCaretRight, PhMagnifyingGlass, PhMapPin, PhStethoscope } from '@phosphor-icons/vue';
    import { useApiRoutes } from '../../../../composables/useApiRoutes';
    import { useApi } from '../../../../composables/useApi';
    import DokterSkeletonCard from '../../../components/element/dokter/DokterSkeletonCard.vue';
    import DokterListCard from '../../../components/element/dokter/DokterListCard.vue';

    const api = useApiRoutes()
    const {get} = useApi()
    const route = useRoute()

    const slugParam = route.params.slug
    const encryptedId = slugParam.split('-').pop()
    const aliasId = decodeId(encryptedId)

    const keyword = ref("")
    const keywordInput = ref("")
    const subSpesialis = ref("")
    const page = ref(0)
    const count = ref(15)
    const showModal = ref(false)

    const { data:dataDokterSpesialis, pending:pendingDokterSpesialis, error, refresh:refreshDokterSpesialis } = await useLazyAsyncData(
        'listDokterSpesialis',
        () => get(api.DOKTER, {
            alias:aliasId,
            page:page.value,
            count:count.value ?? 15,
            keyword:keyword.value,
            sub:subSpesialis.value
        }), {immediate : true} // refresh
    )

    console.log(dataDokterSpesialis.value);

    function searchSubSpesialis(id){
      subSpesialis.value = id
    }

    function openModal() {
      showModal.value = true
    }

    function closeModal() {
      showModal.value = false
    }

    watch(keyword, () => {
      refreshDokterSpesialis()
    })

    watch(subSpesialis, () => {
      refreshDokterSpesialis()
    })
</script>