<template>
  <div class="img_div">
    <img :src="imgSrc" alt="" />
    <a>
      <div class="mask">
        <a href="">
          <img :src="maskSrc" alt="" />
        </a>
      </div>
    </a>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  imgSrc: String,
  maskSrc: String
})
</script>

<style scoped lang="less">
.img_div {
  position: relative;
  width: 400px;
  height: 500px;
}

img {
  width: 400px;
  height: 500px;
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 500px;
  background: rgba(101, 101, 101, 0.6);
  color: #ffffff;
  opacity: 0;
}
.mask img {
  text-align: center;
}

.img_div a:hover .mask {
  opacity: 1;
}
</style>
