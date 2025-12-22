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

        <!-- Modal Semua Spesialis -->
        <div class="modal fade" id="termsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
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
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Body -->
                    <div class="modal-body py-0 pb-3" style="max-height: 60vh; overflow-y:auto;">

                      <!-- List Suggestion -->
                       <div class="area-list">
                        <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                          <div class="px-3 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                            <img src="/public/images/spesialis-anak.png" alt="" class="spesialis-icon">
                            <div class="d-flex flex-column gap-1 subtitle-1">
                              Semarang
                              <p class="m-0 body-2" style="color: var(--neutral-oreo-dark);">Kota Semarang, Jawa Tengah, Indonesia</p>
                            </div>
                          </div>
                        </div>

                       </div>
                      <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                      <!-- List Suggestion -->
                       <div class="area-list">
                        <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                          <div class="px-3 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                            <PhMapPin size="16"/>
                            <div class="d-flex flex-column gap-1">
                              Semarang
                              <p class="m-0 caption-1" style="color: var(--neutral-oreo-dark);">Kota Semarang, Jawa Tengah, Indonesia</p>
                            </div>
                          </div>
                        </div>

                       </div>
                      <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>
                      <!-- List Suggestion -->
                       <div class="area-list">
                        <div class="d-flex align-items-center" style="color: var(--neutral-oreo-darkest);">
                          <div class="px-3 py-2 gap-3 align-items-center w-100 d-flex align-items-start subtitle-2">
                            <PhMapPin size="16"/>
                            <div class="d-flex flex-column gap-1">
                              Semarang
                              <p class="m-0 caption-1" style="color: var(--neutral-oreo-dark);">Kota Semarang, Jawa Tengah, Indonesia</p>
                            </div>
                          </div>
                        </div>

                       </div>

                    </div>

                
                    </div>
                </div>
        </div>

  <div class="container py-4">
  <div class="row">

    <!-- SIDEBAR -->
    <div class="col-lg-3 col-md-4 d-none d-md-block py-3" style="border-right: 1px solid var(--border-default, #E6E6E6);">
      <div class="specialist-sidebar">
        <p class="body-2 mb-1" style="color: var(--neutral-oreo-base);">Spesialis</p>
        <h6 class="title-1 mb-5" style="color: var(--primary-base);">
          Radiologi <PhCaretDown size="20"/>
        </h6>

        <p class="body-2 mb-1" style="color: var(--neutral-oreo-base);">Keahlian/Subspesialis</p>
        <ul class="list-unstyled specialist-list body-2">
          <li>Sub Spesialis Radiologi Anak</li>
          <li>Sub Spesialis Radiologi Thorax</li>
          <li>Sub Spesialis Radiologi Muskuloskeletal</li>
          <li>Sub Spesialis Radiologi Intervensional</li>
          <li>Sub Spesialis Radiologi Neuroradiologi dan Kepala Leher</li>
          <li>Sub Spesialis Radiologi Payudara dan Reproduksi Perempuan</li>
          <li>Sub Spesialis Radiologi Nuklir dan Pencitraan Molekular</li>
          <li>Sub Spesialis Radiologi Saluran Cerna</li>
          <li>Sub Spesialis Onkologi Radiasi</li>
        </ul>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="col-lg-9 col-md-8">
      
      <!-- INFO BOX -->
      <div class="info-box mb-4 d-flex justify-content-between align-items-start align-items-center">
        <p class="mb-0 body-2" style="color: var(--neutral-oreo-dark);">
          Dokter Radiologi adalah dokter spesialis radiologi yang berfokus pada pemeriksaan radiologi
          untuk mendeteksi, mendiagnosis, dan mengobati penyakit menggunakan prosedur pencitraan.
          <a href="#" class="text-primary fw-semibold">Baca Selengkapnya</a>
        </p>
        <img src="/public/images/spesialis-anak.png" alt="" class="info-icon">
      </div>

      <!-- CARD LIST -->
      <div class="row g-3">

        <!-- CARD1 -->
        <div class="col-lg-6 col-md-12">
          <div class="doctor-card d-flex gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
              <div class="d-flex">
                  <PhHospital size="16" color="#206BBC"/>
              </div>
              <div class="d-flex flex-column" style="color: var(--neutral-oreo-darker);">
                <h6 class="body-2 mb-1">
                  Rumah Sakit Pondok Indah Bintaro Jaya
                </h6>
                <p class="label mb-0">
                  Buka di google maps
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- CARD2 -->
        <div class="col-lg-6 col-md-12">
          <div class="doctor-card d-flex gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
              <div class="d-flex">
                  <PhHospital size="16" color="#206BBC"/>
              </div>
              <div class="d-flex flex-column" style="color: var(--neutral-oreo-darker);">
                <h6 class="body-2 mb-1">
                  Rumah Sakit Pondok Indah Bintaro Jaya
                </h6>
                <p class="label mb-0">
                  Buka di google maps
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- CARD3 -->
        <div class="col-lg-6 col-md-12">
          <div class="doctor-card d-flex gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
              <div class="d-flex">
                  <PhHospital size="16" color="#206BBC"/>
              </div>
              <div class="d-flex flex-column" style="color: var(--neutral-oreo-darker);">
                <h6 class="body-2 mb-1">
                  Rumah Sakit Pondok Indah Bintaro Jaya
                </h6>
                <p class="label mb-0">
                  Buka di google maps
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- CARD4 -->
        <div class="col-lg-6 col-md-12">
          <div class="doctor-card d-flex gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
              <div class="d-flex">
                  <PhHospital size="16" color="#206BBC"/>
              </div>
              <div class="d-flex flex-column" style="color: var(--neutral-oreo-darker);">
                <h6 class="body-2 mb-1">
                  Rumah Sakit Pondok Indah Bintaro Jaya
                </h6>
                <p class="label mb-0">
                  Buka di google maps
                </p>
              </div>
            </div>
            
          </div>
        </div>

        <!-- CARD5 -->
        <div class="col-lg-6 col-md-12">
          <div class="doctor-card d-flex gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
              <div class="d-flex">
                  <PhHospital size="16" color="#206BBC"/>
              </div>
              <div class="d-flex flex-column" style="color: var(--neutral-oreo-darker);">
                <h6 class="body-2 mb-1">
                  Rumah Sakit Pondok Indah Bintaro Jaya
                </h6>
                <p class="label mb-0">
                  Buka di google maps
                </p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>

  </div>
</div>


</template>
<style>

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
  color: var(--neutral-oreo-darker) !important;  /* warna default */ 
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
  color: #6b7280;
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
<script lang="ts" setup>
    definePageMeta({
        layout: 'informasi-layout'
    })

    import { PhArrowBendDownRight, PhArrowSquareOut, PhCaretDown, PhCrosshair, PhDotOutline, PhHospital, PhMagnifyingGlass, PhMapPin, PhMapTrifold, PhPhone, PhQuestion, PhSquaresFour, PhStethoscope } from '@phosphor-icons/vue';
</script>