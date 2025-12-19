<template>
  <button @click="loginWithGoogle">
    Login dengan Google
  </button>
</template>

<script setup>
const emit = defineEmits(['success'])

const loginWithGoogle = () => {
  google.accounts.id.initialize({
    client_id: "235546364586-ud5hbdufhn57iu2f6do8a8sus0r47480.apps.googleusercontent.com",
    callback: handleCredential
  })

  google.accounts.id.prompt()
}

const handleCredential = async (response) => {
  emit('success', response.credential)
}
</script>
