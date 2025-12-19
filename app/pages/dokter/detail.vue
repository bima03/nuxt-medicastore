<template>

    <section class="py-5 bg-light" style="background: linear-gradient(90deg, #FFF 0%, var(--surface-primary, #EDF2FA) 100%); border-bottom: 1px solid var(--border-default, #E6E6E6);">
      <div class="d-flex container container-fluid align-items-center gap-5">

        <!-- FOTO -->
        <img src="https://medicastore.com/images/dokter/ADE-INDRISARI_Medicastore_S32YZ.jpg" 
             alt=""
             style="width: 200px;
                    height: 200px;
                    flex-shrink: 0;
                    aspect-ratio: 1/1;
                    border-radius: 360px;">

        <!-- INFO DOKTER -->
        <div class="d-flex flex-column align-items-start gap-3">
          <!-- TITLE -->
          <h6 class="title-1 mb-2" style="color: var(--neutral-oreo-darkest);">dr. Michael Andika Kirwanto, Sp,A, M.Biomed</h6>

          <div class="d-flex align-items-start gap-5">
            <!-- SPESIALIS -->
            <div class="d-flex flex-column">
              <p class="body-2 mb-3" style="color: var(--neutral-oreo-base);">Spesialis</p>
              <p class="d-flex subtitle-1 mb-2 align-items-center gap-2" style="color: var(--neutral-oreo-darker);">
                <PhStethoscope size="16" color="#206BBC"/>
                Radiologi
              </p>

              <!-- SUB-SPESIALIS -->
              <p class="d-flex body-1 align-items-center gap-2" style="color: var(--neutral-oreo-darker);">
                <PhDotOutline weight="fill" size="16"/>
                Sub Spesialis Bedah Onkologi
              </p>
            </div>

            <!-- STR -->
            <div class="d-flex flex-column">
              <p class="body-2 mb-3" style="color: var(--neutral-oreo-base);">STR</p>
              <p class="d-flex subtitle-1 mb-2 align-items-center gap-2" style="color: var(--neutral-oreo-darker);">
                511120139112802
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INFORMASI -->
    <div class="container my-5">
      <div class="row g-4">

        <!-- LEFT CONTENT -->
        <div class="col-lg-8">
          <!-- Deskripsi -->
          <p class="subtitle-2" style="color: var(--neutral-oreo-darker);">
            RS BMC Mayapada Hospital adalah salah satu RS yang terletak di kawasan  Bogor dibawah naungan Mayapada Healthcare Group. Memiliki Visi sebagai  tempat tujuan Pelayanan Kesehatan, yang unggul dalam kualitas pelayanan. Dengan Misi berdedikasi untuk memberikan Pelayanan Kesehatan yang  terintegrasi secara menyeluruh dengan penuh Belas Kasih dan Profesional.
          </p>

          <!-- Penyakit Spesifik -->
          <h6 class="subtitle-1 mt-4 mb-4" style="color: var(--neutral-oreo-darkest);">Penyakit Spesifik</h6>

          <div class="row g-3">
            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <img src="/public/images/icon-line.png" alt="" style="height: 18px;">
                <div>
                  <div class="subtitle-2" style="color: var(--neutral-oreo-darker);">Acne Cure Program</div>
                  <a href="#" class="button-s text-decoration-none" style="color: var(--primary-base);">
                    Baca Informasi Penyakit <PhArrowSquareOut size="16"/>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <img src="/public/images/icon-line.png" alt="" style="height: 18px;">
                <div>
                  <div class="subtitle-2" style="color: var(--neutral-oreo-darker);">Acne Cure Program</div>
                  <a href="#" class="button-s text-decoration-none" style="color: var(--primary-base);">
                    Baca Informasi Penyakit <PhArrowSquareOut size="16"/>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <img src="/public/images/icon-line.png" alt="" style="height: 18px;">
                <div>
                  <div class="subtitle-2" style="color: var(--neutral-oreo-darker);">Acne Cure Program</div>
                  <a href="#" class="button-s text-decoration-none" style="color: var(--primary-base);">
                    Baca Informasi Penyakit <PhArrowSquareOut size="16"/>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <img src="/public/images/icon-line.png" alt="" style="height: 18px;">
                <div>
                  <div class="subtitle-2" style="color: var(--neutral-oreo-darker);">Acne Cure Program</div>
                  <a href="#" class="button-s text-decoration-none" style="color: var(--primary-base);">
                    Baca Informasi Penyakit <PhArrowSquareOut size="16"/>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-flex align-items-start gap-3">
                <img src="/public/images/icon-line.png" alt="" style="height: 18px;">
                <div>
                  <div class="subtitle-2" style="color: var(--neutral-oreo-darker);">Acne Cure Program</div>
                  <a href="#" class="button-s text-decoration-none" style="color: var(--primary-base);">
                    Baca Informasi Penyakit <PhArrowSquareOut size="16"/>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <a href="#" class="button-lm text-decoration-none" style="color: var(--primary-base);">
                <PhSquaresFour size="24"/> Lihat Lainnya (6)
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT CONTENT -->
        <div class="col-lg-4">
          <div class="card education-card">
            <h6 class="subtitle-1 mb-3" style="color: var(--neutral-oreo-darkest);">Pendidikan Terakhir</h6>

            <ul class="education-list">
              <li>
                <strong class="subtitle-2" style="color: var(--neutral-oreo-darker);">Universitas Udayana</strong>
                <div class="body-2" style="color: var(--neutral-oreo-base);">Program Magister Biomedik dan Spesialis Anak</div>
                <small class="caption-1" style="color: var(--neutral-oreo-base);">2010 - 2015</small>
              </li>

              <li>
                <strong class="subtitle-2" style="color: var(--neutral-oreo-darker);">Universitas Udayana</strong>
                <div class="body-2" style="color: var(--neutral-oreo-base);">Program Magister Biomedik dan Spesialis Anak</div>
                <small class="caption-1" style="color: var(--neutral-oreo-base);">2010 - 2015</small>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- LOKASI PRAKTIK -->
      <h6 class="mt-5 mb-3 subtitle-1" style="color: var(--neutral-oreo-darkest);">Lokasi Praktik</h6>

      <!-- Lokasi 1 -->
      <div class="card lokasi-card p-0 mb-5">
        <div class="row container p-0 mx-0 g-4 align-items-start">

          <!-- Hospital -->
          <div class="col-lg-4 p-4" style="background-color: #EDF2FA; border-radius: 16px;">
            <h6 class="button-xl mb-4" style="color: var(--neutral-oreo-darkest);">Rumah Sakit Bersalin Kartini</h6>
            <img src="https://medicastore.com/images/faskes/RUMAH-SAKIT-JIH-YOGYAKARTA-MEDICASTORE.jpeg" 
                 class="hospital-img mb-4 w-100" 
                 style="max-height: 150px;
                        border-radius: 12px;
                        object-fit: cover;   /* kunci utama */
                        object-position: center;">

            <button class="btn md-btn-text button-lm w-100 px-0" style="color: var(--primary-base);">
              <PhPhone weight="fill" size="16"/> Hubungi
            </button>

            <button class="btn md-btn-outline button-lm w-100 mt-3" style="color: var(--primary-base);">
              <PhMapPin weight="fill" size="16"/> Lihat di Peta
            </button>
          </div>

          <!-- Address & Schedule -->
          <div class="col-lg-8 p-4 pb-0">
            <div class="mb-3">
              <strong class="body-2" style="color: var(--neutral-oreo-base);">Alamat</strong>
              <div class="d-flex gap-2 align-items-center mt-1">
                <div style="color: var(--primary-base);"><PhMapPin weight="fill" size="16"/></div>
                <p class="body-2 mb-0" style="color: var(--neutral-oreo-darker);">
                Jl. Perjuangan No.Kav.8, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
                </p>
              </div>
            </div>

            <div class="mb-3">
              <strong class="body-2" style="color: var(--neutral-oreo-base);">Jadwal</strong>

              <div class="row g-2 mt-0">

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Senin</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Selasa</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Rabu</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Kamis</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Jumat</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Sabtu</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Minggu</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <!-- Lokasi 2 -->
      <div class="card lokasi-card p-0 mb-5">
        <div class="row container p-0 mx-0 g-4 align-items-start">

          <!-- Hospital -->
          <div class="col-lg-4 p-4" style="background-color: #EDF2FA; border-radius: 16px;">
            <h6 class="button-xl mb-4" style="color: var(--neutral-oreo-darkest);">Rumah Sakit Bersalin Kartini</h6>
            <img src="https://medicastore.com/images/faskes/RUMAH-SAKIT-JIH-YOGYAKARTA-MEDICASTORE.jpeg" 
                 class="hospital-img mb-4 w-100" 
                 style="max-height: 150px;
                        border-radius: 12px;
                        object-fit: cover;   /* kunci utama */
                        object-position: center;">

            <button class="btn md-btn-text button-lm w-100 px-0" style="color: var(--primary-base);">
              <PhPhone weight="fill" size="16"/> Hubungi
            </button>

            <button class="btn md-btn-outline button-lm w-100 mt-3" style="color: var(--primary-base);">
              <PhMapPin weight="fill" size="16"/> Lihat di Peta
            </button>
          </div>

          <!-- Address & Schedule -->
          <div class="col-lg-8 p-4 pb-0">
            <div class="mb-3">
              <strong class="body-2" style="color: var(--neutral-oreo-base);">Alamat</strong>
              <div class="d-flex gap-2 align-items-center mt-1">
                <div style="color: var(--primary-base);"><PhMapPin weight="fill" size="16"/></div>
                <p class="body-2 mb-0" style="color: var(--neutral-oreo-darker);">
                Jl. Perjuangan No.Kav.8, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
                </p>
              </div>
            </div>

            <div class="mb-3">
              <strong class="body-2" style="color: var(--neutral-oreo-base);">Jadwal</strong>

              <div class="row g-2 mt-0">

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Senin</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Selasa</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Rabu</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Kamis</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Jumat</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Sabtu</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Minggu</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <!-- Lokasi 3 -->
      <div class="card lokasi-card p-0">
        <div class="row container p-0 mx-0 g-4 align-items-start">

          <!-- Hospital -->
          <div class="col-lg-4 p-4" style="background-color: #EDF2FA; border-radius: 16px;">
            <h6 class="button-xl mb-4" style="color: var(--neutral-oreo-darkest);">Rumah Sakit Bersalin Kartini</h6>
            <img src="https://medicastore.com/images/faskes/RUMAH-SAKIT-JIH-YOGYAKARTA-MEDICASTORE.jpeg" 
                 class="hospital-img mb-4 w-100" 
                 style="max-height: 150px;
                        border-radius: 12px;
                        object-fit: cover;   /* kunci utama */
                        object-position: center;">

            <button class="btn md-btn-text button-lm w-100 px-0" style="color: var(--primary-base);">
              <PhPhone weight="fill" size="16"/> Hubungi
            </button>

            <button class="btn md-btn-outline button-lm w-100 mt-3" style="color: var(--primary-base);">
              <PhMapPin weight="fill" size="16"/> Lihat di Peta
            </button>
          </div>

          <!-- Address & Schedule -->
          <div class="col-lg-8 p-4 pb-0">
            <div class="mb-3">
              <strong class="body-2" style="color: var(--neutral-oreo-base);">Alamat</strong>
              <div class="d-flex gap-2 align-items-center mt-1">
                <div style="color: var(--primary-base);"><PhMapPin weight="fill" size="16"/></div>
                <p class="body-2 mb-0" style="color: var(--neutral-oreo-darker);">
                Jl. Perjuangan No.Kav.8, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530
                </p>
              </div>
            </div>

            <div class="mb-3">
              <strong class="body-2" style="color: var(--neutral-oreo-base);">Jadwal</strong>

              <div class="row g-2 mt-0">

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Senin</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Selasa</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Rabu</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Kamis</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center" style="color: var(--neutral-oreo-darkest);">
                    <div class="subtitle-2">Jumat</div>
                    <div class="body-2">08.00 - 17.00</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Sabtu</div>
                    <div class="body-2">-</div>
                  </div>
                </div>

                <div class="col-6 col-md-3">
                  <div class="card-hari align-items-center text-closed">
                    <div class="subtitle-2">Minggu</div>
                    <div class="body-2">-</div>
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

.text-closed {
  color: var(--neutral-oreo-base);
}

.card-hari {
  display: flex;
  padding: 8px 12px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  background: var(--pallete-neutral-milk-light, #F5F5F5);
}

/* button text-medium */
.md-btn-outline {
    text-decoration: none;
    border-style: unset;
    display: flex;
    height: 36px;
    min-width: 100px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
}

/* button outline-medium */
.md-btn-outline {
    text-decoration: none;
    border-style: unset;
    display: flex;
    height: 36px;
    min-width: 100px;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 8px;
    border: 1px solid var(--pallete-primary-base, #206BBC);
}

.lokasi-card {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid var(--border-default, #E6E6E6);
  background: #FFF;
}

.education-card {
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--border-default, #E6E6E6);
  background: var(--pallete-neutral-milk-lightest, #FFF);
}

</style>
<script lang="ts" setup>
    definePageMeta({
        layout: 'informasi-layout'
    })

    import { PhArrowSquareOut, PhDotOutline, PhMapPin, PhPhone, PhSquaresFour, PhStethoscope } from '@phosphor-icons/vue';
</script>