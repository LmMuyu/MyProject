<template>
  <view class="searchfor">
    <view class="zhuti iconfont flex-ja-c">
      &#xe6a4;
      <span>搜索</span>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.zhuti {
  width: 100%;
  height: 32rpx;
  padding: 32rpx 0;
  border-radius: $uni-border-radius-base;
  background: $uni-bg-color-hover;
  background: #ffffff;
}
.zhuti > span {
  color: $uni-text-color-grey;
  font-size: $uni-font-size-base;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 32rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>