<template>
  <view class="flex">
    <view class="info account_info">
      <text>账号信息</text>
      <text>UID:{{info.uid}}</text>
      <text>账号年龄:10</text>
    </view>
    <view class="info personal_info">
      <text>个人信息</text>
      <text>生日:{{info.birthday?info.birthday:"保密"}}</text>
      <text>职业:</text>
      <text>地址:{{info.address?info.address:"保密"}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-direction: column;
  margin-left: 20rpx;
}
.info {
  display: flex;
  flex-direction: column;
}
.flex > view:nth-child(2),
.flex > view:nth-child(1) {
  border-bottom: 1rpx solid $uni-border-color;
}
.personal_info,
.account_info {
  padding: 20rpx 0;
}
.personal_info > text:nth-child(1),
.account_info > text:nth-child(1) {
  font-size: 38rpx;
  padding: 0 0 32rpx 0;
}
.personal_info > text,
.account_info > text {
  padding: 10rpx 0;
}
</style>