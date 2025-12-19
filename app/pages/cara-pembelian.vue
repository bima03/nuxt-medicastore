<script setup lang="js">
import TopBarIcon from '../components/element/TopBarIcon.vue';
import { PhCreditCard, PhInfo, PhMopedFront, PhPackage, PhSignIn } from '@phosphor-icons/vue';

</script>

<template>
  <!-- HEADER -->
  <top-bar-icon text="Cara mudah membeli obat di Medicastore" title="Cara Pembelian" icon="question" />

  <!-- CONTENT -->
  <section class="py-5">
      <div class="container border border-top-0 border-bottom-0" style="max-width: 900px;">

          <div class="accordion" id="faqAccordion">

              <!-- GROUP 1 -->
              <div class="mb-0 p-4">
                  <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingOne">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0 mb-3" 
                                  style="border-radius: 0; background-color: transparent;"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseOne">
                              1. Login
                          </button>
                      </h2>
                      <div id="collapseOne" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>1.1</b> Silahkan login terlebih dahulu untuk memesan produk di medicastore
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/login.jpg"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-3"
                                />
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 2 -->
              <div class="mb-0 p-4">
                  <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingTwo">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0 mb-3" 
                                  style="border-radius: 0; background-color: transparent;"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseTwo">
                              2. Pilih Produk
                          </button>
                      </h2>
                      <div id="collapseTwo" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>2.1</b> Pilih produk yang anda butuhkan, lalu klik produknya.
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/beli.jpg"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-5"
                                />
                          </div>
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>2.2</b> Masuk ke halaman detail produk, pilih kemasan yang tersedia, lalu add to cart. produk tersebut akan otomatis masuk ke dalam keranjang belanja anda.
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/beli2.jpg"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-3"
                                />
                          </div>
                      </div>
                  </div>
              </div>

              <!-- GROUP 3 -->
              <div class="mb-0 p-4">
                  <div class="accordion-item border-0">
                      <h2 class="accordion-header" id="headingThree">
                          <button class="subtitle-1 border-top border-bottom accordion-button collapsed ps-0 mb-3" 
                                  style="border-radius: 0; background-color: transparent;"
                                  type="button" 
                                  data-bs-toggle="collapse" 
                                  data-bs-target="#collapseThree">
                              3. Checkout
                          </button>
                      </h2>
                      <div id="collapseThree" 
                          class="accordion-collapse collapse" 
                          data-bs-parent="#faqAccordion">
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>3.1</b> Lakukan pembayaran dengan cara mengklik tombol cart yang ada di kanan atas website medicastore. setelah tombol di klik anda akan diarahkan ke halaman pembayaran.
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/cara-1.png"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-3"
                                />
                          </div>
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>3.2</b> Pastikan produk yang anda pesan sudah sesuai. lalu klik bayar.
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/cart-bayar.png"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-3"
                                />
                          </div>
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>3.3</b> Pilih pengiriman dan cara pembayaran.
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/cara-2.png"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-3"
                                />
                          </div>
                          <div class="accordion-body body-2 p-0" style="color: var(--neutral-oreo-darker);">
                              <b>3.4</b> Pesanan sudah diterima.
                              <!-- GAMBAR -->
                                <img
                                src="https://medicastore.com/themes/blue/images/cart-pemesanan.png"
                                alt="contoh"
                                class="img-fluid rounded border mt-3 mb-5"
                                />
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

.accordion-img {
  height: 500px;
  background-image: url('https://medicastore.com/themes/blue/images/login.jpg');
  background-size: cover;
  width: 100%;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}



</style>