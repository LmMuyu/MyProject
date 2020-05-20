<template>
  <view>
    <view class="flex" :style="`flex-direction:${recording.release === 2? 'row-reverse':'row'}`">
      <view class="viimg">
        <image
          mode="aspectFill"
          :src="recording.avatar"
          style="width:100rpx;height:100rpx"
          class="image"
        />
      </view>
      <text class="size panel-default">{{recording.content}}</text>
    </view>
  </view>
</template>
u 
<script>
export default {
  props: {
    recording: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  padding: 32rpx 0;
  width: 100%;
}
.image {
  border-radius: 50%;
}
.viimg {
  display: flex;
  align-items: flex-start;
}
.panel-default {
  margin-left: 25rpx;
  width: 400rpx;
  padding: 20rpx;
  border-radius: 6rpx;
  background: $uni-bg-color-grey;
}
</style>