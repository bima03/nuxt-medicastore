<template>

    <section class="py-5 bg-light" style="background: linear-gradient(90deg, #E1E9F4 0%, #FFF 50%, #E5EFF0 100%);">
      <div class="d-flex flex-column container container-fluid justify-content-center gap-5">
        <!-- PENCARIAN -->
        <div class="d-flex flex-column text-center gap-2">
          <!-- Title -->
          <h6 class="headline-2 mb-2" style="color: var(--neutral-oreo-darkest);">Cari Dokter dan Spesialis</h6>
          <p class="body-1 mb-4">Dapatkan informasi dokter yang sesuai dengan kebutuhan anda</p>

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

        <!-- Modal CUSTOM -->
        <div class="modal fade" id="termsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered" style="max-width: 800px;">
                    <div class="modal-content rounded-4">

                    <!-- Header -->
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>

                    <!-- Body -->
                    <div class="modal-body py-0 pb-3" style="max-height: 60vh; overflow-y:auto;">

                      <div class="card-aktifkan-lokasi">
                        <div class="d-flex flex-column align-items-start gap-2">
                          <p class="m-0 body-2" style="color: var(--neutral-oreo-base);">Aktifkan Lokasi</p>
                          <div class="d-flex align-items-center gap-1 button-lm" style="color: var(--primary-base);">
                            <PhCrosshair size="16"/>
                            Cari di lokasi sekitar saya</div>
                        </div>
                        <button class="md-btn-outline button-lm">
                          <PhMapTrifold weight="bold" size="16"/>
                          Semua Lokasi</button>
                      </div>
                        
                      <hr class="divider mt-3" style="color: var(--neutral-oreo-light);"></hr>

                      <!-- Search -->
                      <div class="position-relative mb-3">
                        <PhMagnifyingGlass size="16" class="position-absolute top-50 start-0 translate-middle-y ms-3"/>
                        <input
                          type="text"
                          class="form-control body-2 ps-5"
                          placeholder="Masukkan kota"
                        />
                      </div>

                      <!-- List -->
                      <div class="area-list">

                        <!-- Bali -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#bali"
                          >
                            Bali
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="bali" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Bandar Lampung -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#bandarLampung"
                          >
                            Bandar Lampung
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="bandarLampung" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Bandung -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#bandung"
                          >
                            Bandung
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="bandung" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Bogor -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#bogor"
                          >
                            Bogor
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="bogor" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Depok -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#depok"
                          >
                            Depok
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="depok" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Jakarta -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#jakarta"
                          >
                            Jakarta
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="jakarta" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Jember -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#jember"
                          >
                            Jember
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="jember" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Makassar -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#makassar"
                          >
                            Makassar
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="makassar" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Malang -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#malang"
                          >
                            Malang
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="malang" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>

                        <!-- Semarang -->
                        <div class="area-group" style="color: var(--neutral-oreo-darkest);">
                          <button
                            class="area-header w-100 d-flex justify-content-between align-items-center subtitle-1"
                            style="color: var(--neutral-oreo-darkest);"
                            data-bs-toggle="collapse"
                            data-bs-target="#semarang"
                          >
                            Semarang
                            <PhCaretDown size="20"/>
                          </button>

                          <div id="semarang" class="collapse ps-2">
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Seminyak</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Jimbaran</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Denpasar</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Renon</div>
                            <div class="area-item body-2"> <PhArrowBendDownRight size="16"/> Kuta</div>
                          </div>
                        </div>

                        <hr class="divider m-1" style="color: var(--neutral-oreo-light);"></hr>


                      </div>

                    </div>

                
                    </div>
                </div>
        </div>

        <!-- LIST -->
        <div class="container d-flex flex-column gap-3 title-1 my-5" style="color: var(--neutral-oreo-darkest);">
        
            <div class="d-flex align-self-stretch align-items-center justify-content-center gap-2 mb-3">
              <div class="xl-chips-active subtitle-2" style="color: var(--primary-base);">
                Spesialis Dokter
              </div>
              <div class="xl-chips body-2" style="color: var(--neutral-oreo-darker);">
                Spesialis Gigi
              </div>
              <div class="xl-chips body-2" style="color: var(--neutral-oreo-darker);">
                Bidang Non-Spesialis
              </div>
            </div>

            <!-- Spesialis Grid -->
            <div class="row g-4">
            <!-- Card 1 -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="category-card">
                  <div class="category-icon">
                    <img src="/public/images/spesialis-anak.png" alt="Anak">
                  </div>
                  <div class="subtitle-1">Anak</div>
                  <PhQuestion class="ms-auto" data-bs-toggle="modal" data-bs-target="#penyakitModal" weight="fill" size="24"/>
                </div>
            </div>
            <!-- Card 2 -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="category-card">
                  <div class="category-icon">
                    <img src="/public/images/spesialis-anak.png" alt="Anak">
                  </div>
                  <div class="subtitle-1">Anak</div>
                </div>
            </div>
            <!-- Card 3 -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="category-card">
                  <div class="category-icon">
                    <img src="/public/images/spesialis-anak.png" alt="Anak">
                  </div>
                  <div class="subtitle-1">Anak</div>
                </div>
            </div>
            <!-- Card 4 -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="category-card">
                  <div class="category-icon">
                    <img src="/public/images/spesialis-anak.png" alt="Anak">
                  </div>
                  <div class="subtitle-1">Anak</div>
                </div>
            </div>
            <!-- Card 5 -->
            <div class="col-12 col-md-6 col-lg-3">
                <div class="category-card">
                  <div class="category-icon">
                    <img src="/public/images/spesialis-anak.png" alt="Anak">
                  </div>
                  <div class="subtitle-1">Anak</div>
                </div>
            </div>

        </div>

        </div>

        <!-- Modal Penjelasan Penyakit -->
        <div class="modal fade" id="penyakitModal" aria-hidden="true" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered" style="max-width: 500px;">
                <div class="modal-content rounded-4">

                <!-- Header -->
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Body -->
                <div class="modal-body">

                    <div class="category-icon mb-3">
                      <img src="/public/images/spesialis-anak.png" alt="Anak">
                    </div>
                    <h6 class="title-2" style="color: var(--neutral-oreo-darker);">Dokter Spesialis Radiologi</h6>
                    <p class="body-1" style="color: var(--neutral-oreo-darker);">
                    adalah dokter spesialis yang berfokus pada  pemeriksaan radiologi yang bertujuan untuk mendeteksi, mendiagnosis, dan mengobati suatu penyakit menggunakan prosedur pencitraan. Prosedur  tersebut adalah rontgen, CT scan, MRI dan USG.
                    </p>

                </div>

                </div>
            </div>
        </div>

</template>
<style>

.area-header {
  display: flex;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: none;
  border: none;
}

.area-item {
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.form-control {
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--border-default, #E6E6E6);
  background: var(--pallete-neutral-milk-lightest, #FFF);
}

.card-aktifkan-lokasi {
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;

  border-radius: 16px;
  border: 1px solid var(--border-default, #EEEEEE);
  background: #FFF;

  /* Lvl2 */
  box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.10);
}

.custom-card-cari {
  display: flex;
  width: 740px;
  height: 400px;
  padding: 4px;
  align-items: flex-start;
  border-radius: 16px;
  border: 1px solid var(--border-default, #E6E6E6);
  background: #FFF;

  overflow-y: auto;       /* 🔥 SCROLL */
  overflow-x: hidden;

  /* Lvl2 */
  box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.10);
}

    .dropdown-menu {
        top: 10px !important;
        display: none;
        opacity: 0;
        transition: opacity .15s ease;
    }

    .dropdown-menu.show {
        display: block;
        opacity: 1;
    }

/* chips extra large */
.xl-chips {
    display: flex;
    height: 44px;
    min-width: 54px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 300px;
    border: 1px solid var(--border-default, #E6E6E6);
    background: var(--pallete-neutral-milk-lightest, #FFF);
}

.xl-chips-active {
    display: flex;
    height: 44px;
    min-width: 54px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 300px;
    border: 1px solid var(--border-primary, #D1DDE9);
    background: var(--surface-primary, #EDF2FA);
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

.category-card {
  display: flex;
  align-items: center;
  gap: 16px;

  background: #EDF2FA;
  border-radius: 16px;
  padding: 8px 16px;
  min-height: 96px;

  cursor: pointer;
  transition: all .2s ease;
}

.category-card:hover {
  background: #e6edf7;
}

/* icon wrapper */
.category-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #d9e4f3;

  display: flex;
  align-items: center;
  justify-content: center;
}

/* image */
.category-icon img {
  width: 64px;
  height: 64px;
  object-fit: contain;
}

.doctor-icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

/* title */
.category-title {
  font-size: 24px;
  font-weight: 600;
  color: #444;
}

</style>
<script lang="ts" setup>
    definePageMeta({
        layout: 'informasi-layout'
    })

    import { PhArrowBendDownRight, PhArrowSquareOut, PhCaretDown, PhCrosshair, PhDotOutline, PhMagnifyingGlass, PhMapPin, PhMapTrifold, PhPhone, PhQuestion, PhSquaresFour, PhStethoscope } from '@phosphor-icons/vue';
</script>