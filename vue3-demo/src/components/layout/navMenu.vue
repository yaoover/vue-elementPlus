<script setup lang="ts">
import {ref, reactive} from 'vue'
import {useMenu} from './useMenu'

const {menuItems} = useMenu()

</script>


<template>
  <el-aside width="200px" class="aside">
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo" router
        >
        <el-menu-item :index="v.url" v-for="v in menuItems" :key="v.url">
          <el-icon><component :is="v.icon"></component></el-icon>
          <span>{{ v.name }}</span>
        </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped>
    
</style>