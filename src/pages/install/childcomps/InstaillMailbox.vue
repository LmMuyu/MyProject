<template>
  <view>
    <input type="text" class="margin-top input" placeholder="邮箱" />
    <input type="text" class="margin-top input" placeholder="密码" />

    <view class="flex-ja-c">
      <text
        class="flex-ja-c margin-top size bangding"
        style="background:#3498db;padding:16rpx;color:#ecf0f1;width:300rpx"
      >绑定</text>
    </view>
  </view>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  border: 1rpx solid $uni-border-color;
}
.input {
  padding: 8rpx;
  border-radius: $uni-border-radius-sm;
  font-size: $uni-spacing-row-lg;
}
.bangding {
  border-radius: $uni-border-radius-lg;
}
</style>