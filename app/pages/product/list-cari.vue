<template>

  <!-- TAB PRODUK -->
  <div class="container-fluid border-bottom">
    <div class="container d-flex mt-4">
    <ul class="nav custom-tabs w-100">
    <li class="nav-item d-flex align-items-center">
      <button class="nav-link active" data-bs-toggle="tab">
        <div class="d-flex gap-2 align-items-center product-tab">
          <img src="/public/images/produk-semua-tab.png" alt="Anak">
          Semua
        </div>
      </button>
    </li>
    <li class="nav-item d-flex align-items-center">
      <button class="nav-link" data-bs-toggle="tab">
        <div class="d-flex gap-2 align-items-center product-tab">
          <img src="/public/images/produk-semua-tab.png" alt="Anak">
          Obat
        </div>
      </button>
    </li>
    <li class="nav-item d-flex align-items-center">
      <button class="nav-link" data-bs-toggle="tab">
        <div class="d-flex gap-2 align-items-center product-tab">
          <img src="/public/images/produk-semua-tab.png" alt="Anak">
          Herbal
        </div>
      </button>
    </li>
    <li class="nav-item d-flex align-items-center">
      <button class="nav-link" data-bs-toggle="tab">
        <div class="d-flex gap-2 align-items-center product-tab">
          <img src="/public/images/produk-semua-tab.png" alt="Anak">
          Suplemen
        </div>
      </button>
    </li>
  </ul>
    </div>
  </div>

  <!-- FILTER -->
  <div class="container-fluid" style="background-color: #FAFAFA;">
    <div class="container d-flex align-self-stretch align-items-center gap-2 py-2">
              <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);" :class="{ active: artikelChoosed === 0 }" @click="chooseArtikel(0)">
                Generik
              </div>
              <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);" :class="{ active: artikelChoosed === 1 }" @click="chooseArtikel(1)">
                Non-Generik
              </div>
              <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);" :class="{ active: artikelChoosed === 1 }" @click="chooseArtikel(1)">
                Stok <PhCaretDown size="16"/>
              </div>
              <div class="d-flex ms-auto label align-items-center gap-2" style="color: var(--neutral-oreo-base);">
                Urutkan:
                <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);" :class="{ active: artikelChoosed === 1 }" @click="chooseArtikel(1)">
                  <PhSortAscending size="16"/> Paling Sesuai <PhCaretDown size="16"/>
                </div>
              </div>
    </div>
  </div>

  <!-- Start Section-PRODUK -->
  <div class="container p-0 pb-5">
    <div class="d-flex gap-2 body-1 p-3" style="color: var(--neutral-oreo-dark);">
      9 hasil ditemukan untuk
      <div class="subtitle-1" style="color: var(--neutral-oreo-darker);">
        "diare"
      </div>
    </div>
    
    <div class="container p-0 align-items-start">

              <div class="container p-0 my-2">
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

</template>

<style>

.custom-produkcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--border-default, #E6E6E6);
  background: var(--pallete-neutral-milk-lighter, #FAFAFA);
}

.product-tab img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.custom-tabs {
  gap: 0px;
  width: 100%;
}

.custom-tabs .nav-link {
  border: none;
  background: transparent;
  color: #6b7280;              /* abu */
  padding: 12px 24px;
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
</style>

<script setup>
import { PhBuilding, PhBuildings, PhCaretDown, PhSortAscending } from '@phosphor-icons/vue';

// kosong juga tidak masalah
</script>
