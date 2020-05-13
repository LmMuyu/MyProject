<template>
  <view class="uploading flex-ja-c">
    <span class="font-size">{{text}}</span>
  </view>
</template>

<script>
export default {
  name: "homeuploading",
  props: {
    text: {
      type: String,
      default: "上拉加载"
    }
  }
};
</script>

<style scoped>
.uploading {
  width: 100%;
  height: 80rpx;
}
</style>