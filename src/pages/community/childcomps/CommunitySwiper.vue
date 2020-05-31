<template>
  <view>
    <swiper indicator-dots autoplay :interval="2500" :duration="300" style="height:350rpx">
      <swiper-item v-for="(item, index) in swiper" :key="index">
        <image style="width:100%" mode="aspectFill" :src="item" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    swiper: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
</style>