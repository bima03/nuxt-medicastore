<template>
  <div class="card apotek-card h-100">
    <div class="card-body">

      <!-- Title -->
      <h6 class="title-1 mb-3">{{ mitra.vNamaApt }}</h6>

      <!-- Info Table -->
      <div class="bg-light rounded p-3 mb-3 small">
        <div class="row mb-2" style="color: var(--neutral-oreo-darker);">
          <div class="col-5 body-2">Nomor Izin Apotek</div>
          <div class="col-7 subtitle-2">: {{ mitra?.vNoIzinApotek }}</div>
        </div>
        <div class="row mb-2" style="color: var(--neutral-oreo-darker);">
          <div class="col-5 body-2" style="color: var(--neutral-oreo-darker);">Nama Apoteker</div>
          <div class="col-7 subtitle-2">: {{ mitra?.vApoteker }}</div>
        </div>
        <div class="row" style="color: var(--neutral-oreo-darker);">
          <div class="col-5 body-2">SIPA</div>
          <div class="col-7 subtitle-2">: {{ mitra?.SIP }}</div>
        </div>
      </div>

      <!-- Info Alamat & Jadwal -->
      <div class="mb-3 small">
        <div class="row mb-1">
          <div class="d-flex col-5 body-2 gap-2" style="color: var(--neutral-oreo-base);">
            <PhMapPin size="16" weight="fill" style="color: var(--primary-base);"/>
            Alamat Apotek</div>
          <div class="col-7 body-2"> {{ mitra?.vAlamat }}
            <br>
            <a :href="mitra?.vMap" target="_blank" class="button-s text-decoration-none" style="color: var(--primary-base);">
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
            <span class="body-2" v-html="mitra?.tJadwalPraktik.replace(/\s*\|\s*/g, '<br><br>')"></span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
  import { PhClock,PhArrowSquareOut,PhMapPin } from '@phosphor-icons/vue';
  defineProps({
    mitra : Object
  })
</script>

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