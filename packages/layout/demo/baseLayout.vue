<template>
  <a-row>
    <a-col :span="24">
      <div class="grid-content bg-purple-dark"/>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="12">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="12">
      <div class="grid-content bg-purple-light"/>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="8">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="8">
      <div class="grid-content bg-purple-light"/>
    </a-col>
    <a-col :span="8">
      <div class="grid-content bg-purple"/>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="6">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="6">
      <div class="grid-content bg-purple-light"/>
    </a-col>
    <a-col :span="6">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="6">
      <div class="grid-content bg-purple-light"/>
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple-light"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple-light"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple-light"/>
    </a-col>
  </a-row>
</template>

<style lang="scss">
.a-row {
  margin-bottom: 20px;
}

.a-row:last-child {
  margin-bottom: 0;
}

.a-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purple-dark {
  background-color: #99a9bf;
}

.bg-purple-light {
  background-color: #e5e9f2;
}

.bg-purple {
  background-color: #67C23A;
}
</style>
