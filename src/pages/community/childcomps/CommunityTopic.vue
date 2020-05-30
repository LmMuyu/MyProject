<template>
  <view class="Topic">
    <view class="flex">
      <view>
        <image
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1722396913,4133454449&fm=26&gp=0.jpg"
          class="image"
        />
      </view>
      <view class="flexs">
        <view class="siae">#话题名称#</view>
        <view>话题描述</view>
        <view>动态：10 今日：0</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.image {
  height: 250rpx;
  width: 250rpx;
}
.flex {
  display: flex;
  padding: 32rpx 0;
}
.zuijing>span{
    margin-top: 30rpx;
}
.flexs {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.flexs > view {
  font-size: $uni-font-size-base;
}
.flexs > view:nth-child(1) {
  font-size: 38rpx;
}
</style>