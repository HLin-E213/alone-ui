<template>
  <a-row :gutter="20">
    <a-col :span="16">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="8">
      <div class="grid-content bg-purple"/>
    </a-col>
  </a-row>
  <a-row :gutter="20">
    <a-col :span="8">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="8">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
  </a-row>
  <a-row :gutter="20">
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="16">
      <div class="grid-content bg-purple"/>
    </a-col>
    <a-col :span="4">
      <div class="grid-content bg-purple"/>
    </a-col>
  </a-row>
</template>

<style>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
