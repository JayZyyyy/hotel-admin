<template>
  <div class="detail">
    <div class="destination">
      <img :src="destination" alt="" />
    </div>
    <div class="info">
      <div>与好速来一起探索世界</div>
      <div>你想去哪里?</div>
    </div>
  </div>
</template>

<script setup>
import destination from '@/assets/mudidi.png'
</script>

<style scoped lang="less">
.detail {
  padding-top: 20px;
  .destination {
    display: flex;

    justify-content: center;
  }
  .info {
    display: block;
    text-align: center;

    div {
      width: 200px;
      height: 30px;
      margin: 0 auto;
      color: #000;
      font-style: italic;
      font-size: larger;
      font-weight: 700;
      letter-spacing: 2px;
    }
  }
}
</style>
