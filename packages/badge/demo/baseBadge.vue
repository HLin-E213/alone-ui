<template>
  <a-badge :value="12" class="item">
    <a-button size="small">comments</a-button>
  </a-badge>
  <a-badge :value="3" class="item">
    <a-button>replies</a-button>
  </a-badge>
  <a-badge :value="1" class="item" type="primary">
    <a-button>comments</a-button>
  </a-badge>
  <a-badge :value="2" class="item" type="warning">
    <a-button>replies</a-button>
  </a-badge>
</template>

<style lang="scss" scoped>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
