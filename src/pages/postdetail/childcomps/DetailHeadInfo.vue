<template>
  <view class="flex">
    <view>
      <image
        src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg"
        mode="aspectFill"
      />
    </view>
    <view class="nameTime">
      <text class="size">名称</text>
      <text class="font-size">2020年12月5日 14:25</text>
    </view>
    <view class="ma-left-au">
      <text
        class="guanzhu"
        @click="opentTion"
        :style="{ background: attention ? '#55efc4' : '#70a1ff' }"
      >{{ attention ? '已关注' : '关注' }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      attention: false
    };
  },
  methods: {
    //关注
    opentTion() {
      this.attention = this.attention ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
}
image {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
}
.nameTime {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.guanzhu {
  margin-right: 20rpx;
}
.guanzhu {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.guanzhu > text {
  margin-right: 24rpx;
  color: #ffffff;
  padding: 6rpx 8rpx;
  border-radius: 6rpx;
  font-size: $uni-font-size-lg;
}
</style>