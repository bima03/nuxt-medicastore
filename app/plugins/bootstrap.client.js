// plugins/bootstrap.client.js
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(() => {
  console.log('✅ Bootstrap JS loaded:', bootstrap)

  // Simpan ke global untuk DevTools (opsional)
  window.bootstrap = bootstrap
})
