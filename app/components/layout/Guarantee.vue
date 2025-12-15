<template>
  <!-- medicastore guarantee -->
  <div class="container-fluid surface-primary">
      <div class="container py-5">
          <div class="row g-4">

              <!-- Item 1 -->
              <div class="col-md-6 d-flex">
                  <div class="me-3">
                      <PhMedal size="40" style="color: var(--primary-base);"/>
                  </div>
                  <div>
                      <h5 class="fw-semibold mb-1">100% Original</h5>
                      <p class="mb-0 text-muted">
                          Semua produk terdaftar di BPOM dan Kemenkes, berasal dari supplier resmi dengan harga bersaing.
                      </p>
                  </div>
              </div>

              <!-- Item 2 -->
              <div class="col-md-6 d-flex">
                  <div class="me-3">
                      <PhPackage size="40" style="color: var(--primary-base);"/>
                  </div>
                  <div>
                      <h5 class="fw-semibold mb-1">Packing Aman</h5>
                      <p class="mb-0 text-muted">
                          Setiap pesanan dikemas rapi dan aman agar kenyamanan dan privasi Anda tetap terjaga.
                      </p>
                  </div>
              </div>

              <!-- Item 3 -->
              <div class="col-md-6 d-flex">
                  <div class="me-3">
                      <PhMopedFront size="40" style="color: var(--primary-base);"/>
                  </div>
                  <div>
                      <h5 class="fw-semibold mb-1">Pengiriman Cepat</h5>
                      <p class="mb-0 text-muted">
                          Dengan kurir profesional Medicastore dan mitra pengiriman nasional, pesanan Anda sampai lebih cepat dan aman.
                      </p>
                  </div>
              </div>

              <!-- Item 4 -->
              <div class="col-md-6 d-flex">
                  <div class="me-3">
                      <PhHeadset size="40" style="color: var(--primary-base);"/>
                  </div>
                  <div>
                      <h5 class="fw-semibold mb-1">Customer Service Responsif</h5>
                      <p class="mb-0 text-muted">
                          Kami bantu mencarikan ketersediaan obat yang Anda butuhkan dan informasikan segera saat siap dikirim.
                      </p>
                  </div>
              </div>

          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import { PhHeadset, PhMedal, PhMopedFront, PhPackage } from '@phosphor-icons/vue';


</script>

<style>

</style>