<template>
  <view class="content"></view>
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
</style>
