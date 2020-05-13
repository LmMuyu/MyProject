<template>
  <view class="flex flex-wrap">
    <view
      v-for="(item, index) in recording"
      :key="index"
      class="text border-radius font-size"
    >{{item}}</view>
  </view>
</template>

<script>
export default {
  name: "SerchForRecording",
  props: {
    recording: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.text {
  padding: 16rpx;
  border: 1rpx solid #bdc3c7;
  margin: 8rpx;
}
</style>
