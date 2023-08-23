<template>
  <div class="room-header">
    <span class="room-type">房型</span>
    <span class="room-detail">房间简介</span>
    <span class="room-breakfast">早餐</span>
    <span class="room-cancel">取消政策</span>
    <span class="room-people">人数上限</span>
    <span class="room-price">房价</span>
    <span class="room-book">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="less">
.room-header {
  width: 100%;
  height: 30px;
  margin-top: 10px;

  background-color: #94c9ff;
  display: flex;
  color: white;
  text-align: center;
  font-weight: 700;
  overflow: hidden;

  .room-type {
    flex: 1.9;
    padding: 5px;
  }

  .room-detail {
    flex: 1.5;
    padding: 5px;
  }
  .room-breakfast {
    flex: 1;
    padding: 5px;
    margin-left: 5px;
  }
  .room-cancel {
    flex: 1;
    padding: 5px;
  }
  .room-people {
    flex: 1;
    padding: 5px;
  }
  .room-price {
    flex: 1.1;
    padding: 5px;
  }
  .room-book {
    flex: 1;
    padding: 5px;
  }
}
</style>
