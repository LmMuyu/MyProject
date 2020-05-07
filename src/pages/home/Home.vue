<template>
  <view class="content">
    <img class="logo" src="/static/logo.png" />
    <view>
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello"
    };
  },
  created() {},
  methods: {},
  //停止下拉刷新
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function() {
      uni.stopPullDownRefresh();
    }, 1000);
  }
};
</script>

<style>
.content {
  text-align: center;
  height: 400rpx;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
