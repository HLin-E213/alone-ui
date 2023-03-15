<!--
 * @Author 黄小林
 * @Description 
-->
<template>
  <header class="navbar">
    <div class="header-container">
      <div class="navbar-wrapper">
        <div class="logo">Alone UI</div>
        <!--        <div class="nav-link-content">
                  <div class="nav-link-item">
                    <span class="link-item" @click="handleNav('/component')">组件</span>
                  </div>
                </div>-->
      </div>
    </div>
  </header>
</template>

<script setup>
//import {useRouter} from "vue-router";
//const router = useRouter()
//const handleNav = (path) => {
//  router.push(path)
//}
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background-color: #ffffff;

  .header-container {
    height: 55px;
    border-bottom: 1px solid #f0f0f0;

    .navbar-wrapper {
      height: 100%;
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
        width: 180px;
        font-size: 22px;
      }

      /*.nav-link-content{
        .nav-link-item{
          flex: 1;
          display: flex;
          align-items: center;
          .link-item{
            font-size: 14px;
            display: block;
            padding: 0 12px;
            font-weight: 500;
            color: #303133;
            cursor: pointer;
            &:hover{
              color: #409eff;
            }
          }
        }
      }*/
    }

  }
}
</style>