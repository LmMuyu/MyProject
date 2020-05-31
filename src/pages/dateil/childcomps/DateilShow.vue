<template>
  <view>
    <view class="flex">
      <image :src="communiftInfo.topicImage" mode="aspectFill" />
    </view>
    <view class="font-size istext">#{{communiftInfo.title}}</view>
    <view class="text">
      <view class="text-color-9">动态：{{communiftInfo.dynamic}} 今日：{{communiftInfo.today}}</view>
      <view class="text-color-c">话题描述</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    communiftInfo: {
      type: Object,
      default: () => {}
    }
  }
};
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
.istext{
  padding: 12rpx 0;
}
</style>