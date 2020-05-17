<template>
  <view>
    <view class="flex">
      <view class="iconfont">&#xe6eb;</view>
      <view class="size">多久啊哇i嗲我记得价位低啊单位觉得外大街dhuawhudhawhdhuawuduhahwd</view>
    </view>
    <view class="flex">
      <view class="iconfont">&#xe6eb;</view>
      <view class="size">多久啊哇i嗲我记得价位低啊单位觉得外大街</view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 46rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.flex{
  display: flex;
  padding: 16rpx 0;
  border-bottom: 1rpx solid $uni-border-color;
  margin:  0 16rpx;
  align-items: center;
}
.size{
  font-size: $uni-font-size-lg;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>