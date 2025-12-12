<template>
    <section class="py-5 bg-light" style="background: linear-gradient(90deg, #E1E9F4 0%, #E5EFF0 100%);">
      <div class="container-fluid text-center">

        <!-- TITLE -->
        <h2 class="fw-bold mb-2">Cari Dokter dan Spesialis</h2>
        <p class="text-muted mb-4">
          Dapatkan informasi dokter yang sesuai dengan kebutuhan anda
        </p>

        <!-- SEARCH BAR WRAPPER -->
        <div class="d-flex justify-content-center">
          <div class="input-group" style="max-width: 700px;">

            <!-- Dropdown lokasi -->
            <button class="btn btn-outline-secondary dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown">
              <i class="bi bi-geo-alt"></i> Semua Lokasi
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Semua Lokasi</a></li>
              <li><a class="dropdown-item" href="#">Jakarta</a></li>
              <li><a class="dropdown-item" href="#">Bandung</a></li>
              <li><a class="dropdown-item" href="#">Surabaya</a></li>
            </ul>

            <!-- Input search -->
            <input type="text" 
                  class="form-control" 
                  placeholder="Cari dokter, spesialisasi, tindakan medis, spesialisasi penyakit">

            <!-- Icon button (search) -->
            <button class="btn btn-outline-secondary">
              <i class="bi bi-search"></i>
            </button>

            <!-- Tombol Cari -->
            <button class="btn btn-primary px-4">
              Cari
            </button>

          </div>
        </div>

      </div>
    </section>

</template>
<style></style>
<script>
    definePageMeta({
        layout: 'informasi-layout'
    })
</script>