<script setup lang="js">
import TopBarIcon from '../components/element/TopBarIcon.vue';
import { PhEnvelopeSimple } from '@phosphor-icons/vue';

</script>

<template>
  <!-- HEADER -->
  <top-bar-icon text="" title="Kritik dan Saran" icon="envelopsimple" />

  <!-- CONTENT -->
  <div class="container py-5">
  <div class="row align-items-start g-5">

    <!-- LEFT CONTENT -->
    <div class="col-md-6">
      <div class="d-flex flex-column gap-3">
        <div class="icon-wrapper">
          <PhEnvelopeSimple size="40" weight="fill" style="color: var(--primary-base);"/>
        </div>
        <p class="title-1" style="color: var(--neutral-oreo-darker);">
          Informasikan kepada kami, keluhan anda.
          Keluhan anda akan segera kami tindak lanjuti.
        </p>
      </div>
    </div>

    <!-- RIGHT FORM -->
    <div class="col-md-6">
      <div class="card form-card">
        <div class="align-self-stretch">

          <!-- KATEGORI -->
          <div class="mb-3">
            <label class="form-label body-2">Kategori Keluhan</label>
            <div class="d-flex gap-2 flex-wrap">
              <div class="md-chips-active body-2" style="color: var(--primary-base);">
                Terbaru
              </div>
              <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);">
                Transaksi
              </div>
              <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);">
                Produk
              </div>
              <div class="md-chips body-2" style="color: var(--neutral-oreo-darker);">
                Lain-Lain
              </div>
            </div>
          </div>

          <!-- MESSAGE -->
          <div class="mb-4">
            <label class="form-label body-2 required">Masukan</label>
            <textarea
              class="form-control body-2"
              rows="4"
              placeholder="Tuliskan pesan Anda"
            ></textarea>
          </div>

          <!-- CAPTCHA -->
          <div class="mb-4">
            <div class="captcha-placeholder">
              <span>I'm not a robot</span>
            </div>
          </div>

          <!-- BUTTON -->
          <button class="btn lg-btn-primary button-lm px-4">
            Kirim
          </button>

        </div>
      </div>
    </div>

  </div>
  </div>

</template>

<style>

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

.form-card {
  display: flex;
  padding: 16px;
  align-items: flex-start;
  gap: 16px;
  border-radius: 16px;
  border: 1px solid var(--border-default, #E6E6E6);
  background: var(--pallete-neutral-milk-lightest, #FFF);

  /* Lvl1 */
  box-shadow: 0 1px 4px 0 rgba(51, 51, 51, 0.10);
}

.icon-wrapper {
  display: inline-flex !important;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: var(--surface-primary, #EDF2FA);

  width: fit-content !important;
  max-width: fit-content !important;
  flex: 0 0 auto !important;
}

/* chips medium */
.md-chips {
    display: flex;
    height: 36px;
    min-width: 54px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 300px;
    border: 1px solid var(--border-default, #E6E6E6);
    background: var(--pallete-neutral-milk-lightest, #FFF);
}

.md-chips-active {
    display: flex;
    height: 36px;
    min-width: 54px;
    padding: 10px 12px;
    justify-content: center;
    align-items: center;
    gap: 6px;
    border-radius: 300px;
    border: 1px solid var(--border-primary, #D1DDE9);
    background: var(--surface-primary, #EDF2FA);
}
</style>