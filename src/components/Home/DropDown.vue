<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <span class="el-dropdown-link">
        更多
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>我的账户</el-dropdown-item>
          <el-dropdown-item>在线客服</el-dropdown-item>
          <el-dropdown-item>
            <!-- <router-link to="#about">关于我们</router-link> -->
            <div @click="() => emit('scrollTo')">关于我们</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
const emit = defineEmits(['scrollTo'])
</script>
<style scoped>
.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  width: 80px;
  height: 35px;
  color: black;
  font-size: 20px;
  padding-top: 8px;
  padding-left: 20px;
  margin-left: 50px;
}
</style>
