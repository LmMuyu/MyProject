<template>
  <view class="flex flex-wrap">
    <view v-for="(item, index) in recording" :key="index" class="text border-radius font-size">
      {{item}}
      <i class="iconfont" @click="deleteKeyword(index)">&#xe607;</i>
    </view>
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
  },
  methods: {
    deleteKeyword(i) {
      this.$emit("deleteKeyword", i);
    }
  }
};
</script>

<style scoped>
.text {
  padding: 12rpx;
  border: 1rpx solid #bdc3c7;
  margin: 8rpx;
  display: flex;
  align-items: center;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 40rpx;
  margin-left: 8rpx;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
