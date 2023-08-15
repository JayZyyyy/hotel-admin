<template>
  <div class="carousel">
    <el-image :src="showImg" :fit="fit" />
  </div>
</template>

<script setup>
import { reactive, onMounted, ref, onBeforeMount } from 'vue'
import image3 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image1 from '../../assets/3.jpg'

const imgList = reactive([
  {
    id: 1,
    active: true,
    image: image1
  },
  {
    id: 2,
    active: false,
    image: image2
  },
  {
    id: 3,
    active: false,
    image: image3
  }
])
let fit = ref()
let showImg = ref()

// 初始化展示图片
const showImage = () => {
  showImg.value = imgList
    .filter(img => img.active === true)
    .map(i => i.image)
    .toString()
}

let showId = ref(1)
// 轮播图流程
const scroll = (startId, endId) => {
  let changeId = 0
  imgList.forEach(image => {
    if (image.active === true) {
      changeId = image.id + 1
      if (changeId > endId) {
        changeId = startId
      }
      image.active = false
    }
  })
  // 修改状态
  imgList.forEach(image => {
    if (image.id === changeId) {
      image.active = true
      showId = image.id
    }
  })
}

const scrollImage = () => {
  setInterval(() => {
    scroll(1, 3)
    showImage()
  }, 2500)
}
onBeforeMount(() => {
  showImage()
})

onMounted(() => {
  scrollImage()
})
</script>

<style scoped lang="less">
.carousel {
  width: 100%;
  height: 750px;
  margin-top: -130px;
  overflow: hidden;

  .el-image {
    width: 100%;
    height: 950px;
  }
}
</style>
