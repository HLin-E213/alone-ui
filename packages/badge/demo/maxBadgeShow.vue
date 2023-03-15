<template>
  <a-badge :value="200" :max="99" class="item">
    <a-button>comments</a-button>
  </a-badge>
  <a-badge :value="100" :max="10" class="item">
    <a-button>replies</a-button>
  </a-badge>
</template>

<style lang="scss" scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
