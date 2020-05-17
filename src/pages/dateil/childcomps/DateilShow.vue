<template>
  <view>
    <view class="flex">
      <image
        src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1456753444,332302625&fm=26&gp=0.jpg"
      />
      <view class="font-size">#核对货物端午等哈我</view>
    </view>
    <view class="text">
      <view class="text-color-9">动态：42 今日：0</view>
      <view class="text-color-c">话题描述</view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.flex > image {
  width: 200rpx;
  height: 200rpx;
  margin-top: -80rpx;
  border-radius: $uni-border-radius-base;
}
.flex > view {
  font-size: $uni-font-size-lg;
}
.text {
  font-size: $uni-font-size-base;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.text > view {
  padding: 16rpx 0;
}
</style>