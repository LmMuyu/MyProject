<template>
  <view class="pa-tb-2">
    <view class="flex border-b padding" v-for="(item, index) in 3" :key="index">
      <i class="iconfont">&#xe65e;</i>
      <text class="flex-1 size ma-l">游览历史</text>
      <i class="iconfont">&#xe694;</i>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.flex{
  display: flex;
  align-items: center;
}
.padding{
  padding: 28rpx 0;
}
</style>