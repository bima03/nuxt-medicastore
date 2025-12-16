<script setup lang="js">
import TopBarIcon from '../components/element/TopBarIcon.vue';
import { PhCreditCard, PhInfo, PhMopedFront, PhPackage } from '@phosphor-icons/vue';

</script>

<template>
  <!-- HEADER -->
  <top-bar-icon text="Pertanyaan-pertanyaan umum pada medicastore" title="FAQ" icon="question" />

  <!-- CONTENT -->
  <section class="py-5">
      <div class="container border border-top-0 border-bottom-0" style="max-width: 900px;">

          <div class="accordion" id="faqAccordion">

              <!-- GROUP 1 -->
              <div class="mb-4 p-4">
                  <h5 class="title-1 d-flex align-items-center mb-3 gap-2" style="color: var(--neutral-oreo-darkest);">
                    <PhInfo size="24"/> Tentang Medicastore
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingOne">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0" 
                                  style="border-radius: 0; background-color: transparent;"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseOne">
                              Apa itu Medicastore?
                          </button>
                      </h2>
                      <div id="collapseOne" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 ps-0" style="color: var(--neutral-oreo-darker);">
                              Medicastore.com adalah penyedia informasi melalui media internet yang berisi
                              berbagai macam informasi penyakit, informasi obat dan informasi dokter spesialis
                              di Indonesia. Dengan informasi ribuan merek obat dan ratusan jenis penyakit 
                              disajikan dalam bahasa Indonesia yang mudah dimengerti dan dapat dilihat 
                              darimana saja dan kapan saja. Medicastore.com juga merupakan apotik yang dapat 
                              melayani pembelian produk kesehatan secara online.
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 2 -->
              <div class="mb-4 p-4">
                  <h5 class="title-1 d-flex align-items-center mb-3 gap-2" style="color: var(--neutral-oreo-darkest);">
                      <PhPackage size="24"/> Pemesanan
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0"
                                  style="border-radius: 0; background-color: transparent;"  
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseTwo">
                              Bagaimana cara memesan obat di medicastore?
                          </button>
                      </h2>
                      <div id="collapseTwo" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 ps-0" style="color: var(--neutral-oreo-darker);">
                              Anda dapat memesan obat melalui situs medicastore dengan memilih produk 
                              yang diinginkan dan mengikuti langkah pemesanan hingga pembayaran.
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 3 -->
              <div class="mb-4 p-4">
                  <h5 class="title-1 d-flex align-items-center mb-3 gap-2" style="color: var(--neutral-oreo-darkest);">
                      <PhCreditCard size="24"/> Pembayaran
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0"
                                  style="border-radius: 0; background-color: transparent;"  
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseThree">
                              Bagaimana pembayaran transaksi di medicastore?
                          </button>
                      </h2>
                      <div id="collapseThree" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 ps-0" style="color: var(--neutral-oreo-darker);">
                              Pembayaran dapat dilakukan melalui transfer bank, e-wallet, dan metode 
                              pembayaran lain yang sudah tersedia pada halaman checkout.
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 4 -->
              <div class="mb-4 p-4">
                  <h5 class="title-1 d-flex align-items-center mb-3 gap-2" style="color: var(--neutral-oreo-darkest);">
                      <PhMopedFront size="24"/> Pengiriman
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0"
                                  style="border-radius: 0; background-color: transparent;"  
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseFour">
                              Bagaimana pengiriman obat di medicastore?
                          </button>
                      </h2>
                      <div id="collapseFour" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 ps-0" style="color: var(--neutral-oreo-darker);">
                              Pengiriman dilakukan melalui kurir rekanan dan tersedia pilihan pengiriman 
                              reguler maupun ekspres tergantung daerah masing-masing.
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </section>

</template>

<style>

.accordion-item {
  border: none;
}

.accordion-button {
  border: none;
  box-shadow: none;
  background-color: transparent;
}

.accordion-button:focus {
  box-shadow: none;
  border-color: transparent;
}

.accordion-button:not(.collapsed) {
  background-color: transparent;
  box-shadow: none;
  font-weight: 700;
  color: var(--primary-base);
}

</style>