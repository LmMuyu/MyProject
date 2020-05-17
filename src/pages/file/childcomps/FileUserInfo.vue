<template>
  <view class="flex">
    <image
      src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4051190685,3300949277&fm=11&gp=0.jpg"
      class="iamge"
    />
    <view class="text flex-1 ma-l">
      <text class="siae">名称</text>
      <text class="font-size">总贴子:10 进入发帖:0</text>
    </view>
    <view class="iconfont flex-ja-c">&#xe694;</view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  padding: 38rpx;
}
.iamge {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}
.text>text:nth-last-child(1){
  color: $uni-text-color-grey;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>