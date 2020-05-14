<template>
  <view class="uploading flex-ja-c">
    <span class="font-size color">{{text}}</span>
  </view>
</template>

<script>
export default {
  name: "homeuploading",
  props: {
    text: {
      type: String,
      default: "没有更多数据了~~~"
    }
  }
};
</script>

<style  scoped>
.uploading {
  width: 100%;
  height: 80rpx;
}
.color{
	color:#57606f;
}
</style>