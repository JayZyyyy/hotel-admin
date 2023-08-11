<template>
  <div>Home</div>
  <el-button type="primary">Primary</el-button>
</template>

<script setup>
import { onMounted } from 'vue'
import { getHotel } from '../api/index.js'

onMounted(() => {
  getHotel()
})
</script>
