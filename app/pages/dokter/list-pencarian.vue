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

    <div class="container my-4">

    <ul class="nav nav-fill nav-justify custom-tabs w-100">
      <li class="nav-item">
        <button class="nav-link active" data-bs-toggle="tab">
          Dokter
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab">
          Dokter Spesialisasi
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab">
          Spesialisasi Penyakit
        </button>
      </li>
      <li class="nav-item">
        <button class="nav-link" data-bs-toggle="tab">
          Gejala
        </button>
      </li>
    </ul>

    
  <!-- TABS -->

  <!-- MAP -->
  <div class="d-flex container area-map justify-content-center align-items-center my-4">
      Ini untuk MAP
  </div>

  <!-- CARD LIST -->
  <div class="row g-3">

    <div class="col-lg-4">
      <div class="doctor-card d-flex flex-column gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <PhDotOutline weight="fill" size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Sub Spesialis Bedah Radiologi </p>
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

    <div class="col-lg-4">
      <div class="doctor-card d-flex flex-column gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <PhDotOutline weight="fill" size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Sub Spesialis Bedah Radiologi </p>
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

    <div class="col-lg-4">
      <div class="doctor-card d-flex flex-column gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch mt-auto" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
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

    <div class="col-lg-4">
      <div class="doctor-card d-flex flex-column gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch mt-auto" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
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

    <div class="col-lg-4">
      <div class="doctor-card d-flex flex-column gap-0">

            <!-- Dokter -->
            <div class="d-flex align-self-stretch align-items-center gap-3" style="padding: 8px 8px 8px 8px;">
              <img src="https://medicastore.com/images/dokter/AA-SG-MAYA-PRAYOGA_Medicastore_PGiHl.png" class="doctor-avatar" />
              <div class="d-flex flex-column">
                <h6 class="subtitle-2 mb-3" style="color: var(--neutral-oreo-darker);">
                  dr. Debora Maemun Nah, Sp.Rad Imanuel Sitanggang
                </h6>
                <div class="d-flex align-items-center gap-2 mb-2">
                  <PhStethoscope size="16" color="#206BBC"/>
                  <p class="body-2 mb-0" style="color: var(--neutral-oreo-dark);"> Spesialis Radiologi </p>
                </div>
              </div>
            </div>

            <!-- RumahSakit -->
            <div class="d-flex gap-2 align-items-start align-self-stretch mt-auto" style="padding: 12px 8px 12px 96px; background: var(--pallete-neutral-milk-lighter, #F5F5F5);">
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

</template>
<style>


.custom-tabs {
  border-bottom: 1px solid #e5e7eb;
  gap: 32px;
  width: 100%;
}

.custom-tabs .nav-link {
  border: none;
  background: transparent;
  color: #6b7280;              /* abu */
  padding: 12px 0;
  position: relative;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 100%;
}

.custom-tabs .nav-link:hover {
  color: #206BBC;
}

/* ACTIVE TAB */
.custom-tabs .nav-link.active {
  color: #206BBC;              /* biru */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}

/* UNDERLINE */
.custom-tabs .nav-link.active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background: #206BBC;
  border-radius: 2px;
}


.area-map {
  height: 300px;
  width: auto;
  border-radius: 16px;
  border: 1px solid var(--border-default, #E6E6E6);
  background-color: #e0e0e0;
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
  width: 80px;
  min-height: 60px;
  max-height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #E6E6E6;
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

    import { PhArrowBendDownRight, PhArrowSquareOut, PhCaretDown, PhCaretRight, PhCrosshair, PhDotOutline, PhDotsThreeOutline, PhHospital, PhMagnifyingGlass, PhMapPin, PhMapTrifold, PhPhone, PhQuestion, PhSquaresFour, PhStethoscope } from '@phosphor-icons/vue';
</script>