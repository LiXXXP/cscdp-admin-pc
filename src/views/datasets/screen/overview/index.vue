<template>
  <div class="gwin-platform-overview">
    <div class="gwin-platform-overview__title">鲸益地图</div>
    <Sheet></Sheet>
    <Feedback></Feedback>
    <Newly></Newly>
  </div>
</template>

<script lang="ts" setup>
import Sheet from '@/views/datasets/screen/overview/sheet/index.vue'
import Feedback from '@/views/datasets/screen/overview/feedback/index.vue'
import Newly from '@/views/datasets/screen/overview/newly/index.vue'
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@include b('overview') {
  width: 280px;
  z-index: 999;
  position: absolute;
  left: 40px;
  top: 100px;
  @include e('title') {
    width: 100%;
    font-size: 20px;
    color: #00ffff;
    font-weight: 500;
    text-align: center;
    padding: 10px 20px;
    border-radius: 16px;
    box-sizing: border-box;
    border: 1px solid #00ffff;
    background-color: rgba(4, 7, 17, 0.7);
  }
}
</style>
