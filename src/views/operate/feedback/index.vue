<template>
  <div class="gwin-platform-wrapper">
    <ad-table-page :table-page-config="tablePageConfig"></ad-table-page>
  </div>
</template>

<script setup lang="ts">
import indexConfig from './index-config'
const { tablePageConfig } = indexConfig()
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';

@include b(wrapper) {
  padding: 20px;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 10px 0px rgba(0, 0, 0, 0.06);
  border-radius: 2px;
}
</style>
