<script setup lang="ts">
const { public: { marker } } = useRuntimeConfig()
</script>

<template>
  <p>marker: {{ marker }}</p>
</template>
