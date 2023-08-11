<script setup>
import { useHomeStore } from '../store/index.js'
const homeStore = useHomeStore()
</script>

<template>
  <h1>{{ homeStore.$state.name }}</h1>
</template>

<style scoped></style>
