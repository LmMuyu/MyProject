<template>
  <view class="flex">
    <image
      src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1295023404,4162352065&fm=26&gp=0.jpg"
      mode="aspectFill"
    />

    <view class="content">
      <view class="viewflex">
        <text class="size">名称</text>
        <text class="font-size ma-left-au" style="color:#c0c0c0">2020-20-1</text>
      </view>
      <view class="viewflex">
        <text class="font-size">jdjawjdjawjdjajdajwj</text>
        <span></span>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  padding: 20rpx;
  border-bottom: 1rpx solid $uni-border-color;
}
image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 20rpx;
}
.viewflex {
  display: flex;
  justify-content: space-between;
}
</style>