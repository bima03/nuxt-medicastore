<script setup lang="js">
import { PhMapPin } from '@phosphor-icons/vue';
import TopBarIcon from '../components/element/TopBarIcon.vue';
import { PhMapPinSimple } from '@phosphor-icons/vue';
import {  } from '@phosphor-icons/vue';
import { PhArrowSquareOut } from '@phosphor-icons/vue';
import { PhClock } from '@phosphor-icons/vue';

</script>

<template>
  <!-- HEADER -->
  <top-bar-icon text="" title="Apotek Mitra" icon="storefront" />

  <div class="container my-5">

  <!-- Title -->
  <p class="text-center mb-4 body-1" style="color: var(--neutral-oreo-darker);">
    Medicastore didukung oleh jaringan apotek mitra yang tersebar di kota-kota besar antara lain:
  </p>

  <div class="row g-4">

    <!-- CARD -->
    <div class="col-md-6">
      <div class="card apotek-card h-100">
        <div class="card-body">

          <!-- Title -->
          <h6 class="title-1 mb-3">Medicastore Jakarta Barat</h6>

          <!-- Info Table -->
          <div class="bg-light rounded p-3 mb-3 small">
            <div class="row mb-2" style="color: var(--neutral-oreo-darker);">
              <div class="col-5 body-2">Nomor Izin Apotek</div>
              <div class="col-7 subtitle-2">: 9120117315890028</div>
            </div>
            <div class="row mb-2" style="color: var(--neutral-oreo-darker);">
              <div class="col-5 body-2" style="color: var(--neutral-oreo-darker);">Nama Apoteker</div>
              <div class="col-7 subtitle-2">: apt. Jihan Fadhliah Kusnandar, S.Farm</div>
            </div>
            <div class="row" style="color: var(--neutral-oreo-darker);">
              <div class="col-5 body-2">SIPA</div>
              <div class="col-7 subtitle-2">: 11/B.19/31.73.08.1004.19.R-1/3/TM.09.19/e/2024</div>
            </div>
          </div>

          <!-- Info Alamat & Jadwal -->
          <div class="mb-3 small">
            <div class="row mb-1">
              <div class="d-flex col-5 body-2 gap-2" style="color: var(--neutral-oreo-base);">
                <PhMapPin size="16" weight="fill" style="color: var(--primary-base);"/>
                Alamat Apotek</div>
              <div class="col-7 body-2">Jl. Pos Pengumben Lama No.24, RT.08/RW.3, Srengseng Kec. Kembangan,
                Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11630
                <a href="#" class="button-s text-decoration-none" style="color: var(--primary-base);">
                Buka di peta
                <PhArrowSquareOut size="16"/>
                </a>
              </div>
              
            </div>
          </div>

          <div class="mb-3 small">
            <div class="row mb-1">
              <div class="d-flex col-5 body-2 gap-2" style="color: var(--neutral-oreo-base);">
                <PhClock size="16" weight="fill" style="color: var(--primary-base);"/>
                Jadwal Praktik Apoteker</div>
              <div class="col-7 d-flex justify-content-between">
                <span class="body-2">Senin – Jumat</span>
                <span class="body-2">08.00 – 21.00 WIB</span>
              </div>
              
            </div>
          </div>


        </div>
      </div>
    </div>

    <!-- DUPLICATE CARD (contoh) -->
    <div class="col-md-6">
      <div class="card apotek-card h-100">
        <div class="card-body">
          <h6 class="fw-semibold mb-3">Medicastore Jakarta Barat</h6>
          <!-- isi sama -->
        </div>
      </div>
    </div>

  </div>
</div>


</template>

<style>

.apotek-card {
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.apotek-card .bg-light {
  background-color: #f9fafb !important;
}

</style>
