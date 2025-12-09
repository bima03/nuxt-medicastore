<script setup>
const props = defineProps({
  name: { type: String, required: true },
  size: { type: [String, Number], default: 24 },
  weight: { type: String, default: "regular" }, // thin | light | regular | bold | fill | duotone
  color: { type: String, default: "currentColor" },
  class: { type: String, default: "" },
  style: { type: String, default: "" }
})

// Membentuk nama tag web component <ph-{name}>
const tagName = `ph-${props.name}`
</script>

<template>
  <component
    :is="tagName"
    :size="size"
    :weight="weight"
    :color="color"
    :class="class"
    :style="style"
  />
</template>
