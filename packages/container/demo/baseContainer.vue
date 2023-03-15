<template>
  <a-container class="layout-com">
    <a-header>Header</a-header>
    <a-main>Main</a-main>
    <a-footer>Footer</a-footer>
  </a-container>
</template>

<style lang="scss">
  .center-util {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .layout-com {
    height: 300px;
  }
  .a-header {
    background-color: #c6e2ff;
    @extend .center-util;
  }
  .a-aside {
    background-color: #d9ecff;
    @extend .center-util;
  }
  .a-main {
    background-color: #ecf5ff;
    @extend .center-util;
  }
  .a-footer {
    background-color: #c6e2ff;
    @extend .center-util;
  }
</style>
