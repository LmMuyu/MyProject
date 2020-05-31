<template>
  <view class="Topic">
    <view class="flex">
      <view>
        <image :src="updatedShow.topicImage" class="image" />
      </view>
      <view class="flexs">
        <view class="siae">#{{updatedShow.topicNane}}#</view>
        <view class="text">{{updatedShow.title}}</view>
        <view>动态：{{updatedShow.today}} 今日：0</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    updatedShow: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  height: 250rpx;
  width: 250rpx;
  border-radius: 6rpx;
}
.flex {
  display: flex;
  padding: 32rpx 0;
}
.zuijing > span {
  margin-top: 30rpx;
}
.flexs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10rpx;
}
.flexs > view {
  font-size: $uni-font-size-base;
}
.flexs > view:nth-child(1) {
  font-size: 38rpx;
}
.text {
  height: 60rpx;
  overflow: hidden;
}
</style>