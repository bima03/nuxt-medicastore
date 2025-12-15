<script setup lang="js">
import TopBarIcon from '../components/element/TopBarIcon.vue';

</script>

<template>
  <!-- HEADER -->
  <top-bar-icon text="Pertanyaan-pertanyaan umum pada medicastore" title="FAQ" icon="question" />

  <!-- CONTENT -->
  <section class="py-5">
      <div class="container" style="max-width: 900px;">

          <div class="accordion" id="faqAccordion">

              <!-- GROUP 1 -->
              <div class="mb-4 border-bottom pb-3">
                  <h5 class="fw-semibold d-flex align-items-center mb-3">
                      <i class="bi bi-info-circle me-2"></i> Tentang Medicastore
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button collapsed ps-0" 
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseOne">
                              Apa itu Medicastore?
                          </button>
                      </h2>
                      <div id="collapseOne" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body ps-0">
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
              <div class="mb-4 border-bottom pb-3">
                  <h5 class="fw-semibold d-flex align-items-center mb-3">
                      <i class="bi bi-box me-2"></i> Pemesanan
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                          <button class="accordion-button collapsed ps-0"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseTwo">
                              Bagaimana cara memesan obat di medicastore?
                          </button>
                      </h2>
                      <div id="collapseTwo" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body ps-0">
                              Anda dapat memesan obat melalui situs medicastore dengan memilih produk 
                              yang diinginkan dan mengikuti langkah pemesanan hingga pembayaran.
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 3 -->
              <div class="mb-4 border-bottom pb-3">
                  <h5 class="fw-semibold d-flex align-items-center mb-3">
                      <i class="bi bi-credit-card me-2"></i> Pembayaran
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                          <button class="accordion-button collapsed ps-0"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseThree">
                              Bagaimana pembayaran transaksi di medicastore?
                          </button>
                      </h2>
                      <div id="collapseThree" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body ps-0">
                              Pembayaran dapat dilakukan melalui transfer bank, e-wallet, dan metode 
                              pembayaran lain yang sudah tersedia pada halaman checkout.
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 4 -->
              <div class="mb-2">
                  <h5 class="fw-semibold d-flex align-items-center mb-3">
                      <i class="bi bi-truck me-2"></i> Pengiriman
                  </h5>

                  <div class="accordion-item border-0">
                      <h2 class="accordion-header">
                          <button class="accordion-button collapsed ps-0"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseFour">
                              Bagaimana pengiriman obat di medicastore?
                          </button>
                      </h2>
                      <div id="collapseFour" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body ps-0">
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

</style>