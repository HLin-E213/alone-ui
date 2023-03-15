<!--
 * @Author 黄小林
 * @Description 
-->
<template>
  <a-header></a-header>
  <div class="container">
    <div class="left-menu">
      <ul>
        <template v-for="(item, i) in menuList" :key="i">
          <div class="nav-first-title">{{ item.title }}</div>
          <li class="nav-item"
              :class="{active:menu.name === activeName}"
              v-for="(menu, idx) in item.children"
              @click="handleChangeMenu(menu)"
              :key="idx">
            {{ menu.title }}
          </li>
        </template>
      </ul>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import installationList from '@/router/baseRouter/index.js'
import componentList from '@/router/componentRouter/index.js'
import AHeader from '@/components/AHeader.vue'

const router = useRouter()
const route = useRoute()
const activeName = ref('install')
const menuList = ref([...installationList, ...componentList])

const handleChangeMenu = (item) => {
  activeName.value = item.name
  router.push(item.path)
}

watch(route, (r) => {
  activeName.value = r.name
}, {immediate: true})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  margin: 0 auto;

  .left-menu {
    width: 280px;
    height: auto;
    padding: 12px 8px;
    border-right: 1px solid #f0f0f0;
    overflow-y: auto;

    ul {
      padding: 0;
      margin: 0;
      overflow: hidden;

      .nav-first-title {
        line-height: 40px;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 700;
        padding: 0 12px 0 22px;
        color: $text;
      }

      .nav-item {
        list-style: none;
        line-height: 40px;
        font-size: 13px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
        padding: 0 12px 0 32px;
        cursor: pointer;
        color: $text-light;
        border-radius: 3px;

        &:hover {
          color: #18a058;
          background-color: rgb(243, 243, 245);
          transition: all .3s;
        }
      }

      .active {
        color: #18a058;
        background: rgba(24, 160, 88, 0.1);
      }
    }
  }

  .router-view {
    height: auto;
    padding: 0 22px;
    flex: 1;
    overflow-y: auto;
    box-sizing: border-box;
  }
}
</style>